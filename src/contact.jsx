import Linegardient from "./llinegradient";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
function Contact(){
    const {register,handleSubmit,trigger,formState:{errors}}=useForm();
    const onSubmit=async (e)=>{
        const isValid=await trigger();
        if(!isValid)
        {
            e.prevetDefault();
        }
    }
return(
    <section id="contact" className="py-48">
        {/*Heading*/}
        <motion.div
          className="flex justify-end w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <div>
          <p className="font-playfair font-semibold text-4xl">
           <span className="text-yellow">CONTACT ME</span>  TO GET STARTED
          </p>
         
            <div className="flex md:justify-end my-5">
            <Linegardient width="w-1/2" />
            </div>
          </div>
        </motion.div>
        {/*Form*/}
        <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
            <img src="src/assets/contact.png" alt="contact" className="hover:filter hover:saturate-200 transition duration-500"/>
            </motion.div>
            <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
        <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/453a32f163bb96323b5b860d8bcfb018" method="post"> 
         <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 outline-none  focus:border-red border-4 border-transparent "
         type="text" placeholder="NAME" {...register("name",{
            required:true,
            maxLength:100,
         })}/>
         {
            errors.name &&(
                <p className="text-red mt-1">{errors.name.type==='required && "this field is required'}
                {errors.name.type==='maxLength' && "Maximum Length Reached"}</p>
            )
         }
         <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 outline-none  focus:border-red border-4 border-transparent"
         type="text" placeholder="EMAIL" {...register("email",{
            required:true,
            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
         })}/>
         {
            errors.name &&(
                <p className="text-red mt-1">{errors.name.type==='required && "this field is required'}
                {errors.email.type==='pattern' && "Invalid Email"}</p>
            )
         }
          <textarea className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 outline-none  focus:border-red border-4 border-transparent"
         type="text"  row="5" cols="50" placeholder="MESSAGE" {...register("message",{
            required:true,
            maxLength:2000,
         })}/>
           {
            errors.name &&(
                <p className="text-red mt-1">{errors.name.type==='required && "this field is required'}
                {errors.message.type==='maxLength' && "MaxLength Exceeded"}</p>
            )
         } <button type="submit" className="p-5 bg-yellow text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500">
            SEND ME A MESSAGE
         </button>
        </form>
        </motion.div>
        </div>
    </section>
);
}
export default Contact;