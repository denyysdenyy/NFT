import styles from './description.module.scss'

const Description = props => {
  return (
    <p className={styles.description}><span>Description:</span> {props.description}</p>
  )
}

export default Description