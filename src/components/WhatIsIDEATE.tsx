import React from "react";

const WhatIsIdeate: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">What is IDEATE?</p>
      <div className="flex">
        <p className="place-self-start text-sm md:text-base lg:text-2xl font-poppins">
        "Innovating the Ordinary" is the identity theme of our competition series, 
        aimed at challenging university students in Singapore to envision and 
        create innovative solutions that enhance everyday living. 
        </p>
        <img src="../theme/triangle_block.png" alt="Triangle block" className="h-24 lg:h-48 lg:ml-8" />
      </div>
      <div className="flex text-right">
        <img
          src="../summary/people.png"
          alt="People participating"
          className="w-40 h-24 lg:w-80 lg:h-48"
        />
        <p className="place-self-start text-sm md:text-base lg:text-2xl font-poppins">
        Each year, participants will focus on transforming ordinary tasks into 
        streamlined, efficient processes through mechatronic systems. This theme 
        encourages creativity, hands-on learning, and the development of impactful 
        ideas that address real-world challenges in daily life.
        </p>
      </div>
    </div>
  );
};

export default WhatIsIdeate;
