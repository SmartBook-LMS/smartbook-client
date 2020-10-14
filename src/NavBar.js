import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import theme from './theme';

import SignUp from './SignUp';
import SignIn from './SignIn';

function NavBar() {
    const [open, setOpen] = useState(false);
    const handleDrawer = () => {
        setOpen(true);
    } 
    const drawerItems = [
        {
            listIcon: <AccountCircleRoundedIcon style={{color: 'white', fontSize: 50, paddingRight: 10}}/>,
            listText: <h2 style={{color: 'white'}}>Sign In</h2>,
            listPath: '/SignIn'
        }
    ]
  
    return (
        <Box component="nav">
        <AppBar position="static" style={{ background: "#2196f3", margin: 20 }}>
            <Toolbar style={{justifyContent: 'space-between', paddingLeft: 300}}>
                <Link to="/" style={{ textDecoration: 'none' }}><Button variant="h6" style={{ color: "white" }}><p>Home</p></Button></Link>
                <Link to="/MyBook" style={{ textDecoration: 'none' }}><Button type="button"style={{ color: "white", }}>My Book</Button></Link>
                <Link to="/Account" style={{ textDecoration: 'none' }}><Button variant="h6" style={{ color: "white", }}>Account</Button></Link>
                <IconButton style={{justifyContent: 'end'}}> <MenuIcon onClick={handleDrawer} /></IconButton>
                <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>     
                    <List style={{backgroundColor: 'pink'}}>
                        {drawerItems.map((lsItem, key) => (
                        <Link to="/SignIn" style={{ textDecoration: 'none' }}>
                        <ListItem button key={key} >
                            <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
                            <ListItemText style={{color: 'white',textSizeAdjust: 'auto'}} primary={lsItem.listText} ></ListItemText>
                        </ListItem>
                        </Link>
                        ))}
                    </List>
                    <div  style={theme.drawerContainer}>
                        <h5 style={theme.question}>Don't have Account?</h5>
                        {/*<Button variant="primary" style={theme.signupText} onClick={onOpenModal}>Sign Up!</Button> */}
                        <Link to="/SignUp" style={{ textDecoration: 'none' }}><Button variant="h6" style={theme.signupText} onClick={SignUp}>Sign Up!</Button></Link>      
                    </div>    
                </Drawer>       
            </Toolbar> 
        </AppBar>
        </Box>
    );
}

export default NavBar;