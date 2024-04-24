import React, { useEffect, useState } from 'react';
import DotGroup from './DotGroup';
import useMediaQuery from './useMediaQuery';
import Navbar from './navbar';
import Landing from './Landing';
import Linegardient from './llinegradient';
import Myskills from './myskills';
import Projects from './projects';
import Experience from './experience';
import Testimonial from './testimonial';
import Contact from './contact';
import Footer from './footer';
import AnimatedCursor from "react-animated-cursor"
function App() {
  const [selected, setSelected] = useState('home');
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
    } if(window.scrollY !==0) {
      setIsTopOfPage(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
},[]);



  return (
    <div className="bg-deep-blue">
      <AnimatedCursor
       innerSize={20}
       outerSize={35}
       color='193, 11, 111'
       outerAlpha={0.2}
       innerScale={0.7}
       outerScale={5}
      />
      <Navbar isTopOfPage={isTopOfPage} selected={selected} setSelected={setSelected} />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMedium && (
          <DotGroup selected={selected} setSelected={setSelected} />
        )}
      <Landing setSelected={setSelected}/>
      </div>
      <Linegardient />
      <div  className='w-5/6 mx-auto md:h-full'>
         <Myskills/>
      </div>
      <Linegardient />
      <div  className='w-5/6 mx-auto '>
         <Projects/>
      </div>
      <Linegardient />
      <div  className='w-5/6 mx-auto '>
         <Experience/>
      </div>
      <Linegardient />
      <div  className='w-5/6 mx-auto md:h-full'>
         <Testimonial/>
      </div>
      <Linegardient />
      <div  className='w-5/6 mx-auto md:h-full'>
         <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
