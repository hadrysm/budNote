import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

import routes from 'routes';
import { TransitionContext } from 'context/TransitionContextProvider';

const PrivateRoute = ({ component: RouterComponent, ...rest }) => {
  const idTimeOut = useRef(0);
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;
  const { setTransition } = useContext(TransitionContext);
  const { push } = useHistory();

  useEffect(() => {
    if (!isAuth) {
      setTransition(false);

      idTimeOut.current = setTimeout(() => {
        push(routes.home);
      }, 1800);
    }

    return () => {
      clearTimeout(idTimeOut.current);
    };
  }, [isAuth, setTransition, push]);

  return (
    <Route {...rest} render={(routesProps) => isAuth && <RouterComponent {...routesProps} />} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
