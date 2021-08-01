import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions, UserSelectors } from '../store/slices/UserSlice';

function Profile() {
  const username = useSelector(UserSelectors.name);
  const dispatch = useDispatch();
  return (
    <div>
      <Typography>{username}</Typography>
      <Button
        onClick={() => {
          dispatch(UserActions.logOut());
        }}
        variant="contained"
      >
        Log out
      </Button>
    </div>
  );
}

export default Profile;
