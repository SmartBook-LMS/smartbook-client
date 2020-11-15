import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { AuthContext, useConstructor } from "./constants";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GuardedRoute from "../components/GuardedRoute";

import {
  AccountPage,
  CheckoutsPage,
  HomePage,
  LoadingPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "../pages";

import { GetUserInfo } from "./requests";
import ManageCatalogPage from "../pages/ManageCatalogPage";

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
      } catch (e) {
        localStorage.removeItem("authToken");
      }
    }
    setLoading(false);
  });

  const hasAuth = authToken !== "";

  const auth = {
    account: account,
    authToken: authToken,
    setAuthToken: setAuthToken,
    setAccount: setAccount,
    signOut: () => {
      localStorage.setItem("authToken", "");
      setAuthToken("");
      setAccount(null);
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
              path="/Search"
              component={SearchPage}
              auth={hasAuth}
            />
            <GuardedRoute
              path="/ManageCatalog"
              component={ManageCatalogPage}
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
            <GuardedRoute path="/" component={HomePage} auth={hasAuth} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
