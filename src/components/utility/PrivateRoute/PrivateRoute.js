import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { useAnimateTemplate } from 'hooks/useAnimateTemplate';

import routes from 'routes';

const PrivateRoute = ({ component: RouterComponent, ...rest }) => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;
  useAnimateTemplate(routes.login, !isAuth);

  return (
    <Route {...rest} render={(routesProps) => isAuth && <RouterComponent {...routesProps} />} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
