import Cabecalho from 'componentes/Cabecalho'
import Container from 'componentes/Container'
import Rodape from 'componentes/Rodape'
import FavoritosProvider from 'contextos/Favoritos'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
  return(
    <>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
            <Outlet />
        </FavoritosProvider>
      </Container>
      <Rodape />
    </>
  )
}
