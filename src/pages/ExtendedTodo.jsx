import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TodoSelectors, TodoActions } from '../store/slices/TodoSlice';
import TodoItem from '../components/TodoItem';
import LoadingIcon from '../icons/LoadingIcon';

function ExtendedTodo(props) {
  const todoList = useSelector(TodoSelectors.todos);
  const history = useHistory();
  const { id } = useParams();
  return (
    <div>
      {todoList.length ? (
        <TodoItem todo={todoList.find((todo) => id === todo.id)} />
      ) : (
        <LoadingIcon />
      )}
      <Button
        style={{ backgroundColor: 'white', color: 'black' }}
        onClick={(e) => history.push('/')}
      >
        Return
      </Button>
    </div>
  );
}

export default ExtendedTodo;
