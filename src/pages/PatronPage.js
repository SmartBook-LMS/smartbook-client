import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
  } from "@material-ui/core";
  import {
    LibraryBooksRounded,
    LibraryMusicRounded,
    VideoLibraryRounded,
  } from "@material-ui/icons";
  import React, { useContext, useState } from "react";
  import NavBar from "../components/NavBar";
  import { AuthContext, useConstructor } from "../core/constants";
  import { GetCheckouts } from "../core/requests";
  
  function PatronPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { authToken } = useContext(AuthContext);
  
    const loadItems = async () => {
      setLoading(true);
      const { checkouts } = await GetCheckouts(authToken);
      setItems(checkouts.map((item) => ({ item, selected: false })));
      setLoading(false);
    };
  
    useConstructor(loadItems);
  
    const returnItems = async () => {
      const toReturn = items
        .filter((item) => item.selected)
        .map(({ item }) => item);
      if (toReturn.length === 0) return;
      setItems([]);
      // Send items to return
      await loadItems();
    };
  
    return (
      <>
        <NavBar />
        <Container maxWidth="md">
          <Paper style={{ margin: 32, padding: 32 }}>
            <Typography variant="h6">Your checkouts</Typography>
            
           
          </Paper>
        </Container>
      </>
    );
  }
  
  export default PatronPage;
  