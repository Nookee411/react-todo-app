import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { removeTodo, checkTodo, editTodo } from '../store/slices/TodoSlice';

const EDITING_RESULT = {
  OK: 0,
  CANCEL: false,
};

const useStyles = makeStyles({
  finished: {
    textDecoration: 'line-through',
  },
  unfinished: {
    textDecoration: 'none',
  },
});
export default function TodoItem(props) {
  const [isEditing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState('');
  const { todo } = props;
  const classes = useStyles();
  const { id, content, finished } = todo;
  const dispatch = useDispatch();

  function switchToEditing() {
    setEditing(true);
    setEditingText(content);
  }
  function finishEditing(result) {
    return () => {
      setEditing(false);
      if (result === EDITING_RESULT.OK) {
        console.table({ id, editingText });
        dispatch(editTodo({ id, editingText }));
      }
    };
  }
  return (
    <Card variant="outlined">
      {!isEditing ? (
        <CardContent>
          <Checkbox
            checked={finished}
            onClick={() => dispatch(checkTodo(id))}
          />
          <Typography
            paragraph
            className={finished ? classes.finished : classes.unfinished}
            hidden={false}
          >
            {content}
          </Typography>

          <IconButton onClick={() => dispatch(removeTodo(id))}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={switchToEditing}>
            <EditIcon />
          </IconButton>
        </CardContent>
      ) : (
        <CardContent>
          <TextField
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <IconButton>
            <CheckIcon onClick={finishEditing(EDITING_RESULT.OK)} />
          </IconButton>
          <IconButton>
            <CloseIcon onClick={finishEditing(EDITING_RESULT.CANCEL)} />
          </IconButton>
        </CardContent>
      )}
    </Card>
  );
}

TodoItem.propTypes = {
  todo: {
    id: PropTypes.number.isRequired,
    content: PropTypes.string,
    finished: PropTypes.bool,
  }.isRequired,
};
