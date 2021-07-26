import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FullTodos from './pages/FullTodos';
import ExtendedTodo from './pages/ExtendedTodo';
import { TodoActions } from './store/slices/TodoSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(TodoActions.fetchTodos());
  return (
    <BrowserRouter>
      <Container>
        <Typography variant="h1" align="center">
          TODO APP
        </Typography>
        <Switch>
          <Route exact path="/" component={FullTodos} />
          <Route path="/todo/:id" component={ExtendedTodo} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
