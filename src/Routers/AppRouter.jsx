import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import AppScreen from "../Pages/AppScreen";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";

import { firebase } from "../firebase/config-firebase";

import { login } from "../Actions/AuthActions";
import PublicRouter from "./PublicRouter";
import { loadData } from "../Helpers/LoadData";
import { leerRegistros } from "../Actions/Nomina";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
        const nominaData = await loadData(user.uid);

        dispatch(leerRegistros(nominaData));
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);
  return (
    <>
      <Router>
        <Switch>
          <PublicRouter path="/auth" component={AuthRouter} log={log} />

          <PrivateRouter exact path="/app" log={log} component={AppScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
