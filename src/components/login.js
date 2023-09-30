import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
  const paperstyle = { padding: 20, height: '70vh', width: 270, margin: "20px auto" };
  const avatarStyle = { backgroundColor: 'SkyBlue' };
  const btnstyle = { margin: '10px 0' };
  const basic = { padding: '4px' };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('Please fill in all fields.');
    } else if (!isValidUsername(username)) {
      setError('Please use only letters, numbers for the username.');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else if (!isValidPassword(password)) {
      setError('Please use a strong password (at least 8 characters, with letters, numbers, and special characters).');
    } else {
      setError('');
      setSignedIn(true);
    }
  };

  const isValidUsername = (username) => {
    const usernamePattern = /^[a-zA-Z0-9]+$/;
    return usernamePattern.test(username);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };


  const isValidPassword = (password) => {
   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
   return passwordPattern.test(password);
 };
 
  return (
    <Grid>
      <Paper elevation={24} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h1>Sign In</h1>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            style={basic}
            variant="filled"
            label="Username"
            placeholder="Enter Username"
            fullWidth
            required
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            id="email"
            style={basic}
            variant="filled"
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            id="password"
            style={basic}
            variant="filled"
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={handlePasswordChange}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me?"
          />

          {error && <Typography style={{ color: 'red' }}>{error}</Typography>}
          {signedIn && <Typography style={{ color: 'green' }}>Signed in successfully!</Typography>}

          <Button type='submit' color='primary' style={btnstyle} fullWidth required variant="contained">Sign in</Button>
        </form>

        <Typography>
          <Link href="#">
            Forgot password?
          </Link>
        </Typography>

        <Typography> Do you have an account?
          <Link href="#">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
