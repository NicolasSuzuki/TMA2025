import styles from './ChoosePath.module.css'
import impactoImg from '../image/adress.png'
import sustentavelImg from '../image/pipeline.png'
import consumoImg from '../image/triangle.png'

function ChoosePath({ pathImpacto, pathSustentavel, pathConsumo }) {
  return (
    <div className={styles.ChoosePath}>
      <h1>Escolha qual tema deseja <span className={styles.sub}>EXPLORAR</span></h1>
      <div className={styles.row}>
        <div className={styles.card} onClick={pathImpacto}>
          IMPACTOS AMBIENTAIS
          <img className={styles.images} src={impactoImg} alt="Impacto Ambiental" />
        </div>
        <div className={styles.card} onClick={pathSustentavel}>
          TECNOLOGIAS SUSTENTÁVEIS
          <img className={styles.images} src={sustentavelImg} alt="Tecnologias Sustentáveis" />
        </div>
        <div className={styles.card} onClick={pathConsumo}>
          CONSUMO CONSCIENTE
          <img className={styles.images} src={consumoImg} alt="consumo consciente" />
        </div>
      </div>
    </div>
  );
}

export default ChoosePath;
