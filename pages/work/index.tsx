import Head from "next/head";
import Navigation from "../../components/Navigation/Navigation";
import { getAllWorksWithSlug, getNav, getForm, getPage } from '../../lib/api'
import WorkCard from "@/components/WorkCard/WorkCard";
import BasicHero from "@/components/BasicHero/BasicHero";

const WorkLanding = ({works,nav,page}:{works:any,nav:any,page:any}) => {
    const pageData = page.page[0];
    const navigationItems = nav.nav.navItemCollection.items;
    console.log(works)
    return(
        <>  
            <Head>
                <title>{`Oshyn Works `}</title>
                <meta name="description" content="Oshyn works" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navigation navItems={navigationItems}></Navigation> 
                <BasicHero title={pageData.title} description={pageData.description}></BasicHero>
                <section className="works-listing bg-gray-200 justify-center gap-12 pt-40 pb-40 flex flex-wrap">
                    {works.map((item:any,index:any)=>{
                        return(
                            <WorkCard key={index} title={item.title} client={item.client} image={item.featuredImage} slug={item.slug}/>
                        )
                    })}
                </section>
            </main>
        </>
    )
}

export default WorkLanding

export async function getStaticProps({ preview = false }:{preview:any}) {
    const works = (await getAllWorksWithSlug()) ?? [];
    const nav = (await getNav(preview)) ?? [];
    const page = await getPage('work', preview);
    return {
      props: { preview, works, nav, page },
      revalidate: 20
    }
  }