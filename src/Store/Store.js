import { createStore, combineReducers } from "redux";
import { AuthReducer } from "../Reducers/AuthReducer";

const reducers = combineReducers({
  auth: AuthReducer,
});
export const store = createStore(reducers);
