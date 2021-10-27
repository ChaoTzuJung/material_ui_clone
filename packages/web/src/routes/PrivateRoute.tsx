import React from 'react';
import {
  Redirect,
  Route,
  useLocation,
  RouteComponentProps
} from 'react-router-dom';

import { authenticationService } from '@chips/web/helpers/authentication';

interface PrivateRouteI {
  component: React.VoidFunctionComponent<RouteComponentProps>;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteI): JSX.Element => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          );
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
