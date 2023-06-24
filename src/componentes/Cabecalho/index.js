import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from 'logo.png'
import styles from './Cabecalho.module.css'

export default function Cabecalho() {
  return(
    <header className={styles.Cabecalho}>
      <Link to='./'>
        <img src={logo} alt='Logo do Cine tag'></img>
      </Link>
      <nav>

      </nav>
    </header>
  )
}
