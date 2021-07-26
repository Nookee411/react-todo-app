import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TodoSelectors, TodoActions } from '../store/slices/TodoSlice';
import TodoItem from '../components/TodoItem';

function ExtendedTodo(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TodoActions.fetchTodos());
  }, []);
  const todoList = useSelector(TodoSelectors.todos);
  const history = useHistory();
  const { id } = useParams();
  if (todoList.length === 0) {
    console.log('todos not parsed');
    history.push('/');
  }

  const todo = todoList.find((elem) => elem.id === id);
  return (
    <div>
      <TodoItem todo={todo} />
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
