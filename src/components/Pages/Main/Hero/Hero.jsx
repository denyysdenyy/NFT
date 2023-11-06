import SoldFor from "../../../UI/NftProduct/SoldFor/SoldFor.jsx"
import Button from "../../../UI/Button/Button.jsx"
import styles from './hero.module.scss'
import userImg from '../../../../assets/img/profile/avatars/user1.png'
import UserInfo from '../../../UI/NftProduct/UserInfo/UserInfo.jsx'
import Description from '../../../UI/NftProduct/Description/Description.jsx';
import ProductTitle from '../../../UI/NftProduct/ProductName/ProductTitle.jsx'
import HeroSwiper from "./HeroSwiper/HeroSwiper.jsx"



const Hero = () => {

  
  return (
    <section className={styles.hero}>
        <div className="container">

            <div className={styles.hero__body}>
              <div className={styles.hero__nftProduct}>
                <div className={styles.hero__UserInfo}>
                <UserInfo  image = {userImg} userName = 'John Doe' userLogin = 'johndoe'/>
                </div>
              <div className={styles.hero__ProductTitle}>
                <ProductTitle title = 'WFH - art name' />
              </div>
              <div className={styles.hero__description}>
                <Description  description = ' The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).' />
              </div>
                <div className={styles.hero__buttons}>
                  <SoldFor num = '1,5'/>
                  <div className={styles.hero__options}>
                    <Button  padding = '13px 35.4px' name = 'View' />
                    <button className={styles.hero__options_btn}>
                      <div className="nft-link"></div>
                    </button>
                    <button className={styles.hero__options_btn}>
                      <div className="nft-share"></div>
                    </button>
                    <button className={styles.hero__options_btn}>
                      <div className="nft-menu"></div>
                    </button>
                  </div>  
                </div>
              </div>
                <div className={styles.hero__swiper}>
                  <HeroSwiper />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero