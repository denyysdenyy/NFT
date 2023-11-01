import styles from './userInfo.module.scss'

const UserInfo = props => {
  return (
    <div className={styles.userInfo}>
        <div className={styles.userInfo__avatar}>
            <img src={props.image} alt="user" />
        </div>
        <div className={styles.userInfo__body}>
            <h3 className={styles.userInfo__name}>{props.userName}</h3>
            <a href="#" className={styles.userInfo__login}>{props.userLogin}</a>
        </div>
    </div>
  )
}

export default UserInfo