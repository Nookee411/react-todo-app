import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { store } from "../app/store";
import { addTodo, removeTodo } from "../features/todo/TodoSlice";

export function AddTodo() {
  const [todoText, setTodoText] = useState("");
  function addTodoClick(e) {
    if (todoText.length) {
      store.dispatch(addTodo({ contnet: todoText, finished: false }));
      setTodoText("");
    }
  }
  function handleTextChange(e) {
    setTodoText(e.target.value);
  }
  return (
    <Grid container>
      <Grid item xs={11}>
        <TextField value={todoText} onChange={handleTextChange} />
      </Grid>
      <Grid item xs={1}>
        <Button onClick={addTodoClick}>Add todo</Button>
      </Grid>
    </Grid>
  );
}
