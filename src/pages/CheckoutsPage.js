import React, { useContext, useState } from "react";
import { Grid, Paper, Typography, Box, Container } from "@material-ui/core";
import NavBar from "../components/NavBar";
import { GetCheckouts } from "../core/requests";
import { AuthContext, useConstructor } from "../core/constants";

function toDateStr(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function getDaysDifference(startDate, endDate) {
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  // days difference
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

function CheckoutsPage() {
  const [checkouts, setCheckouts] = useState([]);
  const [, setLoading] = useState(false);
  const { authToken } = useContext(AuthContext);

  const loadCheckouts = async () => {
    setLoading(true);
    const { checkouts } = await GetCheckouts(authToken);
    setCheckouts(checkouts);
    setLoading(false);
  };

  useConstructor(loadCheckouts);
  const currentDate = new Date();
  const renderCheckout = (checkout) => {
    return (
      <Grid item xs={6} key={checkout.copyID}>
        <Paper>
          <Box p={2}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">{checkout.title}</Typography>
              <Typography>Due on {toDateStr(checkout.returnDate)}</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              {checkout.returnDate.getTime() < currentDate.getTime() ? (
                <Typography color="error">{`Overdue ${getDaysDifference(
                  checkout.returnDate,
                  currentDate
                )} days`}</Typography>
              ) : (
                <Typography color="textSecondary">{`Due in ${getDaysDifference(
                  checkout.returnDate,
                  currentDate
                )} days`}</Typography>
              )}
            </Box>
          </Box>
        </Paper>
      </Grid>
    );
  };

  return (
    <Box>
      <NavBar />
      <Container maxWidth="lg">
        <Box margin={4}>
          <Grid container spacing={4}>
            {checkouts.map((checkout) => renderCheckout(checkout))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default CheckoutsPage;
