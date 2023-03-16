import Image from 'next/image';
import Button from '../Button/Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomepageSlider = (props:any)=>{
    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper')}
        >
            {props.slides.map((slide:any,index:any)=>{
                console.log(slide)
                const body = documentToReactComponents(slide.description.json);
                return(
                    <SwiperSlide key={index}>
                        {index}
                        <div className='home-slide flex flex-wrap'>
                            <div className='md:w-1/2 w-full mb-5 md:mb-0 items-start flex flex-col justify-center pr-9 gap-7'>
                                <h1 className=' font-bold font-sora text-white'>{slide.title}</h1>
                                <div className=' text-white'>{ body }</div>
                                <Button url={slide.cta.url} type='primary'>{slide.cta.text}</Button>
                            </div>
                            <div className='w-full md:w-1/2'>
                                {index == 0 ?
                                    <Image 
                                    priority 
                                    alt={slide.image.title} 
                                    src={slide.image.url} 
                                    width={604} 
                                    height={slide.image.height} 
                                    sizes="(min-width: 768px) 50vw,100vw" />
                                :
                                <Image  
                                    alt={slide.image.title} 
                                    src={slide.image.url} 
                                    width={604} 
                                    height={slide.image.height} 
                                    sizes="(min-width: 768px) 50vw,100vw" />
                                }
                                
                            </div>
                        </div>
                        
                    </SwiperSlide>
                )
                
            })}
    </Swiper>
    )
}

export default HomepageSlider;