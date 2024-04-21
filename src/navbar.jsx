import React from 'react';
import {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from './useMediaQuery';

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


function Navbar({isTopOfPage,selected,setselected})
{
        const[ isMenuToggled,setIsMenuToggled]=useState(false);
    
       const navbarBackground=isTopOfPage?"": "bg-red";
        const isAboveMedium = useMediaQuery('(min-width: 768px)');
        return(
            <nav className="z-40 w-full fixed top-0 py-6">
               <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className="font-playfair text-3xl font-bold">Imran Pasha</h4>

            {/*desktop */}
            {isAboveMedium ?(
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link page="Home" selected={selected} setselected={setselected}/>
                    <Link page="Skill" selected={selected} setselected={setselected}/>
                    <Link page="Project" selected={selected} setselected={setselected}/>
                    <Link page="Testimonial" selected={selected} setselected={setselected}/>
                    <Link page="Contact" selected={selected} setselected={setselected}/>
                    </div>
            ):(<button>
                <img src="src/assets/menu-icon.svg" alt="menu" className=" rounded-full bg-red p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}/>
            </button>)}
            {/*mobile*/}
            {!isAboveMedium && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                    <div className='flex justify-end p-12'>
                        <button onClick={()=>{setIsMenuToggled(!isMenuToggled)}}>
                            <img src="src/assets/close-icon.svg" alt="close" className="w-6"/>
                        </button>
                       </div>
                       <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                       <Link page="Home" selected={selected} setselected={setselected}/>
                    <Link page="Skill" selected={selected} setselected={setselected}/>
                    <Link page="Project" selected={selected} setselected={setselected}/>
                    <Link page="Testimonial" selected={selected} setselected={setselected}/>
                    <Link page="Contact" selected={selected} setselected={setselected}/>
                        </div>
                    </div>
            )}
               </div>
            </nav>
        )
}
export default Navbar;