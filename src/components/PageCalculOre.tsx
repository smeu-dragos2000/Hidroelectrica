import CalculOre from "./CalculOre"
import ClockAnalog from "./ClockAnalog"
import ClockDigital from "./ClockDigital"
import styles from './PageCalculOre.module.scss'


const PageCalculOre = () => {
  return (
    <section className="container">
      <h1>Ore Funcționare</h1>
        <div className={styles.wrapper}>
          <div className={styles.clocksWrapper}>
              <ClockAnalog />
              <ClockDigital />
          </div>
          <div className={styles.formWrapper}>
              <CalculOre />
          </div>
        </ div>
    </section>
      
    
  )
}

export default PageCalculOre