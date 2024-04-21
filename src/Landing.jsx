import useMediaQuery from "./useMediaQuery";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Socialmedia from "./socialmedia";
function Landing({selected,setSelected})
{
    const isAboveMedium=useMediaQuery('(min-width:1060px)');
    return(
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            
            {/*image*/}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
               {isAboveMedium ?(
                   <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                   before:border-2 before:border-blue before:z-[-1]">
                    <img src="src/assets/profile-image.png" alt="landing" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px]"/>
                    </div>
               ):(
                <img src="src/assets/profile-image.png" alt="landing" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px]"/>
               )}
               </div>
               {/*main section*/}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x:0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center ">
            Imran {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[120px] before:z-[-1]"
            >
             Pasha
            </span>
          </p>

          <p className="mt-14 mb-7 text-sm text-center">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum <br/> viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>
        {/*action*/}
        <motion.div 
        className="flex mt-5 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x:0 },
          }}
        >
              <AnchorLink
              className="bg-gradient-rainblue text-deep-blue px-7 py-3 rounded-sm text-sm font-semibold 
              hover:bg-blue hover:text-white transition duration-500"
              onClick={()=>setSelected('contact')}
              href="#contact">
                Contact Me
              </AnchorLink>
              <AnchorLink
              className="bg-gradient-rainblue text-deep-blue pr-0.5 py-0.5 rounded-r-sm "
             
              onClick={()=>setSelected('contact')}
              href="#contact">
               <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
               justify-center font-playfair px-10 text-white">
                Let's talk.
                </div>
              </AnchorLink>
            </motion.div>
            <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.4,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x:0 },
          }}
        >
                <Socialmedia/>
            </motion.div>
               </div>
          
        </section>
    );
}
export default Landing;