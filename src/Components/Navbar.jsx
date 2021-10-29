import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Actions/AuthActions";
import { limpiar } from "../Actions/Nomina";

const Navbar = () => {
  const dispatch = useDispatch();
  const _handleLogout = () => {
    dispatch(limpiar());
    dispatch(logout());
  };

  return (
    <>
      <nav className="blue-grey darken-1">
        <div className="nav-wrapper">
          <Link to="/app" className="brand-logo">
            Calcular Nómina
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <button
                onClick={_handleLogout}
                className="waves-effect waves-light btn red"
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
