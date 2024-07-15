import React from "react";

const WhatIsIdeate: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 min-h-[50vh] gap-y-8 px-4 lg:px-8">
      <p className="uppercase pb-8 lg:pb-16">What is IDEATE?</p>
      <div className="flex">
        <p className="place-self-start text-base lg:text-4xl">
          smth smth history of ideate, about the people behind it, about the
          purpose and other stuff to take up more space on the page
        </p>
        <div className="bg-gray-500 w-48 h-24 lg:w-96 lg:h-48 mr-8" />
      </div>
      <div className="flex text-right">
        <img
          src="../summary/people.png"
          alt="People participating"
          className="w-40 h-24 lg:w-80 lg:h-48"
        />
        <p className="place-self-start text-base lg:text-4xl">
          now we change things up by having stuff on the right instead,and
          finally a kind message to participants on what we wish they can take
          away from this event
        </p>
      </div>
    </div>
  );
};

export default WhatIsIdeate;
