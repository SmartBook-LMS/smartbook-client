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
  }
});

export default theme;
