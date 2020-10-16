import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import NavBar from './NavBar';
import Typed from "react-typed";


function Header() {
    return (
        <Box>
            <Typography style={{fontSize: 50, fontWeight: 40, padding: 100}}>WELCOME TO</Typography>
            <Typography style={{fontSize: 50, fontWeight: 40, paddingLeft:100}}>SMART BOOK</Typography>

            {/*<Typography style={{fontSize: 50, fontWeight: 40, padding: 100}}>
                <Typed strings={["WELCOME TO"]} TypeSpeed={40} />
            </Typography>*/}
        </Box>
    );

}

export default Header;