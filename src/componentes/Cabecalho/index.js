import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from 'componentes/CabecalhoLink'

export default function Cabecalho() {
  return(
    <header className={styles.cabecalho}>
      <Link to='./'>
        <img src={logo} alt='Logo do Cine tag'></img>
      </Link>
      <nav>
        <CabecalhoLink url='./'>
          Home
        </CabecalhoLink>
        <CabecalhoLink url='./favoritos'>
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}
