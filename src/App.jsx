import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FullTodos from './pages/FullTodos';
import ExtendedTodo from './pages/ExtendedTodo';
import SignIN from './pages/Login';
import Register from './pages/Register';
import Profile from './components/profile';
import { UserSelectors } from './store/slices/UserSlice';
import PrivateRoute from './components/PrivateRoute';
import ROUTES from './routes.config';

function App() {
  const user = useSelector(UserSelectors.name);
  return (
    <BrowserRouter>
      <Container>
        <Typography variant="h1" align="center" gutterBottom>
          TODO APP
        </Typography>
        <Profile />
        <Switch>
          <PrivateRoute exact path={ROUTES.PAGES.MAIN} component={FullTodos} />
          <PrivateRoute
            exact
            path={ROUTES.PAGES.EXTENDED}
            component={ExtendedTodo}
          />
          <Route path={ROUTES.PAGES.LOGIN}>
            {user !== null ? <Redirect to={ROUTES.PAGES.MAIN} /> : <SignIN />}
            {/* <SignIN /> */}
          </Route>
          <Route path={ROUTES.PAGES.REGISTER} component={Register} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
