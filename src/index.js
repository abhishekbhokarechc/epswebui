import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { fonts } from "./commonResources/constants/fonts";

import { appStore, persistor } from "./components/redux/app-store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const MOUNT_NODE = document.getElementById('root');
const loadFonts = () => {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.innerHTML = fonts;
  head.appendChild(style);
};
const render = () => {
  ReactDOM.render(
    <Provider store={appStore}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    MOUNT_NODE,
    loadFonts,
    document.getElementById("root")
  );
};
render();
reportWebVitals();





// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { fonts } from "./commonResources/constants/fonts";
// const MOUNT_NODE = document.getElementById("root");
// const loadFonts = () => {
//   const head = document.getElementsByTagName("head")[0];
//   const style = document.createElement("style");
//   style.innerHTML = fonts;
//   head.appendChild(style);
// };
// const render = () => {
//   ReactDOM.render(
//     <Provider store={appStore}>
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>,
//     MOUNT_NODE,
//     loadFonts,
//     document.getElementById("root")
//   );
// };
// render();
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

