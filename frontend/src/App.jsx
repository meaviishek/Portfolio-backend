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
      const cachedViewCount = localStorage.getItem('viewCount');
      const cachedUniqueCount = localStorage.getItem('uniqueCount');
      
      if (cachedViewCount && cachedUniqueCount) {
          setViewCount(parseInt(cachedViewCount, 10));
          setUniqueCount(parseInt(cachedUniqueCount, 10));
      }
      async function fetchViewCounts() {
          try {
              const response = await axios.post('https://portfolio-backend-delta-ochre.vercel.app/views', { userId });
              setViewCount(response.data.totalViews);
              setUniqueCount(response.data.uniqueVisitors);

        localStorage.setItem('viewCount', response.data.totalViews);
        localStorage.setItem('uniqueCount', response.data.uniqueVisitors);
          } catch (error) {
              console.error('Error fetching view counts:', error);
          }
      }

      fetchViewCounts();
  }, []);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setLoaded(true);
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
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 font-semibold text-sm text-white">
      {/* Views */}
      <div className="flex items-center px-5 py-2 bg-gradient-to-r from-[#1E1E1F] to-[#2e2e30] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform   w-full sm:w-1/2">
        <div className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7.305 4.5 3.417 7.521 1.5 12c1.917 4.479 5.805 7.5 10.5 7.5s8.583-3.021 10.5-7.5c-1.917-4.479-5.805-7.5-10.5-7.5zm0 12c-2.481 0-4.5-2.019-4.5-4.5S9.519 7.5 12 7.5 16.5 9.519 16.5 12s-2.019 4.5-4.5 4.5zm0-7.5a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </div>
        <div className="flex flex-row items-center space-x-2 text-center">
  <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-400 uppercase tracking-wide">Views</h3>
  <span className="text-sm sm:text-lg md:text-xl font-bold text-yellow-600">{viewCount}</span>
</div>


      </div>

      {/* Unique Visitors */}
      <div className="flex items-center px-5 py-2 bg-gradient-to-r from-[#1E1E1F] to-[#2e2e30] rounded-lg shadow-md  hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform   w-full sm:w-1/2">
        <div className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c1.72 0 3.112-1.392 3.112-3.112S13.72 5.776 12 5.776s-3.112 1.392-3.112 3.112S10.28 12 12 12zm0-4.776a1.664 1.664 0 110 3.328 1.664 1.664 0 010-3.328zM12 14.224c-4.12 0-6.92 2.8-6.92 6.92 0 .608.496 1.104 1.104 1.104h11.632a1.104 1.104 0 001.104-1.104c0-4.12-2.8-6.92-6.92-6.92zm-4.832 6.448c.312-2.696 2.552-4.832 4.832-4.832s4.52 2.136 4.832 4.832H7.168z" />
          </svg>
        </div>
        <div className="flex flex-row items-center space-x-2 text-center">
  <h3 className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wide">Unique Visitors</h3>
  <span className="text-base sm:text-lg md:text-xl font-extrabold text-yellow-600">{uniqueCount}</span>
</div>


      </div>
    </div>
              <hr className="h-px my-4 w-full border-0 bg-[#2B2B2C]"/> 
               <h1 className="text-[18px] font-semibold font-sans">Skills</h1>
               
            </div>
            <div>
      <div className="mb-2 text-xs font-medium dark:text-white">Node/Express</div>
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
        <div className="bg-yellow-600 h-1 rounded-full animate-progress" style={{ width: "50%" }}></div>
      </div>

      <div className="mb-2 mt-2 text-xs font-medium dark:text-white">C++</div>
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
        <div className="bg-yellow-600 h-1 rounded-full animate-progress" style={{ width: "65%" }}></div>
      </div>

      <div className="mb-2 mt-2 text-xs font-medium dark:text-white">Python</div>
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
        <div className="bg-yellow-600 h-1 rounded-full animate-progress" style={{ width: "60%" }}></div>
      </div>

      <div className="mb-2 mt-2 text-xs font-medium dark:text-white">Javascript</div>
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
        <div className="bg-yellow-600 h-1 rounded-full animate-progress" style={{ width: "70%" }}></div>
      </div>

      <div className="mb-2 mt-2 text-xs font-medium dark:text-white">AI/ML/Data Science</div>
      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-[#383838]">
        <div className="bg-yellow-600 h-1 rounded-full animate-progress" style={{ width: "30%" }}></div>
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
