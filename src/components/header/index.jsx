import React, { useEffect, useState } from 'react'

import logo from '/logo.jpeg'
import { Link } from 'react-scroll';

import {FaXmark, FaBars} from "react-icons/fa6";
import { motion } from 'framer-motion'; 

export const NavBar = () => {
    const [isMenuOpen,setIsMenuOp] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOp(!isMenuOpen);

    }

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setSticky(true);
            }else{
                setSticky(false);
            }
        };

        window.addEventListener("scroll",handleScroll);

        return () => {
            window.addEventListener('scroll',handleScroll);
        }
    })

    const navItems = [
        {link: "Home",path:"home"},
        {link: "Service",path:"service"},
        {link: "About",path:"about"},
        {link: "areas",path:"areas"},
        {link: "Contact",path:"contact"},
        {link: "Faq",path:"faq"},
    ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14  px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b" :" bg-amareloPrimaria duration-300"}`}>
            <div className=' flex justify-between items-center text-base gap-8'>
                <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="logo" className='w-10 inline-block items-center' /><span className='text-[#263238]'>Mapiko</span></a>

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path}) =><Link to={path} spy={true} smooth={true} 
                        offset={-100} key={path} className='block text-base text-cinza hover:text-azul
                        first:font-medium'>{link}</Link>)
                    }

                </ul>


                <div className='md:hidden '>

                    <button onClick={toggleMenu}
                    className='text-azul focus:outline-none focus:text-azul'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6 text-verde'/>) : 
                            (<FaBars className='h-6 w-6 text-verde'/>)
                        }
                    </button>

                </div>
            </div>
            
            <motion.div 
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3.0, delay: 0.5 }}
            exit={{y: '100', opacity: 0 }}
            className={`space-y-8 px-4 mt-16 py-7 bg-blue-950  ${isMenuOpen ?"block fixed top-0 right-0 left-0" :"hidden"} `}>

                    {
                        navItems.map(({link,path}) =><Link to={path} spy={true} smooth={true} 
                        offset={-100} key={path} className='block text-base text-verde hover:text-azul
                        first:font-medium'>{link}</Link>)
                    }



            </motion.div>
        </nav>
    </header>
  )
}