import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import theme from "./theme";
import { AuthContext } from "./constants";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { signOut } = useContext(AuthContext);

  const handleDrawer = () => {
    setOpen(true);
  };
  const drawerItems = [
    {
      listIcon: (
        <AccountCircleRoundedIcon
          style={{ color: "white", fontSize: 50, paddingRight: 10 }}
        />
      ),
      listText: <h2 style={{ color: "white" }}>Sign In</h2>,
      listPath: "/SignIn",
    },
  ];

  return (
    <Box component="nav">
      <AppBar
        position="static"
        style={{ background: "#2196f3", marginBottom: 20 }}
      >
        <Toolbar style={{ justifyContent: "space-between", paddingLeft: 300 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="h6" style={{ color: "white" }}>
              <p>Home</p>
            </Button>
          </Link>
          <Link to="/MyBook" style={{ textDecoration: "none" }}>
            <Button type="button" style={{ color: "white" }}>
              My Book
            </Button>
          </Link>
          <Link to="/Account" style={{ textDecoration: "none" }}>
            <Button variant="h6" style={{ color: "white" }}>
              Account
            </Button>
          </Link>
          <IconButton
            style={{ justifyContent: "end" }}
            onClick={handleDrawer}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <List style={{ backgroundColor: "pink" }}>
              {drawerItems.map((lsItem, key) => (
                <Link to="/SignIn" style={{ textDecoration: "none" }}>
                  <ListItem button key={key}>
                    <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
                    <ListItemText
                      style={{ color: "white", textSizeAdjust: "auto" }}
                      primary={lsItem.listText}
                    ></ListItemText>
                  </ListItem>
                </Link>
              ))}
            </List>
            <div style={theme.drawerContainer}>
              <Button variant="h6" style={theme.signupText} onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
