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

function ReturnsPage() {
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
          <List style={{ maxHeight: 500, overflowY: "auto" }}>
            {items.map(({ item, selected }, index) => (
              <ListItem key={item.copyID}>
                <ListItemIcon>
                  <Box display="flex" alignItems="center" marginRight={1}>
                    <Checkbox
                      checked={selected}
                      onClick={() => {
                        items[index].selected = !selected;
                        setItems([...items]);
                      }}
                    />
                    {item.mediaType === "book" && <LibraryBooksRounded />}
                    {item.mediaType === "music" && <LibraryMusicRounded />}
                    {item.mediaType === "movie" && <VideoLibraryRounded />}
                  </Box>
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
            {items.length === 0 && !loading && (
              <Typography variant="body1">No items to return</Typography>
            )}
            {loading && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={500}
              >
                <CircularProgress />
              </Box>
            )}
          </List>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={returnItems}
          >
            Return
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default ReturnsPage;
