import Linegardient from "./llinegradient";
import { motion } from "framer-motion";
import dynamicflow from "./assets/dynamicflow-1.png";
import textsummarizer from "./assets/textsummarizer.png";
import buildhub from "./assets/buildhub.png";
import usermanagement from "./assets/usermanagement.png";
import melodymind from "./assets/melodymind.png";
function Projects()
{
        // Your animation variants
        const container = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.2
                }
            }
        };
        
        const projectVariant = {
            hidden: { opacity: 0.8, scale: 1.0 },
            visible: {
                opacity: 1,
                scale: 1
            }
        };

        const Project=({title,title2,gitlink})=>{
                const overlayStyles=`absolute h-ful w-full opacity-0 hover:opacity-90 transition duration-500 
                bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue h-full `;
                const projectTitle=title.split(" ").join("-").toLowerCase();
                return(
                    <motion.div variants={projectVariant} className="relative">
                                <div className={overlayStyles}>
                                        <p className="text-2xl font-playfair mb-5">{title2}</p>
                                     
                                        <a
                            className="bg-red text-deep-blue px-7 py-3 rounded-sm text-sm font-semibold 
                            hover:bg-blue hover:text-white transition duration-500"
                            href={gitlink} target="blank_">
                                View Code
                            </a>
                                </div>
                                <img src={title} alt={projectTitle}/>
                        </motion.div>
                )
        }
        return (
                <section id="project" className="pt-48 pb-48">
                         <motion.div 
                        className="md:w-2/4 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, x:0 }
                    }}
                >
                        <div>
                 <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">PRO</span>
                        JECTS
                 </p>
                <div className="flex justify-center mt-5 ">
                 <Linegardient width="w-1/3"/>
                 </div>
                 </div>
                 <p className="mt-10 mb-10 text-2sm">specialize in frontend development, proficient in HTML, CSS, and JavaScript, with expertise in React.js, Vite, and Tailwind CSS.
                    In backend development, I excel in Node.js and Express.js, alongside MySQL for database management.I've honed my skills through various projects, leveraging a diverse tech stack to create innovative solutions. From dynamic platforms to task management apps, each project showcases my proficiency in frontend and backend development.
                    .</p>
                                </motion.div>
                                {/*projects*/}
                                <div className="flex justify-center">
                                <motion.div 
    className="sm:grid sm:grid-cols-3"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={container}
>
                        {/*row1*/}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibolld">
                        BEAUTIFUL USER INTERFACE
                    </div>
                    <Project title={melodymind}  title2="MelodyMind" gitlink="https://github.com/powerstone666/MelodyMind"/>
                    <Project title={dynamicflow}  title2="DynamicFlow" gitlink="https://github.com/powerstone666/DynamicFlow-react"/>
                    <Project title={textsummarizer}  title2="AI Text Summarizer" gitlink="https://github.com/powerstone666/text-summarizer"/>
                    {/*row2*/}
                    <Project title={buildhub}   title2="BuildHub" gitlink="https://github.com/powerstone666/BuildHub"/>
                    <Project title={usermanagement}  title2="User Management System" gitlink="https://github.com/powerstone666/user-spring"/>
                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibolld">
                     SMOOTH USER EXPERIENCE
                    </div>
                        </motion.div>
                                </div>
                </section>
        );
}
export default Projects;