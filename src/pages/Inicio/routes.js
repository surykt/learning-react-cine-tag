import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from ".";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Inicio />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
