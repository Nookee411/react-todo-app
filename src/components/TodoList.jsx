import React from "react";
import { Container } from "@material-ui/core";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

export function TodoList() {
  const todoList = useSelector((state) => state.todos);
  return (
    <Container>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
}
