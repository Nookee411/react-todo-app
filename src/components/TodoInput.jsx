import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions, TodoSelectors } from '../store/slices/TodoSlice';
import inputStyle from '../styles/inputStyle';

let id;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3em 0',
  },
  textField: inputStyle(theme),
  button: {
    backgroundColor: theme.palette.accent.primary,
    marginLeft: '16px',
    borderRadius: '8px',
    padding: '8px 16px',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.accent.secondary,
    },
  },
}));
export default function TodoInput() {
  const classes = useStyles();
  id = useSelector(TodoSelectors.length);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  function addTodoClick() {
    if (todoText.length) {
      dispatch(
        TodoActions.addTodo({
          id: (id += 1),
          content: todoText,
          finished: false,
        }),
      );
      setTodoText('');
    }
  }
  return (
    <div className={classes.container}>
      <TextField
        className={classes.textField}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') addTodoClick();
        }}
        label="Todo..."
      />
      <Button className={classes.button} onClick={addTodoClick}>
        Add todo
      </Button>
    </div>
  );
}
