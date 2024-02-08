import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App"; // Your main App component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route
          path="/*"
          element={
            <HelmetProvider>
              <App />
            </HelmetProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
