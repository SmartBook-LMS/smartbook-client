import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { AuthContext, baseURL, useConstructor } from "./constants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyBook from "./MyBook";
import Account from "./Account";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Search from "./Search";
import Home from "./Home";
import GuardedRoute from "./components/GuardedRoute";

const makeCall = async () => {
  let token = localStorage.getItem("token");

  if (token == null) {
    const user = {
      username: "dkambich",
      password: "1234",
    };

    const tokenHeader = {
      "Content-Type": "application/json",
    };

    const tokenResponse = await fetch(`${baseURL}/login-user/`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: tokenHeader,
    });
    const tokenResponseJson = await tokenResponse.json();
    token = tokenResponseJson.token;
    localStorage.setItem("token", tokenResponseJson.token);
  } else {
    console.log("Cached token is " + token);
  }

  const dataHeader = {
    Authorization: `Token ${token}`,
  };
  const dataResponse = await fetch(`${baseURL}/sample-sql/`, {
    headers: dataHeader,
  });
  const dataResponseJson = await dataResponse.json();
  console.log(dataResponseJson);
};

function App() {
  const [authToken, setAuthToken] = useState("");
  useConstructor(() => {
    const token = localStorage.getItem("authToken");
    if (token) setAuthToken(token);
  });

  const hasAuth = authToken !== "";

  const auth = {
    authToken: authToken,
    setAuthToken: setAuthToken,
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={auth}>
        <Router>
          <Switch>
            <GuardedRoute exact path="/" component={Home} auth={hasAuth} />
            <GuardedRoute path="/MyBook" component={MyBook} auth={hasAuth} />
            <GuardedRoute path="/Account" component={Account} auth={hasAuth} />
            <GuardedRoute
              path="/SignUp"
              component={SignUp}
              auth={!hasAuth}
              redirectTo="/"
            />
            <GuardedRoute
              path="/SignIn"
              component={SignIn}
              auth={!hasAuth}
              redirectTo="/"
            />
            <Route path="/Search" component={Search} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

/*function AppRoutes() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="./MyBook">
        <MyBook />
      </Route>
      <Route path="./Account">
        <Account />
      </Route>
    </Switch>
  );
}*/

export default App;
