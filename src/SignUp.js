import React from "react";
import { Box, Typography, Button, Container, Grid, Avatar, CssBaseline, TextField, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './theme';


function SignUp() {
  return (
    <Box>
    <div><Typography component='header' variant="h6" style={{marginLeft:50, marginTop:50}}>Welcome!</Typography></div>
    <div><Typography component='header' variant="h6" style={{marginLeft:50}}>Create your account</Typography></div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={useStyles.paper}>
        <Avatar style={useStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{marginTop: 10, marginBottom: 30}}>
          Sign up
        </Typography>
        <form srtle={useStyles.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Link href="/" style={{ textDecoration: 'none' }}><Button
            fullWidth
            variant="contained"
            color="primary"
            style={useStyles.submit}
            >
            Sign Up
          </Button></Link>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/SignIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    </Box>
    );
}

export default SignUp;

