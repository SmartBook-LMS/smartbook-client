import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  Close,
  LibraryBooksRounded,
  LibraryMusicRounded,
  VideoLibraryRounded,
} from "@material-ui/icons";
import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { BagContext } from "../core/constants";

function BagPage() {
  const { checkouts, removeItem } = useContext(BagContext);

  const checkoutItems = () => {
    if (checkouts.length === 0) return;
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Your bag</Typography>
          <List style={{ maxHeight: 500, overflowY: "auto" }}>
            {checkouts.map((item) => (
              <ListItem>
                <ListItemIcon>
                  {item.mediaType === "book" && <LibraryBooksRounded />}
                  {item.mediaType === "music" && <LibraryMusicRounded />}
                  {item.mediaType === "movie" && <VideoLibraryRounded />}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => removeItem(item)}>
                    <Close />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
            {checkouts.length === 0 && (
              <Typography variant="body">No items in bag</Typography>
            )}
          </List>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={checkoutItems}
          >
            Checkout
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default BagPage;
