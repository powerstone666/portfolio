import Linegardient from "./llinegradient";
import Socialmedia from "./socialmedia";
import Backend from "./technologies/backend";
import Frontend from "./technologies/frontend";
import Languages from "./technologies/languages";
import useMediaQuery from "./useMediaQuery";
import {motion} from "framer-motion";
function Mysills(){
    const isAboveMedium=useMediaQuery('(min-width:1060px)');
    return(
        <section id="skill" className="pt-10 pb-24">
            {/*heading*/}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div 
            className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x:0 }
          }}
        >
         <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
         </p>
         <Linegardient width="w-1/3"/>
         <p className="mt-10 mb-7 text-2sm">specialize in frontend development, proficient in HTML, CSS, and JavaScript, with expertise in React.js, Vite, and Tailwind CSS.
          In backend development, I excel in Node.js and Express.js, alongside MySQL for database management. My proficiency extends to data structures and algorithms in Java.
           I utilize Postman and Zap for testing and
          Git for version control. While familiar with Python, I primarily focus on JavaScript-based technologies.</p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                {isAboveMedium ?(
                   <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full  before:h-full
                   before:border-2 before:border-blue before:z-[-1]">
                    <img src="https://www.titanui.com/wp-content/uploads/2022/04/11/80-Tech-Design-Stack-Icons-Figma.jpg" alt="skills" className="hover:filter hover:saturate-200 transition duration-500 z-10 h-72"/>
                    </div>
               ):(
                <img src="https://www.titanui.com/wp-content/uploads/2022/04/11/80-Tech-Design-Stack-Icons-Figma.jpg" alt="skills" className="hover:filter hover:saturate-200 transition duration-500 z-10
               "/>
               )}
                </div>
            </div>
            {/*front-end*/} 
            <div className="md:flex md:justify-between mt-16 gap-32">
               
               <motion.div 
            className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x:0 }
          }}
        >
               <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">01</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Front-End</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
               </div>
               <p className="mt-5">
               I specialize in crafting user-friendly websites using HTML, CSS, and JavaScript. With expertise in React.js, Vite, Tailwind CSS, and Bootstrap, I create dynamic and visually appealing web experiences. I enhance user interactions with animations powered by Framer Motion.

               </p>
               <Frontend/>
            </motion.div>
                {/*backend*/}
                <motion.div 
            className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x:0 }
          }}
        >
               <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">02</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Back-End</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
               </div>
               <p className="mt-5">
               In the backend realm, I excel in developing robust server-side applications using Node.js and Express.js. I ensure seamless data management with MySQL while venturing into MongoDB. Proficient in RESTful API design and implementation, I guarantee efficient communication between frontend and backend systems.

               </p>
               <Backend/>
            </motion.div>
                {/*Languages*/}
                <motion.div 
            className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x:0 }
          }}
        >
               <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">03</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Languages & Tools</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
               </div>
               <p className="mt-5">
               With a strong foundation in data structures and algorithms through Java, I seamlessly navigate through diverse programming challenges. Proficient in Java, Python, and JavaScript, I adeptly tackle frontend and backend development tasks. My toolkit includes Git for version control and GitHub for collaborative coding. Additionally, I'm adept at testing applications using Postman and Zap, ensuring quality and reliability.

               </p>
              <Languages/>
            </motion.div>
            
            </div>
        </section>
    );
}
export default Mysills;