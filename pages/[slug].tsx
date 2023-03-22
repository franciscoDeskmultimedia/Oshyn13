import BasicHero from "../components/BasicHero/BasicHero";
import { getAllPagesWithSlug, getAllWorksWithSlug, getPage, getNav } from "../lib/api";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import HomepageHero from "@/components/HomepageHero/HomepageHero";
import Carousel from "@/components/Carousel/Carousel";
import WorkListing from "@/components/WorkListing/WorkListing";

const BasicPage = ({page, nav, works}:{page:any,nav:any,works:any})=>{
    const navigationItems = nav.nav.navItemCollection.items;
    return(
        <>
        <Head>
            <title>{`Oshyn Service || ${page.title} `}</title>
            <meta name="description" content="Oshyn service" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navigation navItems={navigationItems}></Navigation>
            {/* <section className='homepage-hero min-h-screen -mt-40 pt-40 w-full bg-background pb-24' >
                <BasicHero title={page.title} description={page.description}></BasicHero>
            </section> */}
            {page.blocksCollection.items.map((item:any,index:any)=>{

                // if(item.__typename == "Slider"){
                // return(
                //     <HomepageHero key={index} slider={item.sliderItemsCollection.items} tabSlider={item.tabSlider}></HomepageHero>
                // )
                // }

                if(item.__typename == "RelatedServicesSlider"){

                return(
                    <section key={index} className='related-services py-20 px-10 w-full'>
                    <Carousel 
                        type='service'
                        cardSlides={item.relatedServicesCollection.items} 
                        title={item.title}
                        description={item.description}
                        cta={item.cta}
                    />
                    </section>
                )
                }
                if(item.__typename == "BasicHero"){

                    return(
                        <BasicHero key={index} title={item.title} description={item.description}></BasicHero>
                    )
                }
                if(item.__typename == "WorkListing"){

                    return(
                        <WorkListing works={works} ></WorkListing>
                    )
                }
                // if(item.__typename == "SliderCta"){
                //   return(
                //     <section key={index} className='slider-cta pt-36 px-10 w-full bg-slate-900'>
                //       <SliderCta slides={item}></SliderCta>
                //     </section>
                //   )
                // }
                // if(item.__typename == 'InsightSlider'){
                //   return(
                //     <section key={index} className='insight py-20 px-10 w-full'>
                //       <Carousel 
                //         type='post'
                //         arrows='true'
                //         cardSlides={item.slideCollection.items} 
                //         title={item.title}
                //         description={item.description}
                //         cta={item.ctaCollection.items}
                //       />
                //     </section>
                //   )
                // }
                // if(item.__typename == 'TabSlider'){
                //   return(
                //     <section key={index} className='tab-slider py-20 px-10 w-full'>
                //       <TabSlider tabs={item} />
                //     </section>
                //   )
                // }
                // if(item.__typename == 'TestimonySlider'){
                //   return(
                //     <section key={index} className='testimony-slider py-20 px-10 w-full'>
                //       <TestimonySlider title={item.title} description={item.description} slides={item.testimoniesCollection.items}/>
                //     </section>
                //   )
                // }
                // if(item.__typename == 'TabSection'){
                
                //   return(
                //     <section key={index} className='tabs py-20 px-10 w-full bg-gray-100'>
                //       <TabSection tabs={item}></TabSection>
                //     </section>
                //   )
                // }
                })}
        </main>
        </>
    )
}

export async function getStaticPaths() {
    const pages = await getAllPagesWithSlug();
    return {
        paths: pages?.map(({ slug }:{slug:any}) => {
                return `/${slug}`
        }) ?? [],
        fallback: "blocking",
    }
}

export async function getStaticProps({ params, preview = false }:{params:any,preview:any}) {
    const works = (await getAllWorksWithSlug()) ?? [];
    const data = await getPage(params.slug, preview);
    const nav = (await getNav(preview)) ?? []
    return {
        props: {
            preview,
            page: data?.page[0] ?? null,
            nav: nav,
            works 
        },
        revalidate:3
    }
}

export default BasicPage