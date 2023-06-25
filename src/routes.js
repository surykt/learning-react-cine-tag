import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "pages/Favoritos";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Container from "componentes/Container";

export default function Router() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
