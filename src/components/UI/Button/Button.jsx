import styles from './button.module.scss'
const Button = props => {
  const {padding} = props
  const style = {
    padding
  };

  
  return (
    <button style={style} className={styles.button}>{props.name}</button>
  )
}

export default Button