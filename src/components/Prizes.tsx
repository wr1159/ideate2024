import React from "react";

const Prizes: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">Prizes</p>
      <div className="flex gap-x-4 lg:gap-x-16">
        <div className="flex flex-col items-center gap-y-8 mt-16">
          <div className="rounded-2xl bg-gray-100 w-24 h-16 xs:h-32 xs:w-60 lg:w-96 lg:h-48" />
          <p>2nd</p>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <div className="rounded-2xl bg-gray-100 w-24 h-16 xs:h-32 xs:w-60 lg:w-96 lg:h-48" />
          <p>1st</p>
        </div>
        <div className="flex flex-col items-center gap-y-8 mt-16">
          <div className="rounded-2xl bg-gray-100 w-24 h-16 xs:h-32 xs:w-60 lg:w-96 lg:h-48" />
          <p>3rd</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
