import { useState } from "react";
import LogoCarousel from "../LogoCarousel/LogoCarousel";

const TabSlider = (props:any) => {
    const tabs = props.tabs.sliderCollection.items;
    const [active, setActive] = useState(0);
    function toggleState(index:any){        
        setActive(index);
    } 
    return(
        <div className="tab-slider__inner max-w-siteContainer mx-auto md:px-5 flex flex-wrap md:text-left text-center rounded-xl z-20 relative px-5 py-3">
            <div className=" w-full md:w-1/5 ">
                <div className="tabs flex md:justify-start justify-center">
                    {tabs.map((item:any,index:any)=>{
                        if(index == 0){
                            return(
                                <div key={index} className={`${index == active ? 'tab-active relative' : null } mr-2 text-white cursor-pointer font-bold`} onClick={()=>toggleState(index)}>{item.title} </div>
                            )  
                        }else{
                            return(
                                <div key={index} className={`${index == active ? 'tab-active relative' : null } mr-2 text-white cursor-pointer font-bold`} onClick={()=>toggleState(index)}>{item.title}</div>
                            )
                        }
                        
                    })}
                </div>
                <p className=" mt-3 text-white">{props.tabs.description}</p>
            </div>
            <div className="tabs-logo__sliders w-full md:w-4/5">
                    {tabs.map((item:any,index:any)=>{
                        return(
                            <div key={index} className={`${index == active ? ' block' : ' hidden' }`}>
                                <LogoCarousel key={index} slider={item.logosCollection}></LogoCarousel>
                            </div>
                        )
                    })}
                    

            </div>
        </div>
    )
}

export default TabSlider;