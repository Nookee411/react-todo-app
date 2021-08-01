/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signInUser = createAsyncThunk('/users/signin', ({ login, password }) =>
  axios
    .post('http://localhost:3000/user/signin', { login, password })
    .then((res) => res.data),
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
    [signInUser.fulfilled]: (state, { payload: { id, name } }) => {
      state.id = id;
      state.name = name;
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
