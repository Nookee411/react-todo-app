import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { TodoSelectors } from '../store/slices/TodoSlice';

export default function TodoList() {
  const todoList = useSelector(TodoSelectors.todos);
  console.table(todoList);
  return (
    <div>
      {todoList.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
