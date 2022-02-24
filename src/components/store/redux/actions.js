import { StoreDetailsActionTypes } from "./constants";

export const setStoreDetails = (StoreRegistration) => {
  return {
    type: StoreDetailsActionTypes.SET_STORE,
    payload: StoreRegistration,
  };
};
