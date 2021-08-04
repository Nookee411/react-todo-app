import { Button, Typography, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions, UserSelectors } from '../store/slices/UserSlice';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.black.tertiary,
    border: `1px solid ${theme.palette.border.white.primary}`,
    color: theme.palette.white.secondary,
    maxWidth: '10em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
}));

function Profile() {
  const username = useSelector(UserSelectors.name);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    username && (
      <Paper className={classes.card}>
        {' '}
        <Typography>{username}</Typography>
        <Button
          onClick={() => {
            dispatch(UserActions.logOut());
          }}
          variant="contained"
        >
          Log out
        </Button>
      </Paper>
    )
  );
}

export default Profile;
