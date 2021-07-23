/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import db from '../../database';

function findTodoById(todos, id) {
  return todos.find((elem) => elem.id === id);
}

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  () => db.getState,
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  ({ content, finished }) => db.addTodo({ id: uuidv4(), content, finished }),
);

export const removeTodo = createAsyncThunk('todos/removeTodo', (id) =>
  db.removeTodo(id),
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  ({ id, content, finished }, thunkAPI) => {
    const { todos } = thunkAPI.getState();
    const todo = findTodoById(todos, id);
    content = content !== undefined ? content : todo.content;
    finished = finished !== undefined ? finished : todo.finished;
    return db.editTodo({ id, content, finished });
  },
);

const mapTodos = (todoList) => todoList.map((todo) => ({
  ...todo,
  finished: !!todo.finished,
}));

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {},

  extraReducers: {
    [fetchTodos.fulfilled]: (state, { payload }) => {
      state.todos = mapTodos(payload);
    },
    [addTodo.fulfilled]: (state, { payload }) => {
      state.todos = mapTodos(payload);
    },
    [removeTodo.fulfilled]: (state, { payload }) => {
      state.todos = mapTodos(payload);
    },
    [editTodo.fulfilled]: (state, { payload }) => {
      state.todos = mapTodos(payload);
    },
  },
});

export const TodoSelectors = {
  todos: (state) => state.todos,
  length: (state) => state.todos.length,
};

export const TodoActions = {
  ...todoSlice.actions,
  addTodo,
  fetchTodos,
  removeTodo,
  editTodo,
};

export default todoSlice;
