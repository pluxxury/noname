import React from "react";
import { ROUTES } from "./routes";
import { Switch, Router as ReactRouter, Route } from "react-router-dom";
import history from "../utils/history/history";
import { Layout } from "../layout/layout";

export const Router: React.FC = () => {
  return (
    <ReactRouter history={history}>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Layout>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Layout>
        </Switch>
      </React.Suspense>
    </ReactRouter>
  );
};
