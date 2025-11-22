import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "leaflet/dist/leaflet.css";

import store from "../src/Redux/Store.js";
import { Provider } from "react-redux";
import { persistor } from "../src/Redux/Store.js";
import { PersistGate } from "redux-persist/lib/integration/react";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </PersistGate>
  </Provider>
);
