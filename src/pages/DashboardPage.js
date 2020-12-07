import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { DataUsageRounded, MonetizationOnRounded } from "@material-ui/icons";

import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { AuthContext, useConstructor } from "../core/constants";
import { GetDashboard } from "../core/requests";
function toDateStr(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
function DashboardPage() {
  const [percentUsed, setPercentUsed] = useState(0);
  const [totalFines, setTotalFines] = useState(0);
  const [recentReturns, setRecentReturns] = useState([]);
  const [recentCheckouts, setRecentCheckouts] = useState([]);
  const [finesDue, setFinesDue] = useState([]);
  const { authToken } = useContext(AuthContext);

  const loadDashboard = async () => {
    const { info } = await GetDashboard(authToken);
    setTotalFines(info.allFines);
    setPercentUsed(info.currentCheckouts);
    setFinesDue(info.worstCustomers);
    setRecentReturns(info.recentReturns);
    setRecentCheckouts(info.recentCheckouts);
    console.log(info);
  };

  useConstructor(loadDashboard);

  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">General Statistics</Typography>
          <ListItem>
            <ListItemIcon>
              <MonetizationOnRounded />
            </ListItemIcon>
            <ListItemText primary={`Total Fines $${totalFines}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DataUsageRounded />
            </ListItemIcon>
            <ListItemText
              primary={`Percentage of media checked out is ${percentUsed}%`}
            />
          </ListItem>
        </Paper>
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Customers With Most Fines Due</Typography>
          <List>
            {finesDue.map((item) => (
              <ListItem key={item.lastName + item.firstName}>
                <ListItemText primary={`${item.firstName}  ${item.lastName}`} />
                <ListItemSecondaryAction>
                  <Typography variant="body1">${item.totalFines}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Most Recent Returns</Typography>{" "}
          <List>
            {recentReturns.map((item) => (
              <ListItem key={item.checkoutID}>
                <ListItemText primary={`Return #${item.checkoutID}`} />
                <ListItemSecondaryAction>
                  <Typography variant="body1">{toDateStr(item.returnDate)}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Most Recent Checkouts</Typography>
          <List>
            {recentCheckouts.map((item) => (
              <ListItem key={item.checkoutID}>
                <ListItemText primary={`Checkout #${item.checkoutID}`} />
                <ListItemSecondaryAction>
                  <Typography variant="body1">{toDateStr(item.checkoutDate)}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </>
  );
}

export default DashboardPage;
