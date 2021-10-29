import React from "react";

const Element = ({ data }) => {
  const { fecha, pago } = data;
  return (
    <>
      <tr>
        <td>{new Date().setTime(fecha.seconds)}</td>
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
