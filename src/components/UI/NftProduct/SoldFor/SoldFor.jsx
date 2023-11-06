import styles from './soldFor.module.scss';


const SoldFor = props => {
  return (
   <p className={styles.soldFor}>Sold for: <span>{props.userSold}</span></p>
  )
}

export default SoldFor