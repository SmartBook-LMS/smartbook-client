import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Avatar,
  TextField,
  Link,
  useTheme,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./theme";
import { useForm } from "react-hook-form";
import {
  DatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // import



function SignUp() {
  const theme = useTheme();

  const formErrors = {
    errorMessage: "This field is required",
    invalidEmail: "Email not in right format"
  };

  const { register, handleSubmit, errors } = useForm();
  const [selectedDate, handleDateChange] = useState(null);

  const onSubmit = async (formData) => {
    const { firstName, lastName, username, birthday, email, password } = formData;
    const user = {
      firstName,
      lastName,
      username,
      birthday,
      email,
      password,
    };
  };

  return (
    <div>
      <div>
        <Typography
          component="header"
          variant="h6"
          style={{ marginLeft: 50, marginTop: 50 }}
        >Welcome!
        </Typography>
      </div>
      <div>
        <Typography component="header" variant="h6" style={{ marginLeft: 50 }}>
          Create your account
        </Typography>
      </div>
      <Container component="main" maxWidth="xs">
        <div style={theme.paper}>
          <Avatar style={theme.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: 10, marginBottom: 30 }}
          >Sign up
          </Typography>
          <form srtle={theme.form} noValidate onSubmit={handleSubmit(onSubmit)}>  
              <TextField
                  autoComplete="fname"
                  margin="normal"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={register({ required: true, minLength: 1 })}
                  error={errors.firstName != null }
                  helperText={errors.firstName ? formErrors.errorMessage : ""}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  type="lastName"
                  inputRef={register({ required: true, minLength: 1 })}
                  error={errors.lastName != null}
                  helperText={errors.lastName ? formErrors.errorMessage : ""}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="name"
                  type="username"
                  inputRef={register({ required: true, minLength: 1 })}
                  error={errors.username != null}
                  helperText={errors.username ? formErrors.errorMessage : ""}
                />
              <Typography
                component="h1"
                variant="caption"
                margin="normal"
                >Birthday
              </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                  <DatePicker
                    placeholder="MM/DD/YYYY"
                    format={"MM/dd/yyyy"}
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling={false}
                    autoOk={true}
                    clearable
                    type="birthday"
                    inputRef={register({ required: true, minLength: 1 })}
                    error={errors.birthday != null}
                    helperText={errors.birthday ? formErrors.errorMessage : ""}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  inputRef={register({ required: true, minLength: 1, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })}
                  error={errors.email != null}
                  helperText={errors.email ? formErrors.errorMessage : "" ? formErrors.invalidEmail : ""}
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={register({ required: true, minLength: 1 })}
                  error={errors.password != null}
                  helperText={errors.password ? formErrors.password : ""}
                />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={useStyles.submit}
                type="submit"
              >Sign Up
              </Button>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
