import { useTheme, createMuiTheme } from "@material-ui/core";
import { indigo, pink } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    //primary: indigo,
    //secondary: pink,
    marginTop: 100,
    color: 'black',
    backgroundColor: 'lightgrey',
    padding: 10,
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
  },
  searchContainer: {
    backgroundColor: 'pink',
    padding: 100    
  },
  avatar: {
    left: '45%',
    backgroundColor: 'pink'
  },
  paper: {
    textAlign: 'center',
    marginTop: 100
  },
  submit: {
    marginTop: 30,
  },
  
});


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
  root: {
    height: "100vh",
  },
  paper: {
    marginTop: 100
  }
  }));

export default theme;
