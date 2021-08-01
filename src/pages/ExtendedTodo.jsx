import React from 'react';
import { Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TodoSelectors } from '../store/slices/TodoSlice';
import TodoItem from '../components/TodoItem';
import LoadingIcon from '../icons/LoadingIcon';

function ExtendedTodo() {
  const todoList = useSelector(TodoSelectors.todos);
  const history = useHistory();
  const { id } = useParams();
  return (
    <div>
      {todoList.length ? (
        <TodoItem todo={todoList.find((todo) => id === todo.id)} expanded />
      ) : (
        <LoadingIcon />
      )}
      <Button
        style={{ backgroundColor: 'white', color: 'black' }}
        onClick={() => history.push('/')}
      >
        Return
      </Button>
    </div>
  );
}

export default ExtendedTodo;
