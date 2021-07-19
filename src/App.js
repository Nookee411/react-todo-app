import React from "react";
import { Container, Grid } from "@material-ui/core";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

// const theme = {
//   root: {
//     backgroundColor: "black",
//   },
// };
const GRID_SIZES = {
  INPUT_SIZE: 2,
};

function App() {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item xs={GRID_SIZES.INPUT_SIZE}>
          <AddTodo />
        </Grid>
        <Grid xs={12 - GRID_SIZES.INPUT_SIZE}>
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
