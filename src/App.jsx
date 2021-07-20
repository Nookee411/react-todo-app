import React from 'react';
import {
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const applicationTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: ['MADE Evolve Sans EVO', 'sans-serif'].join(','),
    lineHeight: 1.125,
    letterSpacing: 0,
    h1: {
      fontWeight: 700,
      fontSize: 64,
    },
    h2: {
      fontWeight: 700,
      fontSize: 56,
    },
    h3: {
      fontWeight: 700,
      fontSize: 48,
    },
    p: {
      fontFamily: ['Univia Pro', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 20,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={applicationTheme}>
      <Container>
        <Typography variant="h1" align="center">
          TODO APP
        </Typography>
        <Grid container direction="column">
          <Grid item>
            <TodoInput />
          </Grid>
          <Grid item>
            <TodoList />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
