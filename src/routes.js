import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/favoritos" element={} />
      </Routes>
    </BrowserRouter>
  );
}
