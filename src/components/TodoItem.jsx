import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { TodoActions } from '../store/slices/TodoSlice';

const EDITING_RESULT = {
  OK: true,
  CANCEL: false,
};

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.surface.dark.secondary,
    borderRadius: 8,
    border: `1px solid ${theme.palette.border.white.primary}`,
    color: theme.palette.white.primary,
    marginBottom: theme.spacing(4),
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:last-child': {
      padding: 16,
    },
    '& .icon-group': {
      flex: '0 0 15%',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexFlow: 'row wrap',
    },
  },
  content: {
    ...theme.typography.p2,
    color: theme.palette.white.secondary,
    verticalAlign: 'middle',
    overflow: 'wrap',
    flex: '0 0 80%',
  },
  checkbox: {
    flex: '0 0 5%',
  },
  icon: {
    color: theme.palette.icon.primary,
  },
  textField: {
    flex: '0 0 85%',
  },

  finished: {
    textDecoration: 'line-through',
  },
  unfinished: {
    textDecoration: 'none',
  },
}));

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
    <Card variant="outlined" className={classes.card}>
      {!isEditing ? (
        <CardContent className={classes.cardContent}>
          <Checkbox
            checked={finished}
            onClick={() => {
              dispatch(TodoActions.editTodo({ id, finished: !finished }));
            }}
            className={classes.checkbox}
          />
          <Typography
            variant="body1"
            className={clsx(classes.content, finished && classes.finished)}
            hidden={false}
          >
            {content}
          </Typography>
          <div className="icon-group">
            <IconButton aria-label="edit" onClick={switchToEditing}>
              <EditIcon className={classes.icon} />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => {
                dispatch(TodoActions.removeTodo(id));
              }}
            >
              <DeleteIcon className={classes.icon} />
            </IconButton>
          </div>
        </CardContent>
      ) : (
        <CardContent className={classes.cardContent}>
          <TextField
            autoFocus
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className={classes.textField}
            label="edit"
          />
          <div className="icon-group">
            <IconButton onClick={finishEditing(EDITING_RESULT.CANCEL)}>
              <CloseIcon className={classes.icon} />
            </IconButton>
            <IconButton onClick={finishEditing(EDITING_RESULT.OK)}>
              <CheckIcon className={classes.icon} />
            </IconButton>
          </div>
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
