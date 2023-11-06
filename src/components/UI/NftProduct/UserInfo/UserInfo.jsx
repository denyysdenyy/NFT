import UserAvatar from './UserAvatar/UserAvatar'
import UserLogin from './UserLogin/UserLogin'
import UserName from './UserName/UserName'
import styles from './userInfo.module.scss'
import avatar from '../../../../assets/img/profile/avatars/user1.png'

const UserInfo = props => {

   
  return (
    <div className={styles.userInfo}>
          <UserAvatar margin="0 12px 0 0" borderRadius="12px" userImage={avatar} />
        <div className={styles.userInfo__body}>
        <UserName userName='User Name' fontSize = '1.4em' color="#fff" />
        <UserLogin background="var(--Linear, linear-gradient(270deg, #8743FF 0%, #D8C2FF 100%))" userLogin="@username" />
        </div>
    </div>
  )
}

export default UserInfo