import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import {  Container, Row, Col} from 'react-bootstrap';
//import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import theme from './theme';
import Modal from 'react-modal';
import SignUp from './SignUp';
import NavBar from './NavBar';



function Home() {
    //const [sidebar, setSidebar] = useState(false);
    //const showSidebar = () => setSidebar(!sidebar);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const [SignUpSidebar, setSignUpSidebar] = useState(false);
    const [SignUpOpen, setSignUpOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(true);
    }
    const handleSignUpDrawer = () => {
        setSignUpOpen(true);
    }



    const drawerItems = [
        {
            listIcon: <AccountCircleRoundedIcon style={{color: 'white', fontSize: 50, paddingRight: 10}}/>,
            listText: <h2 style={{color: 'white'}}>Sign In</h2>,
            listPath: "/SignUp"
        }
    ]

    return (
        <div>
            <NavBar />

        </div>  
    );
}

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
*/