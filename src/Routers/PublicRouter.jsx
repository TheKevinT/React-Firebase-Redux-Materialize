import React from "react";
import { Route, Redirect } from "react-router";

const PublicRouter = ({ log, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) =>
          log ? <Redirect to="/app" /> : <Component {...props} />
        }
      />
    </>
  );
};

export default PublicRouter;
