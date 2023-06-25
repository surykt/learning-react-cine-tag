import React from 'react'
import styles from './Favoritos.module.css'
import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'
import filmes from 'json/db.json'
import Card from 'componentes/Card'

export default function Favoritos() {
  return(
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {filmes.map(filme => <Card {...filme} key={filme.id} />)}
      </section>
    </>
  )
}
