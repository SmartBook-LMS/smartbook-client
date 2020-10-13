import React, { useState } from "react";
import { Grid, TextField, Select, FormControl, MenuItem, InputLabel, Box, Typography, Button, IconButton, Drawer, List, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import {  Container, Row, Col} from 'react-bootstrap';
//import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Modal from 'react-modal';
import SignUp from './SignUp';
import NavBar from './NavBar';
import Header from './Header';



function Home() {
    //const [sidebar, setSidebar] = useState(false);
    //const showSidebar = () => setSidebar(!sidebar);
    //const [modalIsOpen, setModalIsOpen] = useState(false);
    //const [open, setOpen] = useState(false);

    const [SignUpSidebar, setSignUpSidebar] = useState(false);
    const [SignUpOpen, setSignUpOpen] = useState(false);

 
    const handleDrawer = () => {
        setOpen(true);
    }
    const handleSignUpDrawer = () => {
        setSignUpOpen(true);
    }


    const classes = useStyles();
    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };



    const drawerItems = [
        {
            listIcon: <AccountCircleRoundedIcon style={{color: 'white', fontSize: 50, paddingRight: 10}}/>,
            listText: <h2 style={{color: 'white'}}>Sign In</h2>,
            listPath: "/SignUp"
        }
    ]

    return (
        <Box>
        <NavBar />
        <Header />
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 250, alignItems: 'center', justifyContent:'center'}}>
        <InputLabel id="demo-controlled-open-select-label" style={{marginRight: 20}}>Type</InputLabel>

        <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                    style={{marginRight: 20, width: 90}}

            
                    >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Book</MenuItem>
                    <MenuItem value={2}>Movie</MenuItem>
                    <MenuItem value={3}>Music</MenuItem>
                </Select>
                <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{width: 400}}
                />
          
          </div>
          </Box>
        



        
    );
}


/*
<div style={{width: 40, height: 40, backgroundColor: 'pink'}}></div>
            <div style={{width: 40, height: 40, backgroundColor: 'blue'}}></div>



 <Box>
        <NavBar />
        <Header />
        <div style={{margin: 200}}>

          <Grid container >
            <Grid item xs={} sm={6}>
                <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                    autoFocus
                    style={{width: 100}}
                    >
                    <MenuItem value=""><em>All</em></MenuItem>
                    <MenuItem value={1}>Book</MenuItem>
                    <MenuItem value={2}>Movie</MenuItem>
                    <MenuItem value={3}>Music</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                fullWidth
                />
            </Grid>
          </Grid>
          </div>
          </Box>


 */


/*

<Container component="main" maxWidth="xs">
            <CssBaseline />
            <NavBar />
            <Header />
                <Grid container spacing={2} justify='center'>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={age}
                            onChange={handleChange}
                            >
                            <MenuItem value=""><em>All</em></MenuItem>
                            <MenuItem value={1}>Book</MenuItem>
                            <MenuItem value={2}>Movie</MenuItem>
                            <MenuItem value={3}>Music</MenuItem>
                        </Select>
                        
                    </FormControl>
                    <Grid item xs={12} sm={6}>
                        <SearchBar
                            onChange={() => console.log('onChange')}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            style={{
                                //margin: '0 auto',
                                maxWidth: 500,
                                marginTop: 200
                            }}
                        />
                    </Grid>
                </Grid>
        </Container>
*/ 


/*
<Container component="main" maxWidth="xs">
      <CssBaseline />





      <div>
            <NavBar />
            <Header />
            <div>
                <Button className={classes.button} onClick={handleOpen}>Open the select</Button>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value=""><em>All</em></MenuItem>
                    <MenuItem value={1}>Book</MenuItem>
                    <MenuItem value={2}>Movie</MenuItem>
                    <MenuItem value={3}>Music</MenuItem>
                </Select>
                </FormControl>
                <SearchBar
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                />
            </div>
        </div> 

*/


const useStyles = makeStyles((theme) => ({
    /*formControl: {
      minWidth: 120,
      marginTop: 200,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        paddingLeft: 200,
        marginLeft: 200,
        backgroundColor: 'blue'
      },   */
      
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

export default Home;

/*
 <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>     
            <List style={{backgroundColor: 'pink'}}>
                {drawerItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText style={{color: 'white',textSizeAdjust: 'auto'}} primary={lsItem.listText} ></ListItemText>

  
                        </ListItem>
                        ))}
                    </List>
                    <div  style={theme.drawerContainer}>
                        <h5 style={theme.question}>Don't have Account?</h5>
                        <Button variant="h6" style={theme.signupText} onClick={SignUp}>Sign Up!</Button>       
                        {
                } 
                    </div>    
        
                  
                </Drawer>
</Container>*/