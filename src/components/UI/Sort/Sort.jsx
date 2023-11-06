 import styles from './sort.module.scss'
const Sort = () => {
  return (
    <div className={styles.Sort}>
      <button className={styles.sort__button}>Recently added</button>
      <button className={styles.sort__button}>Auctions</button>
    </div>
  )
}

export default Sort