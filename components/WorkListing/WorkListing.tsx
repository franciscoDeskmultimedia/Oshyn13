import WorkCard from "../WorkCard/WorkCard"

const WorkListing = (props:any) => {
    console.log(props.works)
    return(
        <section className="works-listing bg-gray-200 justify-center gap-12 pt-40 pb-40 flex flex-wrap">
            {props.works.map((item:any,index:any)=>{
                return(
                    <WorkCard key={index} title={item.title} client={item.client} image={item.featuredImage} slug={item.slug}/>
                )
            })}
        </section>
    )
}

export default WorkListing