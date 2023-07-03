import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import React, { useEffect, useState } from "react";
import styles from './Inicio.module.css'

export default function Inicio() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/surykt/cinetag-api/filmes')
    .then(resposta =>
      resposta.json()
    )
    .then(dados => {
      setFilmes(dados)
    })
  },[])

  return(
    <>
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {filmes.map(filme => <Card {...filme} key={filme.id} />)}
      </section>
    </>
  );
}
