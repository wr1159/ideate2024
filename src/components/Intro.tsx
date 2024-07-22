import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-6xl lg:pt-16 pt-8 min-h-[50vh] px-4 lg:px-8">
      <p className="max-w-[75vw] place-self-start">
        An annual makeathon organised by {" "}
        <a
          className="underline text-gray-300 hover:text-white"
          href="https://cde.nus.edu.sg/edic/idp/"
          target="_blank"
        >
          NUS Innovation and Design Programme (iDP){" "}
        </a>
        Student Club
      </p>
      <img
        src="../theme/bulb_with_house.png"
        alt="Innovation & Design Programme Students Club Logo"
        className="h-48 lg:-mt-10 lg:h-96 place-self-end"
      />
    </div>
  );
};

export default Intro;
