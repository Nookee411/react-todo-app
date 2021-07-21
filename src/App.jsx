import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import AppTheme from './appTheme/index';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h1" align="center">
          TODO APP
        </Typography>
        <TodoInput />
        <TodoList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
