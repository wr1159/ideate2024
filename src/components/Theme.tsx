import React from 'react';


const Theme: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 min-h-[50vh] pb-12 gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">Our Theme</p>
      <p className="text-base lg:text-4xl uppercase">
        TO BE RELEASED CLOSER TO COMPETITION DATE
      </p>
      <div className="flex gap-x-4 lg:gap-x-16">
        <img src="../theme/triangle_block.png" alt="Triangle Block" className="h-24 lg:h-60" />
        <img src="../theme/bulb_with_house.png" alt="Bulb With House" className="h-24 lg:h-60" />
        <img src="../theme/square_block.png" alt="Square Block" className="h-24 lg:h-60" />
      </div>
    </div>
  );
};

export default Theme;