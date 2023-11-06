import Catalog from './Catalog/Catalog.jsx'
import Hero from './Hero/Hero.jsx'
import styles from './main.module.scss'
function Main() {
  return (
    <main className={styles.main}>
        <Hero />
        <Catalog />
    </main>
  )
}

export default Main