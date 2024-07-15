import React from 'react';


const Intro: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 min-h-[50vh] px-4 lg:px-8"
    >
      <p className='max-w-[75vw] place-self-start'>A xx something of xx of somethign design and engineering</p>
      <div className='bg-gray-100 rounded-md w-48 h-48 lg:w-96 lg:h-96 place-self-end'/>
    </div>
  );
};

export default Intro;