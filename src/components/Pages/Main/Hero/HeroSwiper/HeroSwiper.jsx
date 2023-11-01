import  { Swiper,SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import './heroSwiper.scss';
import 'swiper/css/pagination';


import nftImg1 from '../../../../../assets/img/Main/Hero/Swiper/NFT1.png';
import nftImg2 from '../../../../../assets/img/Main/Hero/Swiper/NFT2.png';
import nftImg3 from '../../../../../assets/img/Main/Hero/Swiper/NFT3.png';
import nftImg4 from '../../../../../assets/img/Main/Hero/Swiper/NFT4.png';

import { EffectCards } from 'swiper/modules';


const HeroSwiper = () => {


    const imgStyle = {
        maxWidth: '519px',
        width: '100%',
        height: '519px',
    }

    const swiperStyle = {
      width: '820px',
      top: "12px",
      left: "16px",
    }

    


  return (
    <Swiper
    pagination={{
      clickable: true,
    }}
    autoplay={{
    
      delay: 1500,
      disableOnInteraction: false,
    }}
    style={swiperStyle}
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards,Pagination,Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    cardsEffect={{
      slideShadows: false,
      rotate: false,
      perSlideRotate: 0,
      perSlideOffset: 20,
    }}
    >
        <SwiperSlide><img src={nftImg1} style={imgStyle} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={nftImg2} style={imgStyle} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={nftImg3} style={imgStyle} alt="nft" /></SwiperSlide>
        <SwiperSlide><img src={nftImg4} style={imgStyle} alt="nft" /></SwiperSlide>
    </Swiper>
  )
}

export default HeroSwiper