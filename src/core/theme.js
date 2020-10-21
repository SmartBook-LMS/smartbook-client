import { createMuiTheme } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    marginTop: 100,
    color: "black",
    backgroundColor: "lightgrey",
    padding: 10,
  },
  drawerContainer: {
    height: "100%",
    width: "400px",
    background: "pink",
  },
  signinText: {
    color: "white",
    fontWeight: 90,
    top: 20,
    fontSize: 30,
  },
  question: {
    color: "white",
    bottom: 60,
    left: "34%",
    position: "absolute",
    fontWeight: 800,
    fontSize: 15,
  },
  searchContainer: {
    backgroundColor: "pink",
    padding: 100,
  },
  avatar: {
    left: "45%",
    backgroundColor: "pink",
  },
  paper: {
    marginTop: 100,
  },
  submit: {
    marginTop: 30,
  },
  table: {
    minWidth: 650,
  },
  searchpaper: {
    padding: 50,
    marginTop: 20,
  },
});

export default theme;
