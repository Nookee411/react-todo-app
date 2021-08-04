/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import UserAPI from '../../api/UserAPI';

const signInUser = createAsyncThunk('/users/signin', ({ login, password }) =>
  UserAPI.signUser({ login, password }),
);

const registerUser = createAsyncThunk('/users/signup', ({ login, password }) =>
  UserAPI.registerUser({ login, password }),
);

const tryRestoreUser = createAsyncThunk('/users/restore', () => {
  const token = Cookies.get('ACCESS_TOKEN');
  if (token) return UserAPI.restoreUser(token);
});

const userSlice = createSlice({
  name: 'todo',
  initialState: {
    name: null,
    id: null,
  },
  reducers: {
    logOut: (state, action) => {
      Cookies.remove('ACCESS_TOKEN');
      state.id = null;
      state.name = null;
    },
  },
  extraReducers: {
    [signInUser.fulfilled]: (state, { payload }) => {
      state.id = payload.data.user.id;
      state.name = payload.data.user.name;
      Cookies.set('ACCESS_TOKEN', payload.data.user.token);
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log('register');
    },
    [tryRestoreUser.fulfilled]: (state, { payload }) => {
      if (payload && payload.success) {
        const { user } = payload.data;
        console.log(user);
        state.name = user.name;
        state.id = user.id;
      }
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
  tryRestoreUser,
  registerUser,
};

export default userSlice;
