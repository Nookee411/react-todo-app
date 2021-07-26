import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { TodoActions } from '../store/slices/TodoSlice';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
  textField: {
    flex: '0 0 50%',
    marginRight: theme.spacing(4),
  },
}));

export default function TodoInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  function addTodoClick(e) {
    e.preventDefault();
    if (todoText.length) {
      dispatch(
        TodoActions.addTodo({
          content: todoText,
          finished: false,
        }),
      );
      setTodoText('');
    }
  }
  return (
    <form className={classes.container} onSubmit={addTodoClick}>
      <TextField
        fullWidth
        className={classes.textField}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        label="Todo..."
      />
      <Button type="submit" variant="contained">
        Add todo
      </Button>
    </form>
  );
}
