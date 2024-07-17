import React from "react";

const Prizes: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-4xl lg:text-7xl lg:pt-16 pt-8 pb-12 gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">Prizes</p>
      <div className="flex flex-col lg:flex-row gap-x-2 lg:gap-x-4">
        <div className="flex flex-col items-center gap-y-8 lg:hidden mb-8">
          <img
            src="../prizes/1st_place.png"
            alt="1st Place"
            className="w-48 md:w-96 object-contain align-start"
          />
          {/* <div className="rounded-2xl bg-gray-100 w-24 h-16 xs:h-32 xs:w-60 lg:h-36 lg:w-72 xl:w-96 xl:h-48" />
          <p>1st</p> */}
        </div>
        <div className="flex flex-col items-center gap-y-8 lg:mt-16">
          <img
            src="../prizes/2nd_place.png"
            alt="2nd Place"
            className="w-48 md:w-96 object-contain align-start"
          />
          {/* <div className="rounded-2xl bg-gray-100 w-24 h-16 xs:h-32 xs:w-60 lg:h-36 lg:w-72 xl:w-96 xl:h-48" />
          <p>2nd</p> */}
        </div>
        <div className="flex-col items-center hidden lg:flex">
          <img
            src="../prizes/1st_place.png"
            alt="1st Place"
            className="w-48 md:w-96 object-contain align-start"
          />
          {/* <div className="rounded-2xl bg-gray-100 w-24 h-16 xs:h-32 xs:w-60 lg:h-36 lg:w-72 xl:w-96 xl:h-48" />
          <p>1st</p> */}
        </div>
        <div className="flex flex-col items-center gap-y-8 lg:mt-16">
          <img
            src="../prizes/3rd_place.png"
            alt="3rd Place"
            className="w-48 md:w-96 object-contain align-start"
          />
          {/* <div className="rounded-2xl bg-gray-100 w-24 h-16 xs:h-32 xs:w-60 lg:h-36 lg:w-72 xl:w-96 xl:h-48" />
          <p>3rd</p> */}

          {/* and more */}
        </div>
      </div>
          <div className="items-center justify-center text-center">
            <p className="text-base lg:text-4xl uppercase mb-10">
              And more prizes to be won!
            </p>
            <p className="text-base lg:text-4xl uppercase">
              Opportunities
            </p>
            <p className="text-sm md:text-base lg:text-2xl font-poppins">
              <ul className="list-disc text-left pl-5">
                <li key='1' className="text-sm md:text-base lg:text-2xl font-poppins font-thin">
                  Greenlane for Top 3 NUS teams to incubate their solution with <span className="font-semibold">THE HANGAR</span>
                </li>
                <li key='2' className="text-sm md:text-base lg:text-2xl font-poppins font-thin">
                  Greenlane for Top 3 NUS teams to pitch for Venture Initiation Programme (VIP) S$10000 grant
                </li>
              </ul>
            </p>
          </div>
    </div>
  );
};

export default Prizes;
