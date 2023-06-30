import React from 'react'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Card({ id, titulo, capa}) {
  const { favoritos, adicionarFavorito} = useFavoritoContext()

  const ehFavorito = favoritos.some((favorito => favorito.id === id))

  const iconeFavorito = ehFavorito ? iconeDesfavoritar : iconeFavoritar

  return(
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img src={iconeFavorito}
      alt='Favoritar filme'
      className={styles.favoritar}
      onClick={() => {adicionarFavorito({id, titulo, capa})}} />
    </div>
  )
}
