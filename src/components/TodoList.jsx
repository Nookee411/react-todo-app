import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { TodoActions, TodoSelectors } from '../store/slices/TodoSlice';

let isFetched = false;
export default function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isFetched) dispatch(TodoActions.fetchTodos());
    isFetched = true;
  }, []);

  const todoList = useSelector(TodoSelectors.todos);
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} expanded={false} />
      ))}
    </div>
  );
}
