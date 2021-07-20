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
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { TodoActions } from '../store/slices/TodoSlice';

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
        dispatch(TodoActions.editTodo({ id, content: editingText }));
      }
    };
  }

  function handleInputKeyDown(e) {
    switch (e.code) {
      case 'Escape': {
        finishEditing(EDITING_RESULT.CANCEL)();
        break;
      }
      case 'Enter': {
        finishEditing(EDITING_RESULT.OK)();
        break;
      }
      default:
        break;
    }
  }
  return (
    <Card variant="outlined">
      {!isEditing ? (
        <CardContent>
          <Checkbox
            checked={finished}
            onClick={() => {
              console.log(id, finished);
              dispatch(TodoActions.editTodo({ id, finished: !finished }));
            }}
          />
          <Typography
            paragraph
            className={finished ? classes.finished : classes.unfinished}
            hidden={false}
          >
            {content}
          </Typography>

          <IconButton
            aria-label="delete"
            onClick={() => dispatch(TodoActions.removeTodo(id))}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={switchToEditing}>
            <EditIcon />
          </IconButton>
        </CardContent>
      ) : (
        <CardContent>
          <TextField
            autoFocus
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
          <IconButton onClick={finishEditing(EDITING_RESULT.OK)}>
            <CheckIcon />
          </IconButton>
          <IconButton onClick={finishEditing(EDITING_RESULT.CANCEL)}>
            <CloseIcon />
          </IconButton>
        </CardContent>
      )}
    </Card>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string,
    finished: PropTypes.bool.isRequired,
  }).isRequired,
};
