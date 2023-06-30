import React from 'react'
import styles from './Favoritos.module.css'
import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'
import Card from 'componentes/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Favoritos() {
  const { favoritos } = useFavoritoContext()

  return(
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favoritos.map(favorito => <Card {...favorito} key={favorito.id} />)}
      </section>
    </>
  )
}
