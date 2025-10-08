import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import ListingContext from "./Context/ListingContext.jsx";
import BookingContext from "./Context/BookingContext.jsx";
import AuthContext from "./Context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ListingContext>
        <BookingContext>
          <AuthContext>
            <App />
          </AuthContext>
        </BookingContext>
      </ListingContext>
    </BrowserRouter>
  </StrictMode>
);
