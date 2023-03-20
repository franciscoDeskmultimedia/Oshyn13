import Image from "next/image";

import styles from "../BasicHero/BasicHero.module.scss"


const BasicHero = (props:any)=> {
    return (
        <section className={`${styles.basic_hero} py-20 px-10 w-full -mt-40 pt-40 bg-background pb-24  z-0 flex flex-col justify-center`}>
            <div className="basic-hero__inner max-w-siteContainer mx-auto px-9 mt-10">
                <div className="basic-hero__decor">
                    <div className={`${styles.dotted_circle__decor}`}>
                        <Image  src='/dotted-circle.svg' alt='dotted circle decor'  width={300} height={291}></Image>
                    </div>
                    <div className={`${styles.stripped_circle__decor} hidden md:block`} >
                        <Image  src='/stripped-circle.svg' alt='dotted circle decor' width={410} height={410}></Image>
                    </div>
                    <div className={`${styles.stripped_rectangle__decor}`}>
                        <Image  src='/stripped-rectangle.svg' alt='dotted circle decor' width={262} height={133}></Image>
                    </div>
                </div>
                <div className="inner-homepage-hero max-w-siteContainer m-auto relative z-10 flex flex-col justify-center" >
                    <h1 className=" text-center text-white mb-16 ">{props.title}</h1>
                    <p className=" text-white text-center">{props.description}</p>
                </div>
                
                
            </div>
         </section>
    )
}

export default BasicHero;