import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Card from "componentes/Card";
import Rodape from "componentes/Rodape";
import Titulo from "componentes/Titulo";
import React from "react";

export default function Inicio() {
  return(
    <>
      <Cabecalho />
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Card id= '1' titulo='Carlos Alan' capa='https://st.depositphotos.com/1003989/3639/i/450/depositphotos_36394689-stock-photo-business-woman-hold-credit.jpg' />
      <Rodape />
    </>
  );
}
