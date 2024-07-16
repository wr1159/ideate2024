import React from "react";
import TimelineItem from "./TimelineItem";

const WhatIsIdeate: React.FC = () => {
  return (
    <div className="flex flex-col text-lg xs:text-2xl lg:text-4xl xl:text-6xl lg:pt-16 pt-8 px-4 lg:px-16">
      <p className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        Workshops
      </p>
      <div className="relative flex flex-col w-full items-center justify-center">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white z-10"></div>
        <div className="z-20 p-8">
          <TimelineItem title='CAD (Solidworks)' date='21 Aug 2024' direction='left' shape='circle' />
          <TimelineItem title='C++' date='22 Aug 2024' direction='right' shape='triangle' />
          <TimelineItem title='Arduino Workshop' date='23 Aug 2024' direction='left' shape='square' />
          <TimelineItem title='Electro Mechanical Workshop' date='24 Aug 2024' direction='right' shape='circle' />
          <TimelineItem title='Business Model & Pitching' date='06 Sep 2024' direction='left' shape='triangle' />
        </div>
      </div>
    </div>
  )
};

export default WhatIsIdeate;
