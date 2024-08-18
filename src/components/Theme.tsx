import React from "react";

const Theme: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl lg:text-7xl lg:pt-16 pt-8 min-h-[50vh] pb-12 gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-4 lg:pb-8">Our Theme</p>
        <img 
          src="../theme/full_theme.png" 
          className='pb-10'
        />
      <div className="flex gap-x-4 lg:gap-x-16 pr-3">
        <img
          src="../theme/triangle_block.png"
          alt="Triangle Block"
          className="h-[19vw] w-[19vw]"
        />
        <img
          src="../theme/bulb_with_house.png"
          alt="Bulb With House"
          className="h-[21vw] w-[15vw] mr-4"
        />
        <img
          src="../theme/square_block.png"
          alt="Square Block"
          className="h-[14.5vw] w-[14.5vw]"
        />
      </div>
      <div className="text-center p-10">
        <p className="text-base lg:text-4xl uppercase p-10">
          What does "future home" mean?
        </p>
        <p className="font-poppins text-sm lg:text-2xl text-left">
          "Innovating the Ordinary" invites university students from Singapore to 
          envision and create innovative solutions that enhance everyday living. 
        </p>
        <p className="font-poppins text-sm lg:text-2xl pt-10 text-left">
          With the theme "Future Home Edition," participants will focus on transforming
          ordinary household tasks into streamlined, efficient processes through 
          mechatronic** systems. This competition aims to inspire creativity, foster 
          hands-on learning, and generate impactful ideas that address real-world 
          challenges within the home environment.
        </p>
        <p className="font-poppins text-xs lg:text-lg pt-10 text-right">
        **Mechatronics systems integrate mechanical systems with electronics and 
        software to create more functional and efficient products and processes. 
        </p>
      </div>
    </div>
  );
};

export default Theme;
