import React from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { googleLogin } from "../Actions/AuthActions";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const _handleGoogleLogin = () => {
    dispatch(googleLogin("12345", "kevin"));
  };
  return (
    <>
      <div
        className="container valign-wrapper"
        style={{
          marginTop: "10%",
        }}
      >
        <div className="row ">
          <div className="col s12">
            <div className="card ">
              <div className="container">
                <div className="card-content">
                  <div className="center-align">
                    <img
                      src="assets/login.png"
                      alt="imageLogin"
                      className="circle responsive-img"
                      style={{ height: "100px" }}
                    />
                  </div>
                  <form>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input
                          id="email_label"
                          type="email"
                          className="validate"
                        />
                        <label htmlFor="email_label">Email</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">vpn_key</i>
                        <input id="pass" type="password" className="validate" />
                        <label htmlFor="pass">Password</label>
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col s12">
                        <button
                          className="btn-large waves-effect waves-light col s12"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>

                    <GoogleButton
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginRight: "auto",
                        marginLeft: "auto",
                      }}
                      disabled={false} // can also be written as disabled={true} for clarity
                      onClick={_handleGoogleLogin}
                    />
                    <Link to="/register">Register in the plataform</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
