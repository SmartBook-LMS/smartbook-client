import React from "react";
import { Box, Typography, Button, Container, Grid, Avatar, CssBaseline, TextField, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './theme';

function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={useStyles.paper}>
      <Avatar style={useStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" srtle={{marginTop: 10, marginBottom: 30}}>Sign in</Typography>
        <form srtle={useStyles.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link href="/" style={{ textDecoration: 'none' }}><Button fullWidth variant="contained" color="primary" style={useStyles.submit} >Sign In</Button></Link>
          <Grid container>
            <Grid item>
            <Link href="/SignUp" variant="body2">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>      
  );  
}



export default SignIn;