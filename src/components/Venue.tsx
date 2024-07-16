import React from "react";
import VenueItem from './VenueItem';

const Sponsor: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">
        Venues <span className="text-base lg:text-2xl">and</span> Facilities
      </p>
      <div className="grid lg:px-16 gap-4 max-w-[80vw] grid-cols-1 xl:grid-cols-3">
        <VenueItem imageUrl="../venues/idp_hub.png" text='IDP Hub' />
        <VenueItem imageUrl="../venues/ascent.png" text='Ascent @ SciencePark' />
        <VenueItem imageUrl="../venues/electronics_lab.png" text='Electronics Lab @ E2A' />
      </div>
    </div>
  );
};

export default Sponsor;
