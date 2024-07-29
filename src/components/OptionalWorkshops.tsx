import React from "react";
import TimelineItem from "./TimelineItem";

const Workshops: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-lg xs:text-2xl lg:text-3xl xl:text-5xl lg:pt-16 pt-8 px-2 lg:px-16">
      <span className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        Optional Workshops
      </span>
      <div className="relative flex flex-col items-center">
        {/* white bg */}
      <div className="absolute inset-0 bg-white z-0 rounded-md"></div>
      <div className="relative flex flex-col w-3/4 items-center justify-center">
        {/* blue line */}
        <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 bg-[#1C34D4] z-20" />
        {/* workshops */}
        <div className="z-30 p-2 lg:p-8">
          <TimelineItem 
            title={<span className="text-xs xs:text-sm sm:text-base lg:text-2xl">VR App Development / Vacuum Forming</span>} 
            date= {<span className="text-xs xs:text-sm sm:text-base lg:text-2xl">26 Aug 2024</span>}
            shape='circle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-xs xs:text-sm sm:text-base lg:text-2xl">Robotics Simulation / Conventional Lathe</span>} 
            date= {<span className="text-xs xs:text-sm sm:text-base lg:text-2xl">27 Aug 2024</span>}
            shape='triangle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-xs xs:text-sm sm:text-base lg:text-2xl">PCB Design / Conventional Milling</span>} 
            date= {<span className="text-xs xs:text-sm sm:text-base lg:text-2xl">28 Aug 2024</span>}
            shape='square' 
            textColor='blue'
            />
        </div>
      </div>
      </div>
    </div>
  )
};

export default Workshops;
