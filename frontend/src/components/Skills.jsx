
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill,RiJavascriptFill } from "react-icons/ri";
import { FaReact,FaPython,FaGit } from "react-icons/fa";
import { BiLogoPostgresql,BiLogoFlask,BiLogoCPlusPlus} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

function Skills() {
  return (
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
    viewport={{ once: true }}   >
        <div className="grid gap-5 md:grid-cols-2 md:gap-5 md:mt-10">


<div className="rounded-xl  bg-[#272728] p-4 text-center shadow-xl md:hover:scale-105 translate-all duration-300">
    
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Frontend</h1>
      <div className="flex gap-5 md:gap-10">


      <div className="relative size-14 md:size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="10"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <TiHtml5 className="text-4xl md:text-5xl"/></span>
  </div>
</div>


<div className="relative size-14 md:size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="15"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <RiTailwindCssFill className="text-4xl md:text-5xl"/></span>
  </div>
</div>


<div className="relative size-14 md:size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="20"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <FaReact className="text-4xl md:text-5xl"/></span>
  </div>
</div>


    </div>
    </div>


    <div className="rounded-xl bg-[#272728] p-4 text-center shadow-xl md:hover:scale-105 translate-all duration-300">
    
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Languages</h1>
      <div className="flex flex-auto gap-5 md:gap-10">


      <div className="relative size-14 md:size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="35"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <RiJavascriptFill className="text-4xl md:text-5xl"/></span>
  </div>
</div>


<div className="relative size-14 md:size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="40"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <FaPython className="text-4xl md:text-5xl"/></span>
  </div>
</div>


<div className="relative size-14 md:size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="20"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <BiLogoCPlusPlus className="text-4xl md:text-5xl"/></span>
  </div>
</div>


    </div>
    
</div>



</div>

<div className="rounded-xl mt-5 bg-[#272728] p-4 text-center shadow-xl md:hover:scale-105 translate-all duration-300">
    
      <h1 className="text-darken  text-xl font-medium lg:px-14">Others</h1>
      <div className="flex  gap-5 md:gap-10">


      <div className="relative size-20 ">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="25"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <FaGit  className=" text-3xl md:text-5xl"/></span>
  </div>
</div>


<div className="relative size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="15"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <BiLogoPostgresql  className=" text-3xl md:text-5xl"/></span>
  </div>
</div>


<div className="relative size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="15"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <BiLogoFlask  className=" text-3xl md:text-5xl"/></span>
  </div>
</div>

<div className="relative size-20">
  <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
 
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
    
    <g className="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-yellow-600" strokeWidth="2" strokeDasharray="100" strokeDashoffset="25"></circle>
    </g>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white"> <SiMysql  className=" text-3xl md:text-5xl"/></span>
  </div>
</div>


    </div>
    
</div>



</motion.div>
    
  )
}

export default Skills