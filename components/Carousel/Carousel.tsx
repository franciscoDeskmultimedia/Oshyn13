// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from '../Carousel/Carousel.module.scss'

const Carousel = (props:any) => {
    return(
        <div className={`${styles.carousel} max-w-siteContainer mx-auto md:px-0 flex `}>
            <Swiper
            className={`${styles.swiper}`}
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper')}
            breakpoints= {{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
            }}
            >
                {props.cardSlides.map((card:any,index:any)=>{
                            if(props.type == 'service'){
                                if(index % 2 == 0){
                                    return (
                                        <SwiperSlide  key={index}  >
                                            <div className=' shadow-md w-full p-10 h-full relative overflow-hidden'>
                                                <Image className=' mb-12' alt={card.featuredImage.title} src={card.featuredImage.url} width={384} height={322}></Image>
                                                <h3 className='font-sora'>{card.title}</h3>
                                                <p>{card.exerpt}</p>
                                                <Link className=' font-bold underline mt-4 block' href={`/services/${card.slug}`}>Learn More</Link>
                                                <div className={`${styles.stripped_rectangle__decor}`}>
                                                    <Image  src='/stripped-rectangle.svg' alt='rectangle stripped decor' priority width={262} height={133}></Image>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }else{
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className=' shadow-md w-full p-10 h-full '>
                                                <h3 className=' font-sora'>{card.title}</h3>
                                                <p>{card.exerpt}</p>
                                                <Link className=' font-bold underline mt-4' href={`/services/${card.slug}`}>Learn More</Link>
                                                <Image className=' mt-12 block' alt={card.featuredImage.title} src={card.featuredImage.url} width={384} height={322}></Image>
                                                <div className={`${styles.stripped_circle__decor}`} >
                                                    <Image  src='/stripped-circle.svg' alt='dotted circle decor' width={410} height={410}></Image>
                                                </div>
                                            </div>
                                           
                                            
                                        </SwiperSlide>
                                    )
                                }
                            }
                            if(props.type == 'post'){
                                return (
                                    <SwiperSlide key={index}>
                                        <div className=' w-full p-10 h-full '>
                                            <Link className='mt-4' href={`/blog/${card.slug}`}>
                                                <Image className=' mt-12 block' alt={card.featuredImage.title} src={card.featuredImage.url} width={card.featuredImage.width} height={card.featuredImage.height}></Image>
                                                <div className='author flex items-center mt-4 mb-2'>
                                                    <Image className=' rounded-full' src={card.author.picture.url} width={card.author.picture.width} height={card.author.picture.height} alt={card.author.picture.title}></Image>
                                                    <p>{ card.author.name }</p>
                                                </div>
                                                <h3 className=' font-sora'>{card.title}</h3>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        })}
            </Swiper>
            
            <div className=' w-full md:w-1/3 order-1 md:order-2 md:mb-8 mb-8'>
                <h2 className=' font-sora'>{props.title}</h2>
                <p>{props.description}</p>
                <div className='insight-cta flex flex-wrap mt-7'>
                    {props.cta ? 
                        <div  className='insight-cta__item mb-4 mr-3'>
                            <Button type='primary'  url={props.cta.url}>{props.cta.text}</Button>
                        </div>
                    : null}
                    
                </div>
                <div className='insight-cta flex flex-wrap mt-7'>
                      {props.ctaMultiple ? 
                        props.ctaMultiple.map((cta:any,index:any)=>{
                            return(
                            <div key={index} className='insight-cta__item mb-4 mr-3'>
                                <Button type='primary'  url={cta.url}>{cta.text}</Button>
                            </div>
                            )
                        }) : null}
                </div>
            </div>
        </div>
    )
}

export default Carousel;