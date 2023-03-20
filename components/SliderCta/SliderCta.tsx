import Button from "../Button/Button";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// Default theme
// import '@splidejs/react-splide/css';

const SliderCta = (props:any)=>{
    const slider = props.slides.slidesCollection.items;
    return(
        <div className="slider-cta__inner max-w-siteContainer mx-auto flex flex-wrap items-center">
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper')}
            >
                {slider.map((item:any,index:any)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div  className=" flex flex-wrap items-center">
                                <div className=" w-full md:w-1/3 pr-11 mb-9">
                                    <h2 className=" text-h1 font-bold font-sora text-white mb-2">{item.title}</h2>
                                    <p className=" text-white mb-8">{item.description.json.content[0].content[0].value}</p>
                                    <Button type="primary" url="item.cta.url">{item.cta.text}</Button>
                                </div>
                                <div className=" w-full md:w-2/3">
                                    <Image src={item.image.url} width={item.image.width} height={item.image.height} alt={item.image.title} ></Image>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* <Splide 
                options={{
                    arrows:false,
                    pagination:false,
                    type:'loop'
                }} 
                hasTrack={false} aria-label="My Favorite Images"
            >
                <SplideTrack>
                        {slider.map((item,index)=>{
                            return(
                                <SplideSlide key={index}>
                                    <div  className=" flex flex-wrap items-center">
                                        <div className=" w-full md:w-1/3 pr-11 mb-9">
                                            <h2 className=" text-h1 font-bold font-sora text-white mb-2">{item.title}</h2>
                                            <p className=" text-white mb-8">{item.description.json.content[0].content[0].value}</p>
                                            <Button type="primary" url="item.cta.url">{item.cta.text}</Button>
                                        </div>
                                        <div className=" w-full md:w-2/3">
                                            <Image src={item.image.url} width={item.image.width} height={item.image.height} alt={item.image.title} ></Image>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })}
                </SplideTrack>  
            </Splide> */}
        </div>
    )
}

export default SliderCta;