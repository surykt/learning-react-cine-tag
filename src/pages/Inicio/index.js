import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Card from "componentes/Card";
import Rodape from "componentes/Rodape";
import Titulo from "componentes/Titulo";
import filmes from "json/db.json"
import React from "react";
import styles from './Inicio.module.css'

export default function Inicio() {
  return(
    <>
      <Cabecalho />
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {filmes.map(filme => <Card key={filme.id} titulo={filme.titulo} capa={filme.capa} link={filme.link} />)}
      </section>
      <Rodape />
    </>
  );
}
