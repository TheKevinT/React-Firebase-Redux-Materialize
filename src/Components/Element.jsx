import React from "react";

const Element = ({ data }) => {
  const { fecha, pago } = data;

  const date = fecha.toDate();

  const fechaFormato = date.toLocaleDateString();

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
