import React from 'react';
import {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from './useMediaQuery';
import close from './assets/close-icon.svg';
import menubar from './assets/menu-icon.svg';
import {motion,useScroll} from 'framer-motion';
const Link =({page,selected,setselected})=>{
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selected===lowerCasePage ? "text-yellow":""}
        hover:text-yellow transition duration-500
        `}
        href={`#${lowerCasePage}`}
        onClick={()=>setselected(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
 }


function Navbar({isTopOfPage,selected,setSelected})
{
        const[ isMenuToggled,setIsMenuToggled]=useState(false);
      const {scrollYProgress} = useScroll();
       const navbarBackground=isTopOfPage?"": "bg-red";
        const isAboveSmall = useMediaQuery('(min-width: 768px)');
        return(
            <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
                <motion.div
             className="left-0 top-0 w-full h-1 bg-gradient-rainblue fixed z-50"
             style={{ scaleX: scrollYProgress }}
          />
               <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className="font-playfair text-3xl font-bold">Imran Pasha</h4>

            {/*desktop */}
            {isAboveSmall ?(
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link page="Home" selected={selected} setselected={setSelected}/>
                    <Link page="Skill" selected={selected} setselected={setSelected}/>
                    <Link page="Project" selected={selected} setselected={setSelected}/>
                    <Link page="Experience" selected={selected} setselected={setSelected}/>
                    <Link page="Testimonial" selected={selected} setselected={setSelected}/>
                    <Link page="Contact" selected={selected} setselected={setSelected}/>
                    </div>
            ):(<button>
                <img src={menubar} alt="menu" className=" rounded-full bg-red p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}/>
            </button>)}
            {/*mobile*/}
            {!isAboveSmall && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                    <div className='flex justify-end p-12'>
                        <button onClick={()=>{setIsMenuToggled(!isMenuToggled)}}>
                            <img src={close} alt="close" className="w-6"/>
                        </button>
                       </div>
                       <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                       <Link page="Home" selected={selected} setselected={setSelected}/>
                    <Link page="Skill" selected={selected} setselected={setSelected}/>
                    <Link page="Project" selected={selected} setselected={setSelected}/>
                    <Link page="Experience" selected={selected} setselected={setSelected}/>
                    <Link page="Testimonial" selected={selected} setselected={setSelected}/>
                    <Link page="Contact" selected={selected} setselected={setSelected}/>
                        </div>
                    </div>
            )}
               </div>
            </nav>
        )
}
export default Navbar;