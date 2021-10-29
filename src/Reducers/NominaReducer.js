import { Types } from "../Types/Types";

const initialState = {
  data: [],
};
export const NominaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.nominaAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case Types.nominaRead:
      return {
        ...state,
        data: action.payload,
      };
    //   case Types.nominaAdd :
    //   return {}
    //   case Types.nominaAdd :
    //   return {}

    default:
      return state;
  }
};
