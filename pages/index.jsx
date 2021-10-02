import Bloom from '../components/Bloom'
import CapitolGains from '../components/CapitolGains'
import Ugame from '../components/Ugame'
import Yahtzee from '../components/Yahtzee'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.projects}>
        <div className={styles.projectCards}>
          <Bloom />
        </div>
        <div className={styles.projectCards}>
          <CapitolGains />
        </div>
        <div className={styles.projectCards}>
          <Ugame />
        </div>
        <div className={styles.projectCards}>
          <Yahtzee />
        </div>
      </div>
    </div>
  )
}
