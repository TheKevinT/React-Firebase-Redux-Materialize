import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../Actions/Nomina";

const Element = ({ data }) => {
  const { fecha, pago, id } = data;

  const dispatch = useDispatch();
  let fechaFormato;

  if (fecha.seconds) {
    const date = fecha.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = fecha;
  }

  const _handleDelete = () => {
    dispatch(borrarRegistro(id));
  };
  return (
    <>
      <tr>
        <td>{fechaFormato}</td>
        <td>$ {pago}</td>
        <td>
          <button className="btn red" onClick={_handleDelete}>
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Element;
