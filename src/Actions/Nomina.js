import { db } from "../firebase/config-firebase";

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
