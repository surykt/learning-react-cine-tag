import React from 'react'
import styles from './Rodape.module.css'
import { FcLike } from "react-icons/fc";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <h2>Developed with <FcLike /> by Carlos Alan</h2>
    </footer>
  )
}
