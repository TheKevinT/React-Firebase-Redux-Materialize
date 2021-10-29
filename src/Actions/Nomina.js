import { db } from "../firebase/config-firebase";
import { Types } from "../Types/Types";

export const CrearRegistro = (pago) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const datos = {
      fecha: new Date(),
      pago,
    };
    const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);

    console.log(referencia);
  };
};

export const leerRegistros = (data) => {
  return {
    type: Types.nominaRead,
    payload: data,
  };
};
