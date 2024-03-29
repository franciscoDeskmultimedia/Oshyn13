import Head from "next/head";
import Navigation from "../../components/Navigation/Navigation";

import ServicesHero from "../../components/servicesHero";

import { getAllServicesWithSlug, getService, getNav } from "../../lib/api";
import { motion } from 'framer-motion';

const Services = ({service, nav}:{service:any,nav:any})=>{
    if(!service){
        return(
            <p>Loading</p>
        ) 
    }else{
        const serviceItem = service[0];
        const navigationItems = nav.nav.navItemCollection.items;
        return(
            <>
                <Head>
                    <title>{`Oshyn Service || ${serviceItem.title}`}</title>
                    <meta name="description" content="Oshyn service" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <motion.main initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} className=" bg-red-50">
                    <Navigation navItems={navigationItems}></Navigation> 
                    <ServicesHero 
                        title={serviceItem.hero.title} 
                        description={serviceItem.hero.description}
                        cta={{
                            link : serviceItem.hero.cta.url,
                            text: serviceItem.hero.cta.text
                        }}
                        image={{
                            url: serviceItem.hero.image.url,
                            width: serviceItem.hero.image.width,
                            height: serviceItem.hero.image.height,
                            title: serviceItem.hero.image.title


                        }}
                    />
                    
                    {/* <ServicesHero title="test"></ServicesHero> */}
                </motion.main>
            </>
        )
    }
    
}

export async function getStaticPaths() {
    const services = await getAllServicesWithSlug();
    return {
        paths: services?.map(({ slug }:{slug:any}) => `/services/${slug}`) ?? [],
        fallback: "blocking",
    }
}

export async function getStaticProps({ params, preview = false }:{params:any,preview:any}) {

    const data = await getService(params.slug, preview);
    const nav = (await getNav(preview)) ?? []
    return {
        props: {
            preview,
            service: data?.services ?? null,
            nav: nav
        },
        revalidate:3
    }
}
  


export default Services;