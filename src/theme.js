import { useTheme, createMuiTheme } from "@material-ui/core";
import { indigo, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
  drawerContainer: {
    height: "100%",
    width: "400px",
    background: "pink"
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
    left: '34%', 
    position: 'absolute', 
    fontWeight: 800, 
    fontSize: 15
  },
  signupText: {
    color: "white", 
    bottom:20, 
    left: '35%', 
    position: 'absolute', 
    fontWeight: 90, 
    fontSize: 25
  }
});

export default theme;
