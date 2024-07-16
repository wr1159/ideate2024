import React from 'react';
import HeaderButton from './HeaderButton'; // Correct import for HeaderButton

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-around z-50">
      <nav className="overflow-auto md:overflow-hidden flex gap-4">
        <HeaderButton buttonName='Home' buttonId='hero' />
        <HeaderButton buttonName='About' buttonId='what-is-ideate' />
        <HeaderButton buttonName='Sponsors' buttonId='sponsor' />
        <HeaderButton buttonName='Theme' buttonId='theme' />
        <HeaderButton buttonName='Prizes' buttonId='prizes' />
        <HeaderButton buttonName='Timeline' buttonId='timeline2' />
        <HeaderButton buttonName='Workshops' buttonId='workshops' />
        <HeaderButton buttonName='Venue' buttonId='venue' />
        <HeaderButton buttonName='Register' buttonId='register-now' />
      </nav>
    </header>
  );
};

export default Header;
