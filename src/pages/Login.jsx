import React, { useState } from 'react';
import {
  Paper,
  TextField,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserActions } from '../store/slices/UserSlice';
import { TodoActions } from '../store/slices/TodoSlice';
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
const Login = () => {
  const classes = useStyles();
  const [login, setLogin] = useState('');
  const [password, setPaasword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const submitUserLogin = async () => {
    await dispatch(UserActions.signInUser({ login, password }));
  };
  return (
    <Paper className={classes.root}>
      <Typography variant="h3" gutterBottom align="center">
        Login
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
        onChange={(e) => setPaasword(e.target.value)}
      />
      <form className={classes.buttons}>
        <Button variant="contained" onClick={submitUserLogin}>
          Sign in
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push(ROUTES.PAGES.REGISTER)}
        >
          Go to Register
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
