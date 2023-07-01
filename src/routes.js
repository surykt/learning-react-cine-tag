import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "pages/Favoritos";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Container from "componentes/Container";
import FavoritosProvider from "contextos/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";

export default function Router() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/:id" element={<Player />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
