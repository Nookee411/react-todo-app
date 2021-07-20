import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions, TodoSelectors } from '../store/slices/TodoSlice';

let id;
export default function TodoInput() {
  id = useSelector(TodoSelectors.length);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  function addTodoClick() {
    if (todoText.length) {
      dispatch(TodoActions.addTodo({ id: (id += 1), content: todoText, finished: false }));
      setTodoText('');
    }
  }
  return (
    <Grid container>
      <Grid item xs={10}>
        <TextField
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') addTodoClick();
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button onClick={addTodoClick}>Add todo</Button>
      </Grid>
    </Grid>
  );
}
