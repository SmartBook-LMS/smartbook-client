import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../core/constants";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  field: {
    padding: theme.spacing(0),
    textAlign: "right",
    color: theme.palette.text.secondary,
  },
  value: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

function toDateStr(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function AccountPage() {
  const { account } = useContext(AuthContext);
  const classes = useStyles();

  return (
    <Box
      height={952}
      style={{
        background:
          "linear-gradient(#6EBFF3, #95E0F1, #A1EAF0, #D8F2F5, #E8F2F8)",
      }}
    >
      <NavBar />
      <Container maxWidth="md">
        <Paper style={{ margin: 60, padding: 35 }}>
          <Typography variant="h6">My Account</Typography>
          <Box style={{ margin: 20, padding: 30 }}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography className={classes.field}>USER NAME |</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    className={classes.value}
                  >{`${account.username}`}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.field}>NAME |</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    className={classes.value}
                  >{`${account.firstName} ${account.lastName}`}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.field}>BIRTHDATE |</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    className={classes.value}
                  >{`${toDateStr(account.birthdate)}`}</Typography>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default AccountPage;
