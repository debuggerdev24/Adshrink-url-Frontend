import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./css/fontAwesome.css";
const searchParam =
  "aHR0cHM6Ly9wc2EucmUvZXhpdC9BN0U5RjQ1OEQzQzZCMEU0OEQ4[…]TNmalhKM1RHTjd6aUFpNmNQRFVRPTo3NnpHUnRqaWlqTUIwQkdVUXpxNDZnPT0=";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/PSAREL/?r=${searchParam}`} replace />}
        />
        <Route path="/PSAREL" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
