import React from 'react';


const Intro: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-x-4 text-7xl lg:pt-16 pt-8"
    >
      <p className='max-w-[75vw] place-self-start'>A xx something of xx of somethign design and engineering</p>
      <div className='bg-gray-100 text-gray-100 rounded-md w-96 h-96 place-self-end mr-8'/>
    </div>
  );
};

export default Intro;