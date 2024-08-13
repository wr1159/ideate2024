import React from "react";

const Sponsor: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <a
        className="items-center flex justify-center py-16 lg:py-28 group"
        // href="https://docs.google.com/forms/d/e/1FAIpQLSeuCOJHRSzdpyS-YuUZS0kTl_YUQGG8eLMc9t0fHQrn9va7Wg/viewform?usp=sf_link"
        target="_blank"
      >
        <img
          src="../registration/lit_bulb_head.png"
          alt="Lit Bulb Head"
          className="h-48 lg:min-h-72 lg:grayscale group-hover:grayscale-0 absolute transition-all"
        />
        <div className="flex flex-col items-center z-40">
          <p className="z-40 lg:text-3xl text-base">Signups Closed</p>
          {/* <p className="z-40 lg:text-xl text-sm"></p> */}
        </div>
      </a>
      <img
        src="../registration/bulb_screw.png"
        alt="Bulb Screw"
        className="h-16 lg:h-28 grayscale lg:grayscale-0"
      />
      <p className="uppercase pb-8  lg:pb-16">See You There</p>
    </div>
  );
};

export default Sponsor;
