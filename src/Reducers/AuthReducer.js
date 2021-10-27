import { Types } from "../Types/Types";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.login:
      return {
        name: "Kevin",
        id: "123",
      };
    case Types.logout:
      return {};

    default:
      return state;
  }
};
