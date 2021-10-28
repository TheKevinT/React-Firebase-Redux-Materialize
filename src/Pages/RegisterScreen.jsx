import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../Actions/AuthActions";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });
  const { email, username, password, password2 } = data;

  const _handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const _handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }
    dispatch(register(email, password, username));
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
                      src="/assets/login.png"
                      alt="imageLogin"
                      className="circle responsive-img"
                      style={{ height: "100px" }}
                    />
                  </div>
                  <form onSubmit={_handleRegister}>
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
                        <i className="material-icons prefix">assignment_ind</i>
                        <input
                          id="usern"
                          type="text"
                          className="validate"
                          onChange={_handleChange}
                          value={username}
                          name="username"
                        />
                        <label htmlFor="usern">Username</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">vpn_key</i>
                        <input
                          id="pass1"
                          type="password"
                          className="validate"
                          onChange={_handleChange}
                          value={password}
                          name="password"
                        />
                        <label htmlFor="pass1">Password</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">vpn_key</i>
                        <input
                          id="pass2"
                          type="password"
                          className="validate"
                          onChange={_handleChange}
                          value={password2}
                          name="password2"
                        />
                        <label htmlFor="pass2">Confirm Password</label>
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col s12">
                        <button
                          className="btn-large waves-effect waves-light col s12"
                          type="submit"
                        >
                          REGISTER
                        </button>
                      </div>
                    </div>
                    <Link to="/auth/login">Login into account</Link>
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

export default RegisterScreen;
