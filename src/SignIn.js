import React from "react";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { AppBar, Toolbar, Box, Typography, Button, ListItemIcon, ListItemText, ListItem } from '@material-ui/core';


const sideBarIcons = {
    listIcon: <PersonOutlineIcon/>,
    listText: "Sign In"
}
function SignIn() {
    return (
        <Box>
            {sideBarIcons.map((lsItem, key) => (
                <ListItem button>
                    <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
                    <ListItemText primary={lsItem.listText}/>
                </ListItem>
            ))}

        </Box>
        /*<div className="ui sidebar overlay left inverted menu visible">
        <ul>
            <li></li>
        </ul>
        </div>*/
    );
}

export default SignIn;