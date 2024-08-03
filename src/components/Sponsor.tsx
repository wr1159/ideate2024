import React from "react";

const Sponsor: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">With Support From</p>
      <p className="text-2xl lg:text-4xl uppercase mb-4">Organising Partner</p>
        <img
          src="../sponsors/NUS_Enterprise.png"
          alt="NUS Enterprise"
          className="w-64 xl:w-96 rounded-md p-4 bg-white "
        />
      <p className="text-2xl lg:text-4xl uppercase mt-8">Sponsored By:</p>
      <div className="grid lg:px-16 gap-4 grid-cols-1 md:grid-cols-2 items-center bg-white rounded-md p-4">
        <img
          src="../sponsors/JDF.jpg"
          alt="James Dyson Foundation"
          className="w-64 xl:w-96 rounded-md p-4 bg-white "
        />
        <img
          src="../sponsors/Science_Park_Logo.png"
          alt="Science Park"
          className="w-64 xl:w-96 rounded-md p-4 bg-white "
        />
      </div>
      <p className="text-2xl lg:text-4xl uppercase mb-4">Key Workshop Partner</p>
        <img
          src="../sponsors/DID_Logo.png"
          alt="Division of Industrial Design"
          className="w-64 xl:w-96 rounded-md p-4 bg-white "
        />

    </div>
  );
};

export default Sponsor;
