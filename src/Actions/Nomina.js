import { db } from "../firebase/config-firebase";

export const CrearRegistro = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const datos = {
      fecha: new Date(),
      pago: 100.0,
    };
    const referencia = db.collection(`${uid}/nominas/nomina`).add(datos);
  };
};
