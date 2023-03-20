
import Footer from "./Footer"

const Layout = ({children})=>{
    return(
        <>
        <main>
            { children }
            
        </main>
        <Footer></Footer>
        </>
    )
}

export default Layout;