import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  TextField,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./theme";
import { useForm } from "react-hook-form";
import {
  DatePicker,
  MuiPickersUtilsProvider,

} from "@material-ui/pickers";
//import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"; // choose your lib
import DateFnsUtils from "@date-io/date-fns"; // import



function SignUp() {
  const formErrors = {
    username: "Username cannot be empty",
    password: "Password cannot be empty",
  };

  const { register, handleSubmit, errors } = useForm();
  const [loginError, setLoginError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);

  const [value, setValue] = useState(new Date());
  const [selectedDate, handleDateChange] = useState(new Date());

  /*
  const onSubmit = async (formData) => {
    const { username, password, librarian } = formData;
    const {  }
    const user = {
      username,
      password,
    };

    const tokenHeader = {
      "Content-Type": "application/json",
    };

    const tokenResponse = await fetch(`${baseURL}/login-user/`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: tokenHeader,
    });
    const tokenResponseJson = await tokenResponse.json();
    if (tokenResponseJson.status === "error") {
      setLoginError("Inputted credentials are invalid");
    } else {
      localStorage.setItem("authToken", tokenResponseJson.token);
      setAuthToken(tokenResponseJson.token);
    }
  };*/

  return (
    <Box>

      <div>
        <Typography
          component="header"
          variant="h6"
          style={{ marginLeft: 50, marginTop: 50 }}
        >
          Welcome!
        </Typography>
      </div>
      <div>
        <Typography component="header" variant="h6" style={{ marginLeft: 50 }}>
          Create your account
        </Typography>
      </div>
      <Container component="main" maxWidth="xs">
        <div style={useStyles.paper}>
          <Avatar style={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: 10, marginBottom: 30 }}
          >
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
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
              <Typography
                component="h1"
                variant="caption"
                >Birthday
              </Typography>
              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                  <DatePicker
                    placeholder="MM/DD/YYYY"
                    format={"MM/dd/yyyy"}
                    mask={value =>
                      value
                        ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                        : []
                    }
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling={false}
                    autoOk={true}
                    clearable
                  />
                </MuiPickersUtilsProvider>
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
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={useStyles.submit}
              >
                Sign Up
              </Button>
            </Link>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>

    </Box>
  );
}

export default SignUp;