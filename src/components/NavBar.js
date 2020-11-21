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
  makeStyles,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { AuthContext } from "../core/constants";
import {
  AttachMoneyRounded,
  ExitToAppRounded,
  HomeRounded,
  LibraryBooksRounded,
  PeopleRounded,
  PostAddRounded,
  SearchRounded,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: `linear-gradient(135deg, ${theme.palette.secondary[100]}, ${theme.palette.secondary[200]},  ${theme.palette.secondary[200]})`,
    //background: 'lightgrey',
    minWidth: 400,
  },
  navBarLinks: {
    display: "flex",
    flexGrow: 1,
    color: "pink",
    justifyContent: "space-around",
  },
  drawerHeader: {
    color: "white",
    paddingTop: 16,
  },
  drawerIcon: {
    color: "white",
    fontSize: 48,
    paddingRight: 10,
  },
  drawerLink: {
    textDecoration: "none",
  },
  drawerText: {
    color: "white",
    fontSize: 30,
  },
  drawerItem: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  signOut: {
    color: "white",
    bottom: 20,
    left: "35%",
    position: "absolute",
    fontWeight: 90,
  },
}));

function NabBarLink({ text, to }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button style={{ color: "white" }}>{text}</Button>
    </Link>
  );
}

function DrawerItem({ icon, text, to, onClick }) {
  const styles = useStyles();

  return (
    <Link to={to} className={styles.drawerLink}>
      <ListItem button className={styles.drawerItem} onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography
              color="textPrimary"
              variant="h4"
              className={styles.drawerText}
            >
              {text}
            </Typography>
          }
        ></ListItemText>
      </ListItem>
    </Link>
  );
}

function NavBar() {
  const styles = useStyles();
  const { signOut, account } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  let drawerItems = [
    {
      icon: <HomeRounded className={styles.drawerIcon} />,
      text: "Home",
      to: "/",
      onClick: () => setOpen(false),
    },
    {
      icon: <SearchRounded className={styles.drawerIcon} />,
      text: "Browse",
      to: "/Search",
      onClick: () => setOpen(false),
    },
    {
      icon: <LibraryBooksRounded className={styles.drawerIcon} />,
      text: "Checkouts",
      to: "/Checkouts",
      onClick: () => setOpen(false),
    },
    {
      icon: <AttachMoneyRounded className={styles.drawerIcon} />,
      text: "View Fines",
      to: "/Fines",
      onClick: () => setOpen(false),
    },
    {
      icon: <AccountCircleRoundedIcon className={styles.drawerIcon} />,
      text: "My Account",
      to: "/Account",
      onClick: () => setOpen(false),
    },
  ];

  const librarianDrawerItems = [
    {
      icon: <PeopleRounded className={styles.drawerIcon} />,
      text: "View Patrons",
      to: "/",
      onClick: () => setOpen(false),
    },
    {
      icon: <PostAddRounded className={styles.drawerIcon} />,
      text: "Manage Catalog",
      to: "/ManageCatalog",
      onClick: () => setOpen(false),
    },
  ];

  if (account.librarian) {
    drawerItems = [...drawerItems, ...librarianDrawerItems];
  }

  return (
    <Box component="nav">
      <AppBar position="static">
        <Toolbar>
          <Box className={styles.navBarLinks}>
            <NabBarLink to="/" text="Home" />
            <NabBarLink to="/Checkouts" text="Checkouts" />
            <NabBarLink to="/Account" text="Account" />
          </Box>

          <IconButton edge="end" onClick={() => setOpen(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            classes={{ paper: styles.paper }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <Typography
              variant="h6"
              align="center"
              className={styles.drawerHeader}
            >
              Welcome! {`${account.firstName} ${account.lastName}`}
            </Typography>
            <List>
              {drawerItems.map((item, index) => (
                <DrawerItem {...item} key={index} className={styles.drawItem} />
              ))}
            </List>
            <Button
              size="large"
              startIcon={<ExitToAppRounded />}
              className={styles.signOut}
              onClick={signOut}
            >
              Sign Out
            </Button>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
