import React from "react";
import TimelineItem from "./TimelineItem";
import OptionalWorkshops from './OptionalWorkshops';
import Accordion from "./Accordian";

const Workshops: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-lg xs:text-2xl lg:text-3xl xl:text-5xl lg:pt-16 pt-8 px-2 lg:px-16">
      <span className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        Workshops
      </span>
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 bg-white z-0 rounded-md" />
        <div className="relative flex flex-col w-3/4 items-center justify-center">
          <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 bg-[#1C34D4] z-20" />
          <div className="z-30 p-2 lg:p-8">
            <TimelineItem 
              title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">CAD (Solidworks)</span>} 
              date='21 Aug 2024' 
              shape='triangle' 
              textColor='blue'
              />
            <TimelineItem 
              title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">C++</span>} 
              date='22 Aug 2024' 
              shape='square' 
              textColor='blue'
              />
            <TimelineItem 
              title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Arduino Workshop</span>} 
              date='23 Aug 2024' 
              shape='circle' 
              textColor='blue'
              />
            <TimelineItem 
              title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl leading-tight">Electro Mechanical Workshop</span>} 
              date='24 Aug 2024' 
              shape='triangle' 
              textColor='blue'
              />
            <TimelineItem 
              title={<span className="text-sm xs:text-lg sm:text-xl lg:text-4xl">Business Model & Pitching</span>} 
              date='06 Sep 2024' 
              shape='square' 
              textColor='blue'
              />
          </div>
        </div>
      </div>
      <Accordion 
        title='MORE'
        content={
          <OptionalWorkshops />
        }
      />
    </div>
  )
};

export default Workshops;
