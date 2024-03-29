import Button from "../components/Button/Button";
import Image from "next/image";

const ServicesHero = (props)=>{
    return (
        <>
            <div className="service-hero min-h-screen -mt-40 pt-40 w-full bg-background pb-24">
                <div className="servicesDecor"></div>
                
                <div className="max-w-7xl m-auto relative z-10 flex flex-wrap" >
                    <div className=" w-1/2">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <div className="services-cta">
                            <Button url={props.cta.link} type="primary">{props.cta.text}</Button>
                        </div>
                    </div>
                </div>

                <div className=" w-1/2">
                    <Image 
                        src={props.image.url} 
                        width={props.image.width}
                        height={props.image.height}
                        alt={props.image.title}
                    />
                </div>
            </div>
        </>
    )
}

export default ServicesHero;