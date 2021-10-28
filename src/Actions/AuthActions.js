import { Types } from "../Types/Types";
import { firebase, googleAuthProvider } from "../firebase/config-firebase";

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: Types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
