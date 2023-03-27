import Image from "next/image";
import Button from "../../Button/Button";
import Link from "next/link";

const SubNav = (props:any)=>{
    const blocks = props.subnav.blocksCollection.items;
    const subnavItems = props.subnav.subnavItemsCollection.items;
    return(
        <div className={`subnav flex-wrap max-w-siteContainer w-[120rem] hidden lg:flex`}>
            <div className={`subnav_featured_content md:w-[32rem] lg:block hidden`}>
                {blocks.map((item:any,index:any)=>{
                    if(item.__typename == 'ImageBlock'){
                        return(
                            <div key={index} className="subnav-featured-image">
                                <h3>{item.title}</h3>
                                <Image src={item.image.url} alt={item.image.title} width={176} height={147} ></Image>
                            </div>
                        )
                    }
                    if(item.__typename == 'CtaTextBlock'){
                        return(
                            <div key={index} className="subnav-featured-text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                {item.ctaCollection.items.map((cta:any,index:any)=>{
                                    return(
                                        <Button key={index} url={cta.url} type='primary'>{cta.text}</Button>
                                    )
                                })}
                                
                            </div>
                        ) 
                    }
                   
                })}
            </div>
            <div className="subnav-links w-1 flex-1 p-10 text-black">
                <ul className="flex flex-wrap flex-col lg:flex-row max-w-full w-full lg:w-full">
                    {subnavItems.map((item:any,index:any)=>{
                        return(
                            <li className="lg:w-1/2 flex flex-wrap items-start w-full" key={index}>
                                <Link className="flex flex-wrap items-start items-center" href={item.link} prefetch={false}>
                                    <div className="subnav__link-icon w-7">
                                        <Image src={item.icon.url} alt={item.icon.title} width={28} height={item.icon.height}></Image>
                                    </div>
                                    <div className="subnav__link-data flex-1 pl-4 flex ">
                                        <p className=" font-bold">{item.title}</p>
                                        <p className="hidden lg:block">{item.description}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    )
}

export default SubNav