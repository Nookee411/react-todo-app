import React from 'react';
import { Container } from '@material-ui/core';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function FullTodos() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default FullTodos;
