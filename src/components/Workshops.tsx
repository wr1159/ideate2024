import React from "react";
import TimelineItem from "./TimelineItem";

const Workshops: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-lg xs:text-2xl lg:text-3xl xl:text-5xl lg:pt-16 pt-8 px-2 lg:px-16 leading-tight">
      <p className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        Workshops
      </p>
      <div className="relative flex flex-col items-center">
      <div className="absolute inset-0 bg-white z-0 rounded-md"></div>
      <div className="relative flex flex-col w-3/4 items-center justify-center">
        <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 bg-[#1C34D4] z-20" />
        <div className="z-30 p-2 lg:p-8">
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">CAD (Solidworks)</p>} 
            date='21 Aug 2024' 
            shape='triangle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">C++</p>} 
            date='22 Aug 2024' 
            shape='square' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Arduino Workshop</p>} 
            date='23 Aug 2024' 
            shape='circle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Electro Mechanical Workshop</p>} 
            date='24 Aug 2024' 
            shape='triangle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">VR App Development / Vacuum Forming</p>} 
            date='26 Aug 2024' 
            shape='square' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Robotics Simulation / Conventional Lathe</p>} 
            date='27 Aug 2024' 
            shape='circle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Robotics Simulation / Conventional Milling</p>} 
            date='28 Aug 2024' 
            shape='triangle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">PCB Design</p>} 
            date='29 Aug 2024' 
            shape='square' 
            textColor='blue'
            />
          <TimelineItem 
            title={<p className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Business Model & Pitching</p>} 
            date='06 Sep 2024' 
            shape='circle' 
            textColor='blue'
            />
        </div>
      </div>
      </div>
    </div>
  )
};

export default Workshops;
