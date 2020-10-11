import { useTheme, createMuiTheme } from "@material-ui/core";
import { indigo, pink } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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
