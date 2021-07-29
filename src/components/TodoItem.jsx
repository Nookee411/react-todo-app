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
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { Link as NavLink } from 'react-router-dom';
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
    backgroundColor: theme.palette.surface.dark.primary,
    borderRadius: theme.spacing(3),
    border: `1px solid ${theme.palette.border.white.primary}`,
    color: theme.palette.white.primary,
    marginBottom: theme.spacing(4),
    maxWidth: '100%',
    transition: 'transform 150ms ease-in, box-shadow 150ms linear',
    '&:hover': {
      boxShadow: `0 0 10px ${theme.palette.accent.tertiary}`,
      transform: 'translateY(-1%)',
    },
  },
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    '&:last-child': {
      padding: theme.spacing(2),
    },
    '& .icon-group': {
      flex: '0 0 100%',
      textAlign: 'right',
    },
  },
  content: {
    flex: '0 0 85%',
    ...theme.typography.p3,
    color: theme.palette.white.secondary,
    paddingTop: theme.spacing(1),
    marginBottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    // flex: '0 0 10%',
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
  const { todo, expanded } = props;
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
        const newTodo = { content: editingText };
        dispatch(TodoActions.editTodo({ id, todo: newTodo }));
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
              dispatch(
                TodoActions.editTodo({ id, todo: { finished: !finished } }),
              );
            }}
            className={classes.checkbox}
          />

          <div>
            <Typography
              paragraph
              noWrap={false}
              className={clsx(classes.content, finished && classes.finished)}
              hidden={false}
            >
              {content}
            </Typography>
          </div>
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
            {!expanded && (
              <NavLink to={`/todo/${id}`}>
                <IconButton aria-label="fullscreen">
                  <FullscreenIcon className={classes.icon} />
                </IconButton>
              </NavLink>
            )}
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
    id: PropTypes.string,
    content: PropTypes.string,
    finished: PropTypes.bool.isRequired,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
};
