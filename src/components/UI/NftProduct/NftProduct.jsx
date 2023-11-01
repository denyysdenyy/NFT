import React from 'react'
import styles from './nftproduct.module.scss'
import UserInfo from './UserInfo/UserInfo'
import userImg from '../../../assets/img/profile/avatars/user1.png'
import ProductTitle from './ProductName/ProductTitle'
import Description from './Description/Description'
const NftProduct = () => {
  return (
    <div className={styles.nftproduct} >
        <UserInfo  image = {userImg} userName = 'User Name' userLogin = '@username'/>
        <ProductTitle title = 'WFH - art name' />
        <Description  description = ' The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).' />
    </div>
  )
}

export default NftProduct