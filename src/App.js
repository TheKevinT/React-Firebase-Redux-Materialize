import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./Routers/AppRouter";
import { store } from "./Store/Store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

export default App;
