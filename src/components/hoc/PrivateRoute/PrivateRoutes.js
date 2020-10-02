import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import MotionRedirect from 'components/hoc/MotionRedirect/MotionRedirect';
import routes from 'routes';

const PrivateRoute = ({ component: RouterComponent, ...rest }) => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  return (
    <Route
      {...rest}
      render={(routesProps) =>
        isAuth ? <RouterComponent {...routesProps} /> : <MotionRedirect to={routes.login} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
