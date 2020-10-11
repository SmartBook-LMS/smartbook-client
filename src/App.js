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
//import Home from "./components/";
import Home from "./Home";
import './App.css';

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
    /*<>
      <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/MyBook" component={MyBook} />
        <Route path="/Account" component={Account} />
    </>*/
    <Router>
      <Home>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/MyBook" component={MyBook} />
          <Route path="/Account" component={Account} />
        </Switch>
      </Home>
    </Router>

    /*<>
      <Router>
        <Home>
          <Switch>
            <Route parth='/' />
          </Switch>
        </Home>
      </Router>
    </>*/

    /*<ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SmartBook LMS 
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/MyBook" component={MyBook} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/SignIn" component={SignIn} />

        </div>
      </Router>
  </ThemeProvider>*/
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
