import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistManager, store } from "./redux/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistManager}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
