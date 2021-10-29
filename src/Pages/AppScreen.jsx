import React from "react";
import { useSelector } from "react-redux";
import FormAdd from "../Components/FormAdd";
import Navbar from "../Components/Navbar";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center-align">Bienvenido {name}</h1>
        <FormAdd />
      </div>
    </>
  );
};

export default AppScreen;
