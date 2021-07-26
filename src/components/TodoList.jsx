import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { TodoSelectors } from '../store/slices/TodoSlice';

export default function TodoList() {
  const todoList = useSelector(TodoSelectors.todos);
  return (
    <div>
      {todoList
        .map((todo) => <TodoItem key={todo.id} todo={todo} expanded={false} />)
        .reverse()}
    </div>
  );
}
