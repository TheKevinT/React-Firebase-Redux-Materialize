import { Types } from "../Types/Types";

export const googleLogin = (id, username) => {
  return {
    type: Types.login,
    payload: {
      id,
      username,
    },
  };
};
