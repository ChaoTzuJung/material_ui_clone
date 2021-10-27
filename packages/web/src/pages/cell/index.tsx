import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import { RouterViewComponentPropsI } from '@chips/web/routes';

const CellSpace = ({ route }: RouterViewComponentPropsI): JSX.Element => {
  return <>{renderRoutes(route.routes as RouteConfig[])}</>;
};

export default CellSpace;
