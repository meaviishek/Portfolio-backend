import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import {port,lusi,infl} from "./index"


const boxVariant = {
  visible: { opacity: 1, scale: 1,transition:{duration:0.3}},
  hidden: { opacity: 0, scale: 0 },
}

function Project() {
  return (
    <div>
  
    
    <div    className="flex flex-col w-fit  ">
  <motion.div initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        y:  50 
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 0.5 // Animation duration
        }
      }}
      viewport={{ once: true }}  className="product-card grid grid-cols-1 md:grid-cols-3 gap-6 py-6 lg:pb-8 lg:pt-8 ">
    <div
      className="bg-gradient-to-br  dark:from-[#272728] dark:to-[#323232] border-[0.5px] border-[#353535] rounded-xl w-auto mx-auto flex flex-col justify-center gap-y-2 shadow-md shadow-[#161616] hover:scale-105 translate-all duration-300">
      <div className="w-full flex flex-col justify-between gap-y-3 max-w-[20rem] mx-auto p-3 rounded-xl">
        <img className="rounded-[calc(20px-12px)] rounded-b-none hover:scale-105 translate-all duration-300" src={port} alt="Professional UI/UX Design Service" style={{width: "100%;", height:" 250px;"}} />
        <div className="flex flex-col gap-y-1">
          <h4 className="text-xl font-bold  lg:text-left">Portfolio Website<h5 className="text-sm text-[#5f5f5f]">Web development</h5>
          </h4>
          <p className="text-black dark:text-[#c4c2c2] text-[15px] lg:text-justify">I created my portfolio using Tailwind, HTML, and React.js, incorporating animations to enhance the user experience. This project highlights my skills and projects, demonstrating my proficiency in modern web development technologies and design principles. The use of Tailwind ensures a responsive and visually appealing layout, while React.js provides a dynamic and interactive interface. The animations add a polished touch, making the portfolio engaging and professional.</p>
          
        </div>
      </div>
    </div>

    <div 
      className="bg-gradient-to-br  dark:from-[#272728] dark:to-[#323232] border border-[#353535] rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-2 shadow-md shadow-[#161616] hover:scale-105 translate-all duration-300">
      <div className="w-full flex flex-col justify-between gap-y-3 max-w-[20rem] mx-auto p-3 rounded-xl">
        <img className="rounded-[calc(20px-12px)] rounded-b-none hover:scale-105 translate-all duration-300" loading="lazy" src={lusi} alt="Professional UI/UX Design Service" style={{width: "100%;", height:" 250px;"}} />
        <div className="flex flex-col gap-y-1">
          <h4 className="text-xl font-bold  lg:text-left">Lusi Beauty<h5 className="text-sm text-[#5f5f5f]">Web development</h5>
          </h4>
          <p className="text-black dark:text-[#c4c2c2] text-[15px] lg:text-justify">
          I created a website for my mother's beauty and tailoring shop using React, Tailwind, and Auth0 for secure authentication. The frontend is fully developed, providing a seamless user experience, while the backend is still under development. This project aims to improve her business's online visibility and streamline customer interactions, showcasing my skills in modern web development.</p>
          
          
        </div>
      <a href="https://lusi-beauty.vercel.app/" target="blank">  <button className="bg-[#1E1E1F] py-2 px-3 rounded-xl translate-all duration-700 border-[0.5px] border-[#3c3c40] shadow-md shadow-[#181818] hover:bg-[#131313]">View Site</button></a>
      </div>
    </div>
    

    <div 
      className="bg-gradient-to-br  dark:from-[#272728] dark:to-[#323232] border border-[#353535] rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-2 shadow-md shadow-[#161616] hover:scale-105 translate-all duration-300">
      <div className="w-full flex flex-col justify-between gap-y-3 max-w-[20rem] mx-auto p-3 rounded-xl">
        <img className="rounded-[calc(20px-12px)] rounded-b-none hover:scale-105 translate-all duration-300" loading="lazy" src={infl} alt="Professional UI/UX Design Service" style={{width: "100%;", height:" 250px;"}} />
        <div className="flex flex-col gap-y-1">
          <h4 className="text-lg font-bold  lg:text-left">Influencer & Sponsorship Co-ordination Platform <h5 className="text-sm text-[#5f5f5f]">Web development</h5>
          </h4>
          <p className="text-black dark:text-[#c4c2c2] text-[15px] lg:text-justify">I developed an Influencer Engagement & Sponsorship Coordination Platform as part of my IITM BS degree project. This web-based application leverages Flask for backend development, SQLite for database management, Tailwind for CSS styling, Jinja for templating, and HTML for structuring content. The platform facilitates seamless interaction between influencers and sponsors, enabling efficient collaboration and coordination.</p>
          
          
        </div>
  
      </div>
    </div>
  </motion.div>
</div>
    </div>

    
  )
}

export default Project