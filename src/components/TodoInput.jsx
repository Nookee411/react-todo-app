import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { addTodo } from "../features/todo/TodoSlice";
import { useDispatch } from "react-redux";

let id = 0;
export function TodoInput() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  function addTodoClick(e) {
    if (todoText.length) {
      dispatch(addTodo({ id: id++, content: todoText, finished: false }));
      setTodoText("");
    }
  }
  return (
    <Grid container>
      <Grid item xs={11}>
        <TextField
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") addTodoClick();
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <Button onClick={addTodoClick}>Add todo</Button>
      </Grid>
    </Grid>
  );
}
