import React from "react";
import { Container, Grid } from "@material-ui/core";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

const GRID_SIZES = {
  INPUT_SIZE: 2,
};

function App() {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item xs={GRID_SIZES.INPUT_SIZE}>
          <TodoInput />
        </Grid>
        <Grid xs={12 - GRID_SIZES.INPUT_SIZE}>
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
