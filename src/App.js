import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import theme from "./theme";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MyBook from './MyBook';
import Account from './Account';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Search from './Search';
//import Home from "./components/";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();
  return (

    <CssBaseline>
      <Route exact path="/" component={Home} />
      <Route path="/MyBook" component={MyBook} />
      <Route path="/Account" component={Account} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/Search" component={Search} />
    </CssBaseline>
  
   
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
