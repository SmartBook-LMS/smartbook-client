import { createMuiTheme } from "@material-ui/core";

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
    // textAlign: 'center',
    marginTop: 100
  },
  submit: {
    marginTop: 30,
  },
  
});

export default theme;
