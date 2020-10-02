import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import MotionRedirect from 'components/hoc/MotionRedirect/MotionRedirect';
import routes from 'routes';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <MotionRedirect
            to={{
              pathname: routes.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
