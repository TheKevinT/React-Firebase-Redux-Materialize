import React from "react";

const Element = ({ data }) => {
  const { fecha, pago } = data;
  let fechaFormato;

  if (fecha.seconds) {
    const date = fecha.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = fecha;
  }

  return (
    <>
      <tr>
        <td>{fechaFormato}</td>
        <td>{pago}</td>
        <td>
          <button className="btn red">
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Element;
