import dynamic from "next/dynamic";
const HomepageSlider = dynamic(()=>import('../HomepageSlider/HomepageSlider'))
// import HomepageSlider from "../HomepageSlider/HomepageSlider";
import Image from "next/image";
const TabSlider = dynamic(()=>import('../TabSlider/TabSlider'))
// import TabSlider from "../TabSlider/TabSlider";
// import Button from '../Button/Button';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../HomepageHero/HomepageHero.module.scss'

import dottedCircle from '../../public/dotted-circle.svg'
import strippedCircle from '../../public/stripped-circle.svg'
import strippedRectangle from '../../public/stripped-rectangle.svg'


interface HomepageHeroProps {
    slider: any;
    tabSlider: any;
}
 

const HomepageHero = (props:HomepageHeroProps)=> {
    return (
        <section  className={` ${styles.homepage_hero} min-h-screen -mt-40 pt-40 w-full bg-background pb-24  z-0 `} >
            <div className="homepage-hero__inner max-w-siteContainer mx-auto px-9 mt-10">
                <div className={`${styles.home}`}>
                    <div className={`${styles.dotted_circle__decor}`}>
                        <Image  src={dottedCircle} alt='dotted circle decor'  width={300} height={291}></Image>
                    </div>
                    <div className={`${styles.stripped_circle__decor} hidden md:block`}>
                        <Image  src={strippedCircle} alt='dotted circle decor'  width={410} height={410}></Image>
                    </div>
                    <div className={`${styles.stripped_rectangle__decor}`}>
                        <Image  src={strippedRectangle} alt='dotted circle decor' width={262} height={133}></Image>
                    </div>
                </div>
                <div className="inner-homepage-hero max-w-siteContainer m-auto relative z-10" >
                    <HomepageSlider slides={props.slider}></HomepageSlider>
                    {/* {props.slider.map((slide:any,index:any)=>{
                        if(index == 1){
                            const body = documentToReactComponents(slide.description.json);
                            return(
                                <div key={index} className='home-slide flex flex-wrap'>
                                    <div className='md:w-1/2 w-full mb-5 md:mb-0 items-start flex flex-col justify-center pr-9 gap-7'>
                                        <h1 className=' font-bold font-sora text-white'>{slide.title}</h1>
                                        <div className=' text-white'>{ body }</div>
                                        <Button url={slide.cta.url} type='primary'>{slide.cta.text}</Button>
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <Image 
                                             
                                            alt={slide.image.title} 
                                            src={slide.image.url} 
                                            width={604} 
                                            height={slide.image.height} 
                                            sizes="(min-width: 768px) 50vw,100vw" />
                                    </div>
                                </div>
                            )
                        }
                        
                    })} */}
                    
                </div>

                {props.tabSlider ? 
                    <div className=" mt-9">
                        <TabSlider tabs={props.tabSlider}></TabSlider>
                    </div>
                : null}
                
                
            </div>
         </section>
    )
}

export default HomepageHero;