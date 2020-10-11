
import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import { Link } from 'react-router-dom';
import theme from './theme';
import NavBar from './NavBar';

function SignIn() {
    return (
        <div>
            <NavBar />
            <h3>Sign In!</h3>
        </div>  
        
    );
}

export default SignIn;

