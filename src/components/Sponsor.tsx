import React from "react";

const Sponsor: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">With Support From</p>
      {/* TODO: Add Carousel */}
      <div className="overflow-x-scroll scrollbar-hide overflow-y-hidden lg:px-16 flex gap-x-4 max-w-[80vw]">
        <div className="h-24 min-w-24 lg:h-48 lg:w-48 rounded-md bg-gray-100" />
        <div className="h-24 min-w-24 lg:h-48 lg:w-48 rounded-md bg-gray-100" />
        <div className="h-24 min-w-24 lg:h-48 lg:w-48 rounded-md bg-gray-100" />
        <div className="h-24 min-w-24 lg:h-48 lg:w-48 rounded-md bg-gray-100" />
      </div>
    </div>
  );
};

export default Sponsor;
