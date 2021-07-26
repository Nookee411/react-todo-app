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
  ({ id, todo }, thunkAPI) => {
    const { todos } = thunkAPI.getState();
    let editingTodo = findTodoById(todos, id);
    console.log(editingTodo);
    editingTodo = {
      ...editingTodo,
      content: todo.content || editingTodo.content,
      finished:
        todo.finished === undefined ? editingTodo.finished : todo.finished,
    };
    console.log(editingTodo);
    return db.editTodo({ id, todo: editingTodo });
  },
);

const mapTodos = (todoList) =>
  todoList.map((todo) => ({
    ...todo,
    finished: !!todo.finished,
  }));

const updateTodos = (state, { payload }) => {
  state.todos = mapTodos(payload);
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
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
