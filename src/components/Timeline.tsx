import React from "react";

const WhatIsIdeate: React.FC = () => {
  return (
    <div className="text-2xl lg:text-6xl lg:pt-16 pt-8 px-4 lg:px-16 grid-cols-3 grid">
      <p className="uppercase pb-8 lg:pb-16 col-span-3 align-middle mx-auto">
        What to Expect
      </p>
      {/* top of line */}
      <div />
      <div className="items-center flex flex-col">
        <div className="w-1 h-4 bg-white" />
      </div>
      <div />
      {/* Timeline item 1 */}
      <div className="flex flex-col">
        <p className="white-text-outline uppercase text-[#152cc5] text-base lg:text-3xl">
          17 Aug 2024
        </p>
        <p className="uppercase">Opening Day</p>
        <p className="mt-4 text-base lg:text-3xl">The day of opening</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="../timeline/timeline_circle.png"
          alt="Timeline Circle"
          className="w-10 h-10 lg:w-20 lg:h-20"
        />
        <div className="w-1 min-h-16 lg:min-h-24 bg-white h-full" />
      </div>
      <div />
      {/* Timeline item 2 */}
      <div />
      <div className="flex flex-col items-center">
        <img
          src="../timeline/timeline_triangle.png"
          alt="Timeline Triangle"
          className="w-10 h-10 lg:w-20 lg:h-20"
        />
        <div className="w-1 h-16 lg:h-24 bg-white" />
      </div>
      <div className="flex flex-col">
        <p className="white-text-outline uppercase text-[#152cc5] text-base lg:text-3xl">
          Week 1 - Week 2
        </p>
        <p className="uppercase">Workshops</p>
      </div>
      {/* Timeline item 3 */}
      <div className="flex flex-col">
        <p className="white-text-outline uppercase text-[#152cc5] text-base lg:text-3xl">
          31 Aug 2024
        </p>
        <p className="uppercase">Preliminary Design Review</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="../timeline/timeline_square.png"
          alt="Timeline Square"
          className="w-10 h-10 lg:w-20 lg:h-20"
        />
        <div className="w-1 h-16 lg:h-24 bg-white" />
      </div>
      <div />
      {/* Timeline item 4 - semi finals and finals */}
      <div />
      <div className="flex flex-col items-center">
        <img
          src="../timeline/timeline_triangle.png"
          alt="Timeline Triangle"
          className="w-10 h-10 lg:w-20 lg:h-20"
        />
        <div className="w-1 h-16 lg:h-24 bg-white" />
      </div>
      <div className="flex flex-col">
        <p className="white-text-outline uppercase text-[#152cc5] text-base lg:text-3xl">
          Week 5 - Week 6
        </p>
        <p className="uppercase">
          Semi-Finals <span className="text-base lg:text-3xl">and</span> Finals
        </p>
      </div>
    </div>
  );
};

export default WhatIsIdeate;
