import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
const LoginScreen = () => {
  return (
    <>
      <div className="container valign-wrapper">
        <div className="row ">
          <div className="col s12">
            <div className="card ">
              <div className="container">
                <div className="card-content">
                  <div className="center-align">
                    <img
                      src="https://capevlac.olade.org/wp-content/uploads/2020/07/login.png"
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
                    <div className="center-align">
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                      >
                        Login
                        <i className="material-icons right">send</i>
                      </button>
                    </div>

                    <GoogleButton
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginRight: "auto",
                        marginLeft: "auto",
                      }}
                      disabled={false} // can also be written as disabled={true} for clarity
                      onClick={() => {
                        console.log("google");
                      }}
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
