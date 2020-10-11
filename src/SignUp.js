import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import {  Container, Row, Col } from 'react-bootstrap';
//import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import theme from './theme';
import NavBar from './NavBar';

function SignUp() {

    /*const [SignUpOpen, setSignUpOpen] = useState(false);

    const handleSignUpDrawer = () => {
        setSignUpOpen(true);
    }
    const drawerItems = [
        {
            listIcon: <AccountCircleRoundedIcon style={{color: 'white', fontSize: 50, paddingRight: 10}}/>,
            listText: <h2 style={{color: 'white'}}>Sign In</h2>
        }
    ]*/

    return (
        <div>
            <NavBar />
            <h3>Sign Up!</h3>
        </div>  
        
    );
}


/*
<Drawer anchor='right' onClose={() => setSignUpOpen(false)}>     
            <List style={{backgroundColor: 'pink'}}>
               
            </List>
        </Drawer>*/ 
export default SignUp;

