import styles from './soldFor.module.scss';


const SoldFor = props => {
  return (
   <p className={styles.soldFor}>Sold for: <span>{props.num}M</span></p>
  )
}

export default SoldFor