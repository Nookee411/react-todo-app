import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/slices/TodoSlice';

let id;
export default function TodoInput() {
  id = useSelector((state) => state.todos.length);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  function addTodoClick() {
    if (todoText.length) {
      dispatch(addTodo({ id: (id += 1), content: todoText, finished: false }));
      setTodoText('');
    }
  }
  return (
    <Grid container>
      <Grid item>
        <TextField
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') addTodoClick();
          }}
        />
      </Grid>
      <Grid item>
        <Button onClick={addTodoClick}>Add todo</Button>
      </Grid>
    </Grid>
  );
}
