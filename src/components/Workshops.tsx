import React from "react";
import TimelineItem from "./TimelineItem";

const Workshops: React.FC = () => {
  return (
    <div className="flex flex-col text-lg xs:text-2xl lg:text-3xl xl:text-5xl lg:pt-16 pt-8 px-2 lg:px-16 leading-tight">
      <p className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        Workshops
      </p>
      <div className="relative flex flex-col w-full items-center justify-center">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white z-10"></div>
        <div className="z-20 p-2 lg:p-8">
          <TimelineItem title='CAD (Solidworks)' date='21 Aug 2024' direction='left' shape='triangle' />
          <TimelineItem title='C++' date='22 Aug 2024' direction='right' shape='square' />
          <TimelineItem title='Arduino Workshop' date='23 Aug 2024' direction='left' shape='circle' />
          <TimelineItem title='Electro Mechanical Workshop' date='24 Aug 2024' direction='right' shape='triangle' />
          <TimelineItem title='VR App Development / Vacuum Forming' date='26 Aug 2024' direction='left' shape='square' />
          <TimelineItem title='Robotics Simulation / Conventional Lathe' date='27 Aug 2024' direction='right' shape='circle' />
          <TimelineItem title='Robotics Simulation / Conventional Milling' date='28 Aug 2024' direction='left' shape='triangle' />
          <TimelineItem title='PCB Design' date='29 Aug 2024' direction='right' shape='square' />
          <TimelineItem title='Business Model & Pitching' date='06 Sep 2024' direction='left' shape='circle' />
        </div>
      </div>
    </div>
  )
};

export default Workshops;
