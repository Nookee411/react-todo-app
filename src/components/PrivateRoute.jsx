/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { UserSelectors } from '../store/slices/UserSlice';
import ROUTES from '../routes.config';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(UserSelectors.id);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.PAGES.LOGIN} />
        );
      }}
    />
  );
};

export default PrivateRoute;
