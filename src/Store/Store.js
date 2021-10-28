import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "../Reducers/AuthReducer";
import { NominaReducer } from "../Reducers/NominaReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  nomina: NominaReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
