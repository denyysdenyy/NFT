import Sort from '../../../UI/Sort/Sort.jsx'
import Cards from './Cards/Cards.jsx'
import styles from './catalog.module.scss'

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <div className="container">
       <Sort />
       <Cards />
      </div>
    </section>
    
  )
}

export default Catalog