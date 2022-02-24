import { createStore } from "redux";
import { persistStore } from "redux-persist";
import appReducers from "./app-reducers";

const appStore = createStore(appReducers, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(appStore);

export { persistor, appStore };