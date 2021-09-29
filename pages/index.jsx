import Head from 'next/head'
import Image from 'next/image'
import Bloom from '../components/Bloom'
import CapitolGains from '../components/CapitolGains'
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
      </div>
    </div>
  )
}
