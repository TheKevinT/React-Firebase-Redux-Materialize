import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center-align">Bienvenido {name}</h1>
      </div>
    </>
  );
};

export default AppScreen;
