import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import TodoItem from './TodoItem';
import { TodoSelectors } from '../store/slices/TodoSlice';

export default function TodoList() {
  const todoList = useSelector(TodoSelectors.todos);
  return (
    <Grid container direction="column" spacing={1}>
      {todoList.map((todo) => (
        <Grid item key={todo.id}>
          <TodoItem todo={todo} />
        </Grid>
      ))}
    </Grid>
  );
}
