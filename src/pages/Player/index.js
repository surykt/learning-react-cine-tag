import React from "react";
import styles from "./Player.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
import filmes from "json/db.json";
import NaoEncontrada from "pages/NaoEncontrada";

export default function Player() {
  const parametros = useParams();
  const filme = filmes.find((filme) => {
    return filme.id === Number(parametros.id);
  });

  if(!filme) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={filme.link}
          title={filme.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
    </>
  );
}
