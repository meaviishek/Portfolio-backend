import { FaLaptopCode,FaPaintBrush,FaVideo} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
function Services() {
  return (
    <div>
    
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
      viewport={{ once: true }}  className="grid gap-14 md:grid-cols-3 md:gap-5 mt-10">
    <div className="rounded-xl bg-[#272728] p-6 text-center shadow-xl md:hover:scale-105 translate-all duration-300">
      <div
        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#272728] shadow-lg shadow-yellow-600/40 ">
       
    <FaLaptopCode size="23px" color="CA8A04"/>
      </div>
      <h1 className="text-darken mb-2 text-xl font-medium lg:px-14">Website Developement</h1>
      <p className="px-3 text-[#c4c2c2]">I specialize in crafting captivating websites, including stunning portfolio designs and dynamic static sites built with React, HTML, Tailwind and JavaScript with backend in node, express js, mongodb. Let's bring your online presence to life!</p>
    </div>
    <div data-aos-delay="150" className="rounded-xl bg-[#272728] p-6 text-center shadow-xl md:hover:scale-105 translate-all duration-300">
      <div
        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-[#272728] shadow-yellow-600/40 ">
         <FaPaintBrush size="23px" color="CA8A04" />
    
      </div>
      <h1 className="text-darken mb-2 text-xl font-medium lg:px-14 ">Graphics</h1>
      <p className="px-3 text-[#c4c2c2]">Creative graphic design services including logo creation, banner design, poster design, thumbnail creation, and professional photo editing. Elevate your brand with eye-catching visuals. Let's bring your vision to life!</p>
      <a href="https://www.instagram.com/fusion__graphics_/" target="blank">  <button className="bg-[#1E1E1F] mt-3 py-2 px-3 rounded-xl translate-all duration-700 border-[0.5px] border-[#3c3c40] shadow-md shadow-[#181818] hover:bg-[#131313]">View samples</button></a>
    </div>


    <div data-aos-delay="300" className="rounded-xl bg-[#272728] p-6 text-center shadow-xl md:hover:scale-105 translate-all duration-300">
      <div
        className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-[#272728] shadow-yellow-600/40 ">
       <FaVideo size="23px" color="CA8A04"/>
      </div>
      <h1 className="text-darken mb-2  text-xl font-medium lg:px-14">Video Editing</h1>
      <p className="px-3 text-[#c4c2c2]">Professional video editing services tailored to your needs. From basic cuts to advanced effects, we enhance your footage to captivate your audience and elevate your content to the next level.</p>
    </div>
  </motion.div>

</div>
   
  )
}

export default Services