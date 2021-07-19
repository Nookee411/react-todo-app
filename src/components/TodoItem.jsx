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
import { removeTodo, checkTodo } from '../store/slices/TodoSlice';

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
  const { todo } = props;
  const classes = useStyles();
  const { id, content, finished } = todo;
  const dispatch = useDispatch();
  return (
    <Card variant="outlined">
      <CardContent hidden={isEditing}>
        <Checkbox checked={finished} onClick={() => dispatch(checkTodo(id))} />
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
        <IconButton onClick={() => setEditing(!isEditing)}>
          <EditIcon />
        </IconButton>
      </CardContent>
      <CardContent hidden={!isEditing}>
        <TextField />
        <IconButton>
          <CheckIcon />
        </IconButton>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </CardContent>
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
