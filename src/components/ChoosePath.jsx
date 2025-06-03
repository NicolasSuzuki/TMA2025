import React from 'react'
import styles from './ChoosePath.module.css'
import quiz from '../image/quiz.png'
import guess from '../image/guess.png'

function ChoosePath({pathEndereco,pathPipe,pathHierarquia}) {

  return (
   <div className={styles.ChoosePath}>
   <h1>Escolha o caminho que quer  <span className={styles.sub}>JOGAR</span> </h1>
   <div className={styles.row}>
    <div className={styles.card} onClick={pathEndereco}>VOCÊ SABE SOBRE ODS?<img className={styles.images}src={quiz}></img></div>
    <div className={styles.card} onClick={pathPipe}>ACERTE A PALAVRA<img className={styles.images} src={guess}></img></div>
    {/*<div className={styles.card} onClick={pathHierarquia}>CACHE<img className={styles.images} src={triangle}></img></div>*/}
    </div>
   </div>
  )
}

export default ChoosePath