import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisitForm from "./pages/VisitForm";
import Map from "./pages/Map";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/visit-form" element={<VisitForm />} />
        <Route path="/visit-map" element={<Map />} />
        <Route path="/" index element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
