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

    const id = await referencia.id;
    const newData = {
      ...datos,
      id,
    };

    dispatch(crear(newData));
  };
};

export const leerRegistros = (data) => {
  return {
    type: Types.nominaRead,
    payload: data,
  };
};

export const crear = (data) => {
  return {
    type: Types.nominaAdd,
    payload: data,
  };
};
