import React from "react";
import { useSelector } from "react-redux";
import Element from "../Components/Element";
import FormAdd from "../Components/FormAdd";
import Navbar from "../Components/Navbar";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);

  const data = useSelector((state) => state.nomina.data);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center-align">Bienvenido {name}</h1>
        <FormAdd />
        <table className="highlight">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elemento) => {
              return <Element key={elemento.id} data={elemento} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
