import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { googleLogin, emailAndPasswordLogin } from "../Actions/AuthActions";

const LoginScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const _handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const dispatch = useDispatch();

  const _handleGoogleLogin = () => {
    dispatch(googleLogin("12345", "kevin"));
  };

  const _handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }
    dispatch(emailAndPasswordLogin(email, password));
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
                  <form onSubmit={_handleEmailLogin}>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input
                          id="email_label"
                          type="email"
                          className="validate"
                          onChange={_handleChange}
                          value={email}
                          name="email"
                        />
                        <label htmlFor="email_label">Email</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">vpn_key</i>
                        <input
                          id="pass"
                          type="password"
                          className="validate"
                          onChange={_handleChange}
                          value={password}
                          name="password"
                        />
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
