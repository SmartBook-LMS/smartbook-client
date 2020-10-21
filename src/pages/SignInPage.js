import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  TextField,
  useTheme,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { AuthContext } from "../core/constants";
import { useForm } from "react-hook-form";
import { BookOutlined } from "@material-ui/icons";
import { LoginUser, convertSQLAccount } from "../core/requests";
import { Link } from "react-router-dom";

const formErrors = {
  username: "Username cannot be empty",
  password: "Password cannot be empty",
};

function SignInPage() {
  // Setup form validation
  const { register, handleSubmit, errors } = useForm();
  const [loginError, setLoginError] = useState(null);

  // Hook into form validation
  const { setAuthToken, setAccount } = useContext(AuthContext);
  const onSubmit = async (formData) => {
    const { username, password, librarian } = formData;
    const user = {
      username,
      password,
      librarian,
    };

    const response = await LoginUser(user);

    if (response.status === "error") {
      setLoginError("Inputted credentials are invalid");
    } else {
      localStorage.setItem("authToken", response.token);
      setAccount(convertSQLAccount(response.account));
      setAuthToken(response.token);
    }
  };

  // Get the theme
  const theme = useTheme();
  return (
    <Container component="main" maxWidth="xs">
      <div style={theme.paper}>
        <Avatar style={theme.avatar}>
          <BookOutlined />
        </Avatar>
        <Box mt={1} mb={4}>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
        </Box>

        <form style={theme.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="name"
            inputRef={register({ required: true, minLength: 1 })}
            error={errors.username != null}
            helperText={errors.username ? formErrors.username : ""}
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
            inputRef={register({ required: true, minLength: 1 })}
            error={errors.password != null}
            helperText={errors.password ? formErrors.password : ""}
          />
          <FormControlLabel
            control={
              <Checkbox
                inputRef={register}
                name="librarian"
                color="primary"
                defaultValue={false}
              />
            }
            label="I am a librarian"
          />
          <Typography color="error" variant="body1">
            {loginError}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={theme.submit}
          >
            Sign In
          </Button>
          <Box mt={2}></Box>
          <Grid container>
            <Grid item>
              <Link to="/SignUp">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignInPage;
