import styles from './button.module.scss'
const Button = props => {
  return (
    <button className={styles.button}>{props.name}</button>
  )
}

export default Button