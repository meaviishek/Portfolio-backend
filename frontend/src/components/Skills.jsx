import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaPython, FaGit } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoFlask, BiLogoCPlusPlus } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  // Define strokeDashoffset values for each icon
  const iconDashOffsets = {
    html: 30,
    tailwind: 50,
    react: 40,
    flask: 20,
    javascript: 60,
    python: 25,
    cpp: 45,
    git: 35,
    postgres: 55,
    mysql: 15,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4"
    >
      <div className="grid gap-8 lg:grid-cols-2 md:gap-10">
        
        {/* Frontend / Backend Section */}
        <div className="rounded-xl bg-[#272728] p-6 text-center shadow-xl transition-transform duration-300 hover:scale-105">
          <h1 className="text-xl font-medium text-gray-300 mb-4">Frontend / Backend</h1>
          <div className="flex justify-center gap-6 flex-wrap">
            <IconCard icon={<TiHtml5 className="text-5xl" />} strokeOffset={iconDashOffsets.html} />
            <IconCard icon={<RiTailwindCssFill className="text-5xl" />} strokeOffset={iconDashOffsets.tailwind} />
            <IconCard icon={<FaReact className="text-5xl" />} strokeOffset={iconDashOffsets.react} />
            <IconCard icon={<BiLogoFlask className="text-5xl" />} strokeOffset={iconDashOffsets.flask} />
          </div>
        </div>

        {/* Languages Section */}
        <div className="rounded-xl bg-[#272728] p-6 text-center shadow-xl transition-transform duration-300 hover:scale-105">
          <h1 className="text-xl font-medium text-gray-300 mb-4">Languages</h1>
          <div className="flex justify-center gap-6 flex-wrap">
            <IconCard icon={<RiJavascriptFill className="text-5xl" />} strokeOffset={iconDashOffsets.javascript} />
            <IconCard icon={<FaPython className="text-5xl" />} strokeOffset={iconDashOffsets.python} />
            <IconCard icon={<BiLogoCPlusPlus className="text-5xl" />} strokeOffset={iconDashOffsets.cpp} />
          </div>
        </div>

        {/* Others Section */}
        <div className="rounded-xl bg-[#272728] p-6 text-center shadow-xl transition-transform duration-300 hover:scale-105">
          <h1 className="text-xl font-medium text-gray-300 mb-4">Others</h1>
          <div className="flex justify-center gap-6 flex-wrap">
            <IconCard icon={<FaGit className="text-5xl" />} strokeOffset={iconDashOffsets.git} />
            <IconCard icon={<BiLogoPostgresql className="text-5xl" />} strokeOffset={iconDashOffsets.postgres} />
            <IconCard icon={<SiMysql className="text-5xl" />} strokeOffset={iconDashOffsets.mysql} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Component for individual icons
const IconCard = ({ icon, strokeOffset }) => (
  <div className="relative w-20 h-20 flex items-center justify-center">
    <svg
      className="absolute w-full h-full"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        className="stroke-current text-gray-700"
        strokeWidth="1"
      />
      <g className="origin-center -rotate-90 transform">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-yellow-600"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={strokeOffset} // Use the dynamic value here
        />
      </g>
    </svg>
    <div className="z-10">{icon}</div>
  </div>
);

export default Skills;
