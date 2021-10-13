import React, { ComponentType, LazyExoticComponent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { PATHS } from "../enums/PATHS";

const Main = React.lazy(() => import("../pages"));

export type ROUTE_TYPE = {
  path: string;
  name: string;
  exact: boolean;
  component:
    | ComponentType<any & RouteComponentProps>
    | LazyExoticComponent<React.ComponentType<any & RouteComponentProps>>;
};

export const ROUTES: ROUTE_TYPE[] = [
  {
    path: PATHS.MAIN,
    name: "main",
    exact: true,
    component: Main,
  },
];
