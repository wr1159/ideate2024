import React from 'react';

const DarkenOnHover: React.FC<{ imageUrl: string; text: string }> = ({ imageUrl, text }) => {
  return (
    <div className="relative group rounded-square-mask rounded-md p-3">
      <img
        src={imageUrl}
        alt="Example"
        className="rounded-md transition duration-300 transform group-hover:brightness-50 masked-image"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-white text-center text-sm md:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default DarkenOnHover;
