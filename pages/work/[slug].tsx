import Head from "next/head";
import { getWork, getAllWorksWithSlug, getNav } from '../../lib/api';
import { motion } from 'framer-motion';
import Navigation from "@/components/Navigation/Navigation";

const Work = ({work,nav}:{work:any,nav:any}) => {
        if(!work){
        return(
            <p>Loading</p>
        ) 
        }else{
        const workItem = work[0];
        const navigationItems = nav.nav.navItemCollection.items;
        return(
            <>
                <Head>
                    <title>{`Oshyn Work || ${workItem.title} `}</title>
                    <meta name="description" content="Oshyn service" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <motion.main initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} className=" bg-red-50">
                    <Navigation navItems={navigationItems}></Navigation> 
                    {work.title}
                    
                    {/* <ServicesHero title="test"></ServicesHero> */}
                </motion.main>
            </>
        )
    }

    
}

export default Work;

export async function getStaticPaths() {
    const work = await getAllWorksWithSlug();
    return {
        paths: work?.map(({ slug }:{slug:any}) => `/work/${slug}`) ?? [],
        fallback: "blocking",
    }
}

export async function getStaticProps({ params, preview = false }:{params:any,preview:any}) {

    const data = await getWork(params.slug, preview);
    const nav = (await getNav(preview)) ?? []
    return {
        props: {
            preview,
            work: data?.work ?? null,
            nav: nav
        },
        revalidate:3
    }
}