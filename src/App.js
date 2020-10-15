import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { baseURL, useConstructor } from "./constants";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
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
  const [authenticated, setAuthenticated] = useState(false);
  useConstructor(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthenticated(true);
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <GuardedRoute exact path="/" component={Home} auth={authenticated} />
          <GuardedRoute
            path="/MyBook"
            component={MyBook}
            auth={authenticated}
          />
          <GuardedRoute
            path="/Account"
            component={Account}
            auth={authenticated}
          />
          <GuardedRoute
            path="/SignUp"
            component={SignUp}
            auth={!authenticated}
            redirectTo="/"
          />
          <GuardedRoute
            path="/SignIn"
            component={SignIn}
            auth={!authenticated}
            redirectTo="/"
          />
          <Route path="/Search" component={Search} />
        </Switch>
      </Router>
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
