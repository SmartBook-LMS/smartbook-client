import {
  Container,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { DataUsageRounded, MonetizationOnRounded } from "@material-ui/icons";

import React, { useState } from "react";
import NavBar from "../components/NavBar";

function DashboardPage() {
  const [percentUsed, setPercentUsed] = useState(25);
  const [totalFines, setTotalFines] = useState(300);
  const [recentReturns, setRecentReturns] = useState([]);
  const [recentCheckouts, setRecentCheckouts] = useState([]);
  const [finesDue, setFinesDue] = useState([]);

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
            <ListItemText primary={`Outstanding fines total $${totalFines}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DataUsageRounded />
            </ListItemIcon>
            <ListItemText
              primary={`Percentage of media used is ${percentUsed}%`}
            />
          </ListItem>
        </Paper>
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Most Fines Due</Typography>
          {finesDue.map((item) => (
            <ListItem>
              <ListItemText primary={item.firstName + item.lastName} />
              <ListItemSecondaryAction>
                <Typography variant="body1">{item.numberFines}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Paper>
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Most Recent Returns</Typography>
          {recentReturns.map((item) => (
            <ListItem>
              <ListItemText primary={"Return"} />
              <ListItemSecondaryAction>
                <Typography variant="body1">{"Date"}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Paper>
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Most Recent Checkouts</Typography>
          {recentCheckouts.map((item) => (
            <ListItem>
              <ListItemText primary={"Return"} />
              <ListItemSecondaryAction>
                <Typography variant="body1">{"Date"}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Paper>
      </Container>
    </>
  );
}

export default DashboardPage;
