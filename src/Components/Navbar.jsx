import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="blue-grey darken-1">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Calcular Nómina
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <button className="waves-effect waves-light btn red">
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
