import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer } from '@material-ui/core';
import {  Container, Row, Col } from 'react-bootstrap';
//import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SignIn from './SignIn';
import theme from './theme';


function Home() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [open, setOpen] = useState(false);
    const handleDrawer = () => {
        setOpen(true);
    }

    return (
        <Box component="nav">
            
        <AppBar position="static" style={{ background: "#2196f3", margin: 20 }}>
            <Toolbar style={{justifyContent: 'space-between', paddingLeft: 300}}>
                <Button variant="h6" style={{ color: "white", }}>Home</Button>
                <Button variant="h6" style={{ color: "white", }}>My Book</Button>
                <Button variant="h6" style={{ color: "white", }}>Account</Button>
                <IconButton style={{justifyContent: 'end'}}> <MenuIcon onClick={handleDrawer} /></IconButton>


            </Toolbar>
        </AppBar>
        <Drawer

            anchor='right'
            open={open}
            onClose={() => setOpen(false)}
        >        
        <div  style={theme.drawerContainer}>
            <h3>Drawer</h3>            
            </div>    

        </Drawer>
    </Box>
    );
}

export default Home;