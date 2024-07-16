import React from "react";
import TimelineItem from "./TimelineItem";

const WhatIsIdeate: React.FC = () => {
  return (
    <div className="flex flex-col text-lg xs:text-2xl lg:text-4xl xl:text-6xl lg:pt-16 pt-8 px-4 lg:px-16">
      <p className="uppercase pb-8 lg:pb-16 align-middle mx-auto">
        What to Expect
      </p>
      <div className="relative flex flex-col w-full items-center justify-center">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white z-10"></div>
        <div className="z-20 p-8">
          <TimelineItem title='Testing Left' date='12 aug' direction='left' shape='circle' />
          <TimelineItem title='Testing Right' date='14 jan' direction='right' shape='triangle' />
          <TimelineItem title={<div>Semi-Finals <span className="text-base lg:text-3xl">and</span> Finals</div>} date='urmom' direction='right' shape='triangle' />
        </div>
      </div>
    </div>
  )
};

export default WhatIsIdeate;
