/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TodoAPI from '../../api/TodoAPI';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  (action, thunkAPI) => TodoAPI.fetchTodos(thunkAPI.getState().user.id),
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  ({ content }, trunkAPI) =>
    TodoAPI.addTodo(content, trunkAPI.getState().user.id),
);

export const removeTodo = createAsyncThunk('todos/removeTodo', (id, thunkAPI) =>
  TodoAPI.removeTodo(id, thunkAPI.getState().user.id),
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  ({ id, ...data }, thunkAPI) =>
    TodoAPI.updateTodo({ id, ...data }, thunkAPI.getState().user.id),
);

const mapTodos = (todoList) =>
  todoList.map((todo) => ({
    ...todo,
    finished: !!todo.finished,
  }));

const updateTodos = (state, { payload }) => {
  state.items = mapTodos(payload);
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {},

  extraReducers: {
    [fetchTodos.fulfilled]: updateTodos,
    [addTodo.fulfilled]: updateTodos,
    [removeTodo.fulfilled]: updateTodos,
    [editTodo.fulfilled]: updateTodos,
  },
});

export const TodoSelectors = {
  todos: (state) => state.todos.items,
  length: (state) => state.todos.items.length,
};

export const TodoActions = {
  ...todoSlice.actions,
  addTodo,
  fetchTodos,
  removeTodo,
  editTodo,
};

export default todoSlice;
