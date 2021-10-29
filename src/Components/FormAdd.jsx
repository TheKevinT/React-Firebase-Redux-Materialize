import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CrearRegistro } from "../Actions/Nomina";

const FormAdd = () => {
  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);

  const [cantidadPago, setCantidadPago] = useState({
    hora: 0,
    precioHora: 0,
  });

  const { hora, precioHora } = cantidadPago;
  const _handleAdd = () => {
    setViewForm(!viewForm);
  };

  const _handleChange = (e) => {
    setCantidadPago({
      ...cantidadPago,
      [e.target.name]: e.target.value,
    });
  };

  const _handleSave = () => {
    const cantidadFinal = hora * precioHora;
    dispatch(CrearRegistro(cantidadFinal));
    setCantidadPago({
      hora: 0,
      precioHora: 0,
    });
  };

  return (
    <>
      <button className="btn waves-effect waves-light" onClick={_handleAdd}>
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <>
          <div className="container">
            <div className="input-field">
              <input
                id="pago"
                type="text"
                value={precioHora}
                onChange={_handleChange}
                name="precioHora"
              />
              <label className="active" htmlFor="pago">
                Ingrese cantidad de Pago por Hora
              </label>
            </div>
            <div className="input-field">
              <input
                id="canthora"
                type="text"
                value={hora}
                onChange={_handleChange}
                name="hora"
              />
              <label className="active" htmlFor="canthora">
                Ingrese Horas Laboradas
              </label>
            </div>

            <button onClick={_handleSave} className="btn">
              Calcular y Guardar
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default FormAdd;
