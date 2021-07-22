import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { TodoSelectors, fetchTodos } from '../store/slices/TodoSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(TodoSelectors.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
