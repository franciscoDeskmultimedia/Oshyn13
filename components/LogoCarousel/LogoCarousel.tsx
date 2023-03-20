import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'
import Image from 'next/image';

import styles from '../LogoCarousel/LogoCarousel.module.scss'

const LogoCarousel = (props:any)=>{
    return(
        <div className={` ${styles.logo_slider} w-full`}>
            <Swiper
            className={`${styles.swiper}`}
            modules={[Navigation]}
            navigation
            loop={true} 
            spaceBetween={50}
            slidesPerView={6}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper')}
            breakpoints= {{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
            >
                {props.slider.items.map((item:any,index:any)=>{
                    return(
                        <SwiperSlide key={index}>
                            <Image src={item.url} width={item.width} height={item.height} alt={item.title}></Image>
                        </SwiperSlide>
                    )
                    
                })}
            </Swiper>
        </div>
    )
}

export default LogoCarousel