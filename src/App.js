import React from "react";
import { Provider } from "react-redux";
import AuthRouter from "./Routers/AuthRouter";
import { store } from "./Store/Store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AuthRouter />
      </Provider>
    </>
  );
};

export default App;
