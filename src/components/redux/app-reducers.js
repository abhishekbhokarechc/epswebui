import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { storeDetailsReducer } from "../store/redux/reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["storeDetails"], // which reducer want to store
};

const appReducers = combineReducers({
  storeDetails: storeDetailsReducer,
});

export default persistReducer(persistConfig, appReducers);
