import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import { motion } from "framer-motion";
import { useState } from "react";
import Search from '../Search/Search';

import searchIcon from '../../public/magnifying-glass.svg'
import hambugerMenu from '../../public/hamburger-menu.svg'
import closeMenu from '../../public/hamburger-close.svg'

const SubNav = dynamic(() => import('../Navigation/SubNav/SubNav'))




const Navigation = (props:any)=>{
    const [mobile,setMobile] = useState<boolean>(false);
    const [toggle,setToggle] = useState(-1);
    const [searchToggle,setSearchToggle] = useState<boolean>(false)
    const container = {
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const itemAnimation = {
        hidden:{
            opacity:0,
            y:-20
        },
        show:{
            opacity:1,
            y:[-20, 0],
            transition:{
                duration: 0.3,
                ease: "linear"
            }        
        }
        
    }

    const manageToggle = (index:any)=>{
        if(toggle == index){
            setToggle(-1)
        }else{
            setToggle(index)
        }
        
    }

    const handleMobile = ()=>{
        setMobile(!mobile)
    }

    const handleSearch = () => {
        setSearchToggle(!searchToggle)
    }

    return(
            <motion.nav  className={`main_nav main-nav w-full flex h-40 items-center m-auto relative z-10 px-9 pt-20 justify-between lg:justify-between`}>
                <div className='logo min-w-max -z-10'>
                    <Link href='/' >
                        <Image src='/oshyn-logo.svg' alt='Oshyn logo' priority width={155} height={65}></Image>
                    </Link>
                    
                </div>
                <motion.ul initial='hidden' animate='show' variants={container} className={` menu lg:w-3/5 w-[300px] ${mobile ? 'flex' : 'hidden'} bg-white h-full lg:bg-transparent lg:flex flex-col lg:flex-row lg:justify-center justify-start fixed lg:relative top-0 right-0 -z-10`}>
                    <li>
                        <button className=' flex lg:hidden' >
                            <Image onClick={handleMobile} src={closeMenu} alt='menu'></Image>
                        </button>
                    </li>
                    {props.navItems.map((item:any,index:any)=>{
                        return(
                            <motion.li onClick={()=>manageToggle(index)} variants={itemAnimation} key={index} className={` text-black lg:text-white px-3 uppercase font-rubik pt-2 ${toggle == index ? 'toggle_active' : null }`}>
                                <Link href={item.url ? item.url : '#'} prefetch={false}>{item.text}</Link>
                                { item.subnav ?
                                    <SubNav subnav={item.subnav} ></SubNav>
                                : null }
                            </motion.li>
                        )
                    })}

                </motion.ul>
                
                <button className=' flex -z-20 hidden lg:block' >
                        <Image onClick={handleSearch} src={searchIcon} alt='search'></Image>
                </button>
                <button className=' flex lg:hidden -z-20' >
                        <Image onClick={handleMobile} src={hambugerMenu} alt='menu'></Image>
                </button>
                <div className=' justify-end hidden lg:flex'>
                    <Button url="https://google.com" type='secondary' >Ask a Question</Button>
                </div>
                <div className={`${searchToggle ? ' block' : 'hidden' } absolute top left-0`}>
                    <Search serachNav={true} works={props.works}></Search>
                </div>
            </motion.nav>
        
    )
}

export default Navigation