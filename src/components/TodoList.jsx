import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todoList = useSelector((state) => state.todos);
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
