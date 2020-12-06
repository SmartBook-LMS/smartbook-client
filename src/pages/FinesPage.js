import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { AuthContext, useConstructor } from "../core/constants";
import { GetFines, PayFines } from "../core/requests";

function toDollarStr(num) {
  return `$${(Math.round(num * 100) / 100).toFixed(2)}`;
}

function toDateStr(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function FinesPage() {
  const [loading, setLoading] = useState(false);
  const [fines, setFines] = useState([]);
  const { authToken, account } = useContext(AuthContext);

  const getFineData = async () => {
    setLoading(true);
    // TODO: Add actual loading code
    let allFines = await GetFines(authToken);
    console.log(allFines);
    allFines = allFines.map(({ amountDue, checkoutDate, returnDate }) => ({
      title: `Your checkout on ${toDateStr(checkoutDate)}`,
      fine: amountDue,
      dueDate: returnDate,
    }));
    setFines(allFines);
    setLoading(false);

    // setTimeout(() => {
    //   setFines([
    //     { title: "First", fine: 10, dueDate: new Date() },
    //     { title: "Middle", fine: 5, dueDate: new Date() },
    //     { title: "Almost", fine: 2, dueDate: new Date() },
    //     { title: "Last", fine: 6, dueDate: new Date() },
    //   ]);
    // }, 500);
  };

  useConstructor(() => getFineData());

  const totalFine = toDollarStr(
    fines.reduce(
      (prev, curr) => ({
        fine: prev.fine + curr.fine,
      }),
      { fine: 0 }
    ).fine
  );

  const payFines = async (amount) => {
    await PayFines(authToken, account.username);
    setFines([]);
    await getFineData();
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="md">
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Your Fines</Typography>
          <Box display="flex">
            <Box flex={3} paddingRight={2}>
              <Typography>Fine Summary:</Typography>
              <List style={{ maxHeight: 200, overflowY: "auto" }}>
                {fines.map((fine, index) => (
                  <ListItem dense key={index}>
                    <ListItemText
                      primary={fine.title}
                      secondary={`Due date was ${toDateStr(fine.dueDate)}`}
                    />
                    <ListItemSecondaryAction>
                      <Typography color="error">
                        + {toDollarStr(fine.fine)}
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
                {!loading && fines.length === 0 && (
                  <Typography>No fines found</Typography>
                )}
              </List>
              {loading && (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height={200}
                >
                  <CircularProgress />
                </Box>
              )}
              <Box marginY={1} />
              <Divider />
              <Box display="flex" flexDirection="row" paddingTop={1}>
                <Box flexGrow={1}>
                  <Typography>Total balance:</Typography>
                </Box>
                <Typography>{totalFine}</Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              display="flex"
              flex={2}
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>Pay your fines</Typography>
              <Typography variant="h3">{totalFine}</Typography>
              <Button variant="contained" onClick={payFines}>
                Pay Fines
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default FinesPage;
