import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect } from "react";
import theme from "./theme";

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

    const tokenResponse = await fetch(
      "https://backend-dot-smartbook-lms.uc.r.appspot.com/login-user/",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: tokenHeader,
      }
    );
    const tokenResponseJson = await tokenResponse.json();
    token = tokenResponseJson.token;
    localStorage.setItem("token", tokenResponseJson.token);
  } else {
    console.log("Cached token is " + token);
  }

  const dataHeader = {
    Authorization: `Token ${token}`,
  };
  const dataResponse = await fetch("https://backend-dot-smartbook-lms.uc.r.appspot.com/hello/", {
    headers: dataHeader,
  });
  const dataResponseJson = await dataResponse.json();
  console.log(dataResponseJson);
};

function App() {
  const classes = useStyles();

  useEffect(() => {
    makeCall();
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
