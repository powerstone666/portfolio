import React from 'react';
import {motion} from 'framer-motion';
import Linegardient from './llinegradient';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cranes from './timeline-components/cranes';

function Experience()
{
    return(
        <section id="experience" className="pt-48 pb-48">
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
                        MY <span className="text-red">EXP</span>
                        ERIENCE
                 </p>
                <div className="flex justify-center mt-5 ">
                 <Linegardient width="w-2/5"/>
                 </div>
                 </div>
                 <p className="mt-10 mb-10 text-2sm">
                 I've been working towards ,leveling up my skills and teaming up with smart people.in order to become a complete Software Developer Here's the rundown:
                    </p>
                                </motion.div>

              <VerticalTimeline lineColor='linear-gradient( #8a2be2, #ff69b4)'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'RGB(0, 102, 51)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'linear-gradient(to right, #8a2be2, #0000ff)',boxShadow: "0 0 20px 10px #4169e1", color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">GeekForGeeks</h3>
    <h4 className="vertical-timeline-element-subtitle">Data Structures And Algorithm-java</h4>
    <p>
            Currently working on DSA problems in Java.and im under 25th rank among 1000+ students in my university.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'RGB(240, 240, 240)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 -2023"
    iconStyle={{  background: 'linear-gradient(to right, #8a2be2, #0000ff)',boxShadow: "0 0 20px 10px #4169e1", color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Cranes Varsity</h3>
    <h4 className="vertical-timeline-element-subtitle">Java Intern</h4>
    <p>Learned Oops Concepts in java how to implement it,and introduction to java Full-Stack,
        Build  a project on java Full-Stack based on Internet Banking.
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'RGB(0, 102, 51)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{  background: 'linear-gradient(to right, #8a2be2, #0000ff)',boxShadow: "0 0 20px 10px #4169e1", color: '#fff' }}
  
    
  >
    <h3 className="vertical-timeline-element-title">Backend Development</h3>
    <h4 className="vertical-timeline-element-subtitle">Node.js-Expres-MySql</h4>
    <p>
      Started Learning Backend Development in Node.js and Express.js,alongside MySQL for database management.
      And Built a Full stack application named DynamicFlow integrating gemini ai and notes app.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'RGB(240, 240, 240)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 -present"
    iconStyle={{  background: 'linear-gradient(to right, #8a2be2, #0000ff)',boxShadow: "0 0 20px 10px #4169e1", color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Integrating AI Solutions into web</h3>
    <h4 className="vertical-timeline-element-subtitle">React.js-Tailwind-HuggingFaces</h4>
    <p>Started Learning integrating ai models into web application using hugging faces and built a project on AI Text Summarizer using react.js and tailwind css.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'RGB(0, 102, 51)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{  background: 'linear-gradient(to right, #8a2be2, #0000ff)',boxShadow: "0 0 20px 10px #4169e1", color: '#fff' }} 
  >
    <h3 className="vertical-timeline-element-title">Hackathons</h3>
    <h4 className="vertical-timeline-element-subtitle">Jovian-xiaomi-hkbkce-massai-UBA</h4>
    <p>
          1) Participated in many hackathons ranging from jovians to xiaomi to hkbkce  and built projects on it and eagerly looking for new hackathons around me to participate and win.
          <br/>
          2) Attended various tech conferences such as massai O[1] to workshops on java,innovative design thinking conducted by HKBKCE and web development by devtown.
          <br/>
          3) Participated in extra curricullar activities such as UBA in collabration with HKBKCE and Goverment of Karnataka.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'RGB(240, 240, 240)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 -present"
    iconStyle={{ background: 'linear-gradient(to right, #8a2be2, #0000ff)',boxShadow: "0 0 20px 10px #4169e1", color: '#fff' }}
    
    
  >
    <h3 className="vertical-timeline-element-title">Front-End Development</h3>
    <h4 className="vertical-timeline-element-subtitle">React.js-HTML-CSS-JavaScript</h4>
    <p>Started Learning HTML CSS and Javascript initially and moved on to React.js and build BuildHub a Static website
        for small companies to showcase their products as afirst step towards web-development.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'RGB(0, 102, 51)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{  background: 'linear-gradient(to right, #8a2be2, #0000ff)',boxShadow: "0 0 20px 10px #4169e1", color: '#fff' }} 
   
  >
    <h3 className="vertical-timeline-element-title">JAVA</h3>
    <h4 className="vertical-timeline-element-subtitle">First Language as a student</h4>
    <p>
       Started learning java as a first language along with basics of python and c as a student before advancing it to DSA
       ,and development of web applications.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

        </section>
    )
}
export default Experience;