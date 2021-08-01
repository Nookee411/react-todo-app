import React, { useState } from 'react';
import {
  Paper,
  TextField,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import ROUTES from '../routes.config';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.black.tertiary,
    borderRadius: theme.spacing(4),
    border: `1px solid ${theme.palette.white.tertiary}`,
    padding: theme.spacing(5),
    maxWidth: '30em',
    margin: '0 auto',
    '& .MuiTypography-root': {
      color: theme.palette.white.secondary,
    },
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(4),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
  },
}));
const Register = () => {
  const classes = useStyles();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const history = useHistory();

  const submitUserSignUp = () => {
    axios
      .post('http://localhost:3000/user/signup', { login, password })
      .then((res) => {
        if (res.status <= 300) history.push(ROUTES.PAGES.LOGIN);
      });
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h3" gutterBottom align="center">
        Registration
      </Typography>
      <TextField
        required
        label="Username"
        fullWidth
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <TextField
        required
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        required
        label="Confirm password"
        fullWidth
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div className={classes.buttons}>
        <Button variant="contained" onClick={submitUserSignUp}>
          Register
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push(ROUTES.PAGES.LOGIN)}
        >
          Go to Login
        </Button>
      </div>
    </Paper>
  );
};

export default Register;
