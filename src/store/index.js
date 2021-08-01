import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './slices/TodoSlice';
import userSlice from './slices/UserSlice';
/* eslint-disable no-underscore-dangle */

const reducer = {
  todos: TodoSlice.reducer,
  user: userSlice.reducer,
};
const store = configureStore({ reducer });
/* eslint-enable */

export default store;
