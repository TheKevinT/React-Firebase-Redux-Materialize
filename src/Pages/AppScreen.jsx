import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CrearRegistro } from "../Actions/Nomina";
import Navbar from "../Components/Navbar";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);

  const dispatch = useDispatch();
  const _handleAdd = () => {
    dispatch(CrearRegistro());
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center-align">Bienvenido {name}</h1>
        <button className="btn waves-effect waves-light" onClick={_handleAdd}>
          Agregar
        </button>
      </div>
    </>
  );
};

export default AppScreen;
