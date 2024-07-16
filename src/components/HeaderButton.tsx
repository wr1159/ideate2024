import React from 'react';
import { Link } from 'react-scroll';

type ButtonProps = {
  buttonName: string;
  buttonId: string;
};

const HeaderButton: React.FC<ButtonProps> = ({ buttonName, buttonId }) => {
  return (
    <div className="text-xs md:text-sm lg:text-lg text-center uppercase">
      <Link
        to={buttonId}
        smooth={true}
        duration={1000}
        className="cursor-pointer px-1 py-1 hover:bg-gray-700 rounded transition duration-300"
      >
        {buttonName}
      </Link>
    </div>
  );
};

export default HeaderButton;