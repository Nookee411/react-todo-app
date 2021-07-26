import { configureStore, combineReducers } from '@reduxjs/toolkit';
import TodoSlice from './slices/TodoSlice';
/* eslint-disable no-underscore-dangle */

const store = configureStore({ reducer: TodoSlice.reducer });
/* eslint-enable */

export default store;
