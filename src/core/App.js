import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { AuthContext, BagContext, useConstructor } from "./constants";
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
  PatronPage,
} from "../pages";

import { GetUserInfo } from "./requests";
import ManageCatalogPage from "../pages/ManageCatalogPage";
import FinesPage from "../pages/FinesPage";
import BagPage from "../pages/BagPage";
import ReturnsPage from "../pages/ReturnsPage";
import DashboardPage from "../pages/DashboardPage";

function App() {
  const [authToken, setAuthToken] = useState("");
  const [account, setAccount] = useState({});
  const [checkouts, setCheckouts] = useState([]);
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

  const bag = {
    checkouts,
    numItems: checkouts.length,
    clearBag: () => setCheckouts([]),
    addItem: (item) =>
      !checkouts.includes(item) ? setCheckouts([...checkouts, item]) : null,
    removeItem: (item) => {
      const index = checkouts.findIndex(
        (media) => media.copyID === item.copyID
      );

      if (index >= 0) {
        checkouts.splice(index, 1);
        console.log(checkouts);
        setCheckouts([...checkouts]);
      }
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
        <BagContext.Provider value={bag}>
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
                path="/Fines"
                component={FinesPage}
                auth={hasAuth}
              />
              <GuardedRoute
                path="/Dashboard"
                component={DashboardPage}
                auth={hasAuth}
              />
              <GuardedRoute
                path="/Returns"
                component={ReturnsPage}
                auth={hasAuth}
              />
              <GuardedRoute path="/MyBag" component={BagPage} auth={hasAuth} />
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
              <GuardedRoute
                path="/PatronPage"
                component={PatronPage}
                auth={hasAuth}
                redirectTo="/"
              />
              <GuardedRoute path="/" component={HomePage} auth={hasAuth} />
            </Switch>
          </Router>
        </BagContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
