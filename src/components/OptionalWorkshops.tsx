import React from "react";
import TimelineItem from "./TimelineItem";

const Workshops: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-lg xs:text-2xl lg:text-3xl xl:text-5xl lg:pt-16 pt-8 ">
      <span className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        Optional 
      </span>
      <span className="pb-8 lg:pb-16 align-middle font-poppins text-center mx-auto text-sm lg:text-xl">
        Note: due to overwhelming demand, we have made some workshops optional on a first come first serve basis
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
            title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">CAD (Fusion360)</span>} 
            date= {<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">19 Aug 2024</span>}
            shape='square' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">C++</span>} 
            date= {<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">20 Aug 2024</span>}
            shape='circle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">VR App Development</span>} 
            date= {<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">22 Aug 2024</span>}
            shape='triangle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Soldering</span>} 
            date= {<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">23 Aug 2024</span>}
            shape='square' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl leading-tight">Electro Mechanical Workshop</span>} 
            date= {<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">23 Aug 2024</span>}
            shape='circle' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">PCB Design</span>} 
            date= {<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">24 Aug 2024</span>}
            shape='square' 
            textColor='blue'
            />
          <TimelineItem 
            title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Arduino & ESP32 Workshop</span>} 
            date= {<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">26 Aug 2024</span>}
            shape='triangle' 
            textColor='blue'
            />
        </div>
      </div>
      </div>
    </div>
  )
};

export default Workshops;
