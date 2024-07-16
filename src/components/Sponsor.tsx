import React from "react";

const Sponsor: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">With Support From</p>
      <div className="grid lg:px-16 gap-4 grid-cols-1 xl:grid-cols-3 items-center bg-white rounded-md">
        <img
          src="../sponsors/JDF.jpg"
          alt="James Dyson Foundation"
          className="w-48 xl:w-64 rounded-md p-4 bg-white "
        />
        <img
          src="../sponsors/NUS_Enterprise.png"
          alt="NUS Enterprise"
          className="w-48 xl:w-64 rounded-md p-4 bg-white "
        />
        <img
          src="../sponsors/Science_Park_Logo.png"
          alt="Science Park"
          className="w-48 xl:w-64 rounded-md p-4 bg-white "
        />
      </div>
    </div>
  );
};

export default Sponsor;
