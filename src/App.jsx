import React, { useEffect, useState } from 'react';
import DotGroup from './DotGroup';
import useMediaQuery from './useMediaQuery';
import Navbar from './navbar';
import Landing from './Landing';
function App() {
  const [selected, setSelected] = useState('home');
  const isAboveMedium = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
    } else {
      setIsTopOfPage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selected={selected} setSelected={setSelected} />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMedium && (
          <DotGroup selected={selected} setSelected={setSelected} />
        )}
      </div>
      <Landing setSelected={setSelected}/>
    </div>
  );
}

export default App;
