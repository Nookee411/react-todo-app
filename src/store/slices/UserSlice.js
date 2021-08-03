/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import UserAPI from '../../api/UserAPI';

const signInUser = createAsyncThunk('/users/signin', ({ login, password }) =>
  UserAPI.signUser({ login, password }),
);

const registerUser = createAsyncThunk('/users/signup', ({ login, password }) =>
  UserAPI.registerUser({ login, password }),
);

const userSlice = createSlice({
  name: 'todo',
  initialState: {
    name: null,
    id: null,
  },
  reducers: {
    logOut: (state) => {
      state.id = null;
      state.name = null;
    },
  },
  extraReducers: {
    [signInUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.id = payload.id;
      state.name = payload.name;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log('register');
    },
  },
});

export const UserSelectors = {
  name: (state) => state.user.name,
  id: (state) => state.user.id,
};

export const UserActions = {
  ...userSlice.actions,
  signInUser,
};

export default userSlice;
