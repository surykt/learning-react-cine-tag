import React from 'react'
import styles from './Favoritos.module.css'
import Cabecalho from 'componentes/Cabecalho'
import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'
import Rodape from 'componentes/Rodape'

export default function Favoritos() {
  return(
    <>
      <Cabecalho />
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {filmes.map(filme => <Card {...filme} key={filme.id} />)}
      </section>
      <Rodape
    </>
  )
}
