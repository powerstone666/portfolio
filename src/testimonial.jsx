import Linegardient from "./llinegradient"; // Corrected import statement
import { motion } from "framer-motion";

function Testimonial() {
    const testimonialStyles = `mx-auto realtive max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    return (
        <section id="testimonial" className="pt-32 pb-16">
        {/* HEADING */}
        <motion.div
          className="md:w-1/3 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-red">
            TESTIMONIALS
          </p>
          <Linegardient width="mx-auto w-2/5" />
          <p className="mt-10 text-xl">
            Here's What People are Saying About My Work.Discover why I'm the go-to choice.
          </p>
        </motion.div>
  
        {/* TESTIMONIALS */}
        <div className="md:flex md:justify-between gap-8">
          <motion.div
            className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-junaid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-5xl">“</p>
            <p className="text-center text-md">
            I've known Imran pasha for 3yrs, witnessing their growth and success. Skilled professional and wonderful to work with. Will continue to achieve great things
            </p>
            <p className="flex justify-end">- Junaid Mehraj</p>
          </motion.div>
  
          <motion.div
            className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-ankit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-5xl">“</p>
            <p className="text-center text-md">
            imran pasha is an exceptional talent in Software Development. Impressive expertise and attention to detail. Outstanding results every time
            </p>
            <p className="flex justify-end">- Ankit Kumar</p>
          </motion.div>
  
          <motion.div
            className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-ateeq"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-5xl">“</p>
            <p className="text-center text-md">
            Working with imran pasha has been a pleasure. Their dedication and passion shine in everything they do. Highly recommend for any project!
            </p>
            <p className="flex justify-end">Ateeq Ur Rehaman</p>
          </motion.div>
        </div>
      </section>
  
    );
}

export default Testimonial;
