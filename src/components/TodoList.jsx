import React from "react";
import { Container } from "@material-ui/core";
import { TodoItem } from "./TodoItem";
import { store } from "../app/store";

export function TodoList() {
  function makeTodoItem() {
      return <TodoItem />;
  }
    return <Container>{ }</Container>;
}
