import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LoginScreen from "../Pages/LoginScreen";
import RegisterScreen from "../Pages/RegisterScreen";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />

        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
};

export default AuthRouter;
