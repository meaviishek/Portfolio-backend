import { FaInstagram,FaGithub,FaLinkedinIn  ,FaWhatsapp } from "react-icons/fa";
import{FaXTwitter} from "react-icons/fa6"
import { MdMarkEmailUnread} from "react-icons/md";
import{profile} from "./components";
import { NavLink,Outlet } from "react-router-dom";
import  { useEffect, useState } from 'react';

import axios from 'axios';


function generateId() {
  return crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
}


function App() {
  const [viewCount, setViewCount] = useState(0);
  const [uniqueCount, setUniqueCount] = useState(0);

  useEffect(() => {
      let userId = localStorage.getItem('userId');
      if (!userId) {
          userId = generateId();
          localStorage.setItem('userId', userId);
      }

      async function fetchViewCounts() {
          try {
              const response = await axios.post('https://portfolio-backend-delta-ochre.vercel.app/views', { userId });
              setViewCount(response.data.totalViews);
              setUniqueCount(response.data.uniqueVisitors);
          } catch (error) {
              console.error('Error fetching view counts:', error);
          }
      }

      fetchViewCounts();
  }, []);

  return (
    
     <div className=" text-gray-200  flex flex-col   ">
      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row">
        
          <div className="md:w-1/5 bg-[#1E1E1F] shadow-md h-fit border-[1px] border-[#2B2B2C] shadow-[#1d1d1dac] p-4 rounded-xl">
            <div className="flex flex-col items-center">
            
              <img
                src={profile}
                alt="Profile"
                loading="lazy"
                className="ring-4 ring-[#2B2B2C] p-1  shadow-lg shadow-slate-900 w-24 h-24 translate-all duration-500 rounded-full mb-4 hover:scale-110"
              />
              <h1 className="text-xl font-semibold">Abhishek Kumar</h1>
              <p className="text-gray-400 text-xs">Web Developer, Datascience</p>
              <div className=" flex mt-5  bg-[#2B2B2C] p-2 rounded-xl shadow-slate-900 shadow-sm">
              <a href="https://www.instagram.com/me_aviishek"> <FaInstagram size="23px" color="CA8A04"  className="mx-2 transition-all duration-300 hover:scale-125" /></a> 
             <a href="mailto:meaviishek@gmail.com"><MdMarkEmailUnread size="23px" color="CA8A04" className="mx-2 transition-all duration-300 hover:scale-125"/></a> 
             <a href="https://github.com/meaviishek">   <FaGithub size="23px" color="CA8A04" className="mx-2 transition-all duration-300 hover:scale-125"/></a> 
             <a href="https://linkedin.com/in/meaviishek"><FaLinkedinIn size="23px" color="#CA8A04" className="mx-2 transition-all duration-300 hover:scale-125"/></a> 
             <a href="https://twitter.com/meaviishek"> <FaXTwitter size="23px" color="#CA8A04" className="mx-2 transition-all duration-300 hover:scale-125"/></a> 
             < a href="https://wa.link/qyx09o"> <FaWhatsapp size="23px" color="#CA8A04" className="mx-2 transition-all duration-300 hover:scale-125"/></a> 
              </div>
              <hr className="h-px my-4 w-full border-0 bg-[#2B2B2C]"/> 
              <div className="flex space-x-4 font-semibold text-sm">
              <div className=" px-3  bg-[#2B2B2C] p-2 rounded-xl shadow-slate-900 shadow-sm">
              <h3 className="">Total Views: {viewCount}</h3>
              </div>
              <div className="px-3  bg-[#2B2B2C] p-2 rounded-xl shadow-slate-900 shadow-sm">
              <h3>New Visitors: {uniqueCount}</h3>
              </div>
              </div>
              <hr className="h-px my-4 w-full border-0 bg-[#2B2B2C]"/> 
               <h1 className="text-[18px] font-semibold font-sans">Skills</h1>
               
            </div>
               <div className="">
               <div className="mb-1 text-xs font-medium dark:text-white">HTML</div>
               <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
               <div className="bg-yellow-600 h-1 rounded-full" style={{width: "95%"}}></div>
</div>
<div className="mb-1 mt-2 text-xs font-medium dark:text-white">C++</div>
               <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
               <div className="bg-yellow-600 h-1 rounded-full" style={{width: "65%"}}></div>
</div>
<div className="mb-1 mt-2 text-xs font-medium dark:text-white">Python</div>
               <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
               <div className="bg-yellow-600 h-1 rounded-full" style={{width: "60%"}}></div>
</div>
<div className="mb-1 mt-2  text-xs font-medium dark:text-white">Javascript</div>
               <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
               <div className="bg-yellow-600 h-1 rounded-full" style={{width: "70%"}}></div>
</div>
<div className="mb-1 mt-2  text-xs font-medium dark:text-white">Ai/ML</div>
               <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
               <div className="bg-yellow-600 h-1 rounded-full" style={{width: "30%"}}></div>
</div>

               </div>
                


          </div>
       
          <div className="md:w-4/5 md:ml-4 mt-6 md:mt-0">
            <div className="bg-[#1E1E1F] border-[1px] border-[#2B2B2C] p-4 rounded-xl">
              <div className="flex justify-between items-center font-semibold border-b border-[#2B2B2C] pb-4 mb-4">
               
                <nav>
                  <NavLink to='/'  className={({isActive})=>`mx-[11px] md:mx-4 ${isActive? 'text-yellow-600 bg-[#2B2B2C] shadow-md p-2 rounded-lg':'hover:text-[#a2a1a1] text-[#dcdbdb]'} `}>
                    About
                  </NavLink>
                  <NavLink to='/project'  className={({isActive})=>`mx-[11px] md:mx-4 ${isActive? 'text-yellow-600 bg-[#2B2B2C] shadow-md p-2 rounded-lg':'hover:text-[#a2a1a1] text-[#dcdbdb]'} `}>
                    Projects
                  </NavLink>
                  <NavLink to='/services' className={({isActive})=>`mx-[11px] md:mx-4 ${isActive? 'text-yellow-600 bg-[#2B2B2C] shadow-md p-2 rounded-lg':'hover:text-[#a2a1a1] text-[#dcdbdb]'} `}>
                    Services
                  </NavLink>
                  <NavLink to='/skills' className={({isActive})=>`mx-[11px] md:mx-4 ${isActive? 'text-yellow-600 bg-[#2B2B2C] shadow-md p-2 rounded-lg':'hover:text-[#a2a1a1] text-[#dcdbdb]'} `}>
                    Skills
                  </NavLink>
                  
                </nav>
              </div>
              <div className="mb-4">
             <Outlet/>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
