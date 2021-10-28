import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRouter = ({ log, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) =>
          log ? <Component {...props} /> : <Redirect to="/auth/login" />
        }
      />
    </>
  );
};

export default PrivateRouter;
