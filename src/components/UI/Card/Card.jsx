import React from 'react' 
import styles from './card.module.scss'
import SoldFor from '../NftProduct/SoldFor/SoldFor'
import img from '../../../assets/img/Main/Cards/card1.png'
import ProductTitle from '../NftProduct/ProductName/ProductTitle.jsx'
import avatar from '../../../assets/img/profile/avatars/user1.png'
import UserName from '../NftProduct/UserInfo/UserName/UserName.jsx'
import UserLogin from '../NftProduct/UserInfo/UserLogin/UserLogin.jsx'
import UserAvatar from '../NftProduct/UserInfo/UserAvatar/UserAvatar.jsx'

const Card = (props) => {

  const {userName,userLogin,userSold} = props
  
  return (
    <div className={styles.card}>
      <a href="#" ><img src={img} alt="#" /> </a>
        <div href="#" className={styles.card__profile}>
            <UserAvatar width="26px" height="26px" borderRadius="8px" margin="0 3px 0 0" userImage={avatar} />
          <div className="card__profile-details">
            <UserName userName={userName} fontSize="1em" color="#1D2228"  />
            <UserLogin userLogin={userLogin} background = "var(--Linear, linear-gradient(270deg, #8743FF 0%, #4136F1 100%))"  fontSize='0.8em'  />
           </div>

        </div>
        <div className={styles.card__body}>
            <ProductTitle fontSize="1.4em"  title="WFH - art name" />
            <SoldFor userSold={userSold}/>
            <p className={styles.card__end}>Ending in: <span >{props.userEnd}</span></p>
        </div>
    </div>
  )
}

export default Card