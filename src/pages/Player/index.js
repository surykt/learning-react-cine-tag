import React, { useEffect, useState } from "react";
import styles from "./Player.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";

export default function Player() {
  const [filme, setFilme] = useState()
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/surykt/cinetag-api/filmes?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setFilme(...dados)
    })
  },[parametros])

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
