import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import {
  AuthContext,
  baseURL,
  convertSQLAccount,
  useConstructor,
} from "./constants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuardedRoute from "../components/GuardedRoute";

import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
import CheckoutsPage from "../pages/CheckoutsPage";
import LoadingPage from "../pages/LoadingPage";
import AccountPage from "../pages/AccountPage";
import { GetUserInfo } from "./requests";

// const makeCall = async () => {
//   let token = localStorage.getItem("token");

//   if (token == null) {
//     const user = {
//       username: "dkambich",
//       password: "1234",
//     };

//     const tokenHeader = {
//       "Content-Type": "application/json",
//     };

//     const tokenResponse = await fetch(`${baseURL}/login-user/`, {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: tokenHeader,
//     });
//     const tokenResponseJson = await tokenResponse.json();
//     token = tokenResponseJson.token;
//     localStorage.setItem("token", tokenResponseJson.token);
//   } else {
//     console.log("Cached token is " + token);
//   }

//   const dataHeader = {
//     Authorization: `Token ${token}`,
//   };
//   const dataResponse = await fetch(`${baseURL}/sample-sql/`, {
//     headers: dataHeader,
//   });
//   const dataResponseJson = await dataResponse.json();
//   console.log(dataResponseJson);
// };

function App() {
  const [authToken, setAuthToken] = useState("");
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(true);

  useConstructor(async () => {
    const token = localStorage.getItem("authToken");

    // Check if the token is in local storage
    if (token) {
      try {
        const account = await GetUserInfo(token);
        setAuthToken(token);
        setAccount(account);
      } catch (e) {}
    }
    setLoading(false);
  });

  const hasAuth = authToken !== "";

  const auth = {
    account: account,
    authToken: authToken,
    setAuthToken: setAuthToken,
    signOut: () => {
      localStorage.setItem("authToken", "");
      setAuthToken("");
    },
  };

  if (loading)
    return (
      <ThemeProvider theme={theme}>
        <LoadingPage />
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={auth}>
        <Router>
          <Switch>
            <GuardedRoute exact path="/" component={HomePage} auth={hasAuth} />
            <GuardedRoute
              path="/Checkouts"
              component={CheckoutsPage}
              auth={hasAuth}
            />
            <GuardedRoute
              path="/Account"
              component={AccountPage}
              auth={hasAuth}
            />
            <GuardedRoute
              path="/SignUp"
              component={SignUpPage}
              auth={!hasAuth}
              redirectTo="/"
            />
            <GuardedRoute
              path="/SignIn"
              component={SignInPage}
              auth={!hasAuth}
              redirectTo="/"
            />
            <Route path="/Search" component={SearchPage} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
