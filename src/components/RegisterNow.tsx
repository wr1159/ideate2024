import React from "react";

const Sponsor: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <a
        className="items-center flex justify-center py-16 lg:py-28 group"
        href="https://instagram.com/nusidp"
        target="_blank"
      >
        <img
          src="../registration/lit_bulb_head.png"
          alt="Lit Bulb Head"
          className="h-48 lg:min-h-72 grayscale group-hover:grayscale-0 absolute transition-all"
        />
        <p className="z-40 lg:text-3xl text-base">Register Now</p>
      </a>
      <img
        src="../registration/bulb_screw.png"
        alt="Bulb Screw"
        className="h-24 lg:h-48"
      />
      <p className="uppercase pb-8 lg:pb-16">See You There</p>
    </div>
  );
};

export default Sponsor;
