import React from "react";
import TimelineItem from "./TimelineItem";

const WhatIsIdeate: React.FC = () => {
  return (
    <div className="flex flex-col text-lg xs:text-2xl lg:text-4xl xl:text-6xl lg:pt-16 pt-8 px-4 lg:px-16 leading-tight">
      <p className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        What to Expect
      </p>
      <div className="relative flex flex-col w-full items-center justify-center">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white z-10"></div>
        <div className="z-20 p-2 lg:p-8">
          <TimelineItem title='Opening Day' date='17 Aug 2024' direction='left' shape='circle' />
          <TimelineItem title='Workshops' date='Week 1 - Week 2' direction='right' shape='triangle' />
          <TimelineItem title='Preliminary Design Review' date='30 Aug 2024' direction='left' shape='square' />
          <TimelineItem title={<div>Semi-Finals <span className="text-base lg:text-3xl">and</span> Finals</div>} date='20 Sep 2024' direction='right' shape='circle' />
        </div>
      </div>
    </div>
  )
};

export default WhatIsIdeate;
