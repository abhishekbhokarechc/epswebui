import { StoreDetailsActionTypes } from "./constants";

const intialState = {
  StoreRegistration: {},
};

export const storeDetailsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case StoreDetailsActionTypes.SET_STORE:
      return { ...state, StoreRegistration: payload };
    default:
      return state;
  }
};
