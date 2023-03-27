import WorkCard from "../WorkCard/WorkCard"

const WorkListing = (props:any) => {
    return(
        <section className="works-listing bg-gray-200 pt-40 pb-40 flex justify-center ">
            <div className="works-listing__inner max-w-[1320px] px-12 justify-center gap-12 flex flex-wrap justify-start">
                {props.works.map((item:any,index:any)=>{
                    return(
                        <WorkCard key={index} title={item.title} client={item.client} image={item.featuredImage} slug={item.slug} col={'2'} />
                    )
                })}
            </div>
            
        </section>
    )
}

export default WorkListing