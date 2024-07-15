import React from 'react';


const Hero: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center"
    >
      <div>
        <div className="flex items-center gap-x-4">
          <a href="https://instagram.com/nusidp">
            <img
              src="../title/ig_button.png"
              alt="Instagram button"
              className="h-8 md:h-12 lg:h-20 align-start"
            />
          </a>
          <a href="https://instagram.com/nusidp">
            <img
              src="../title/mail_button.png"
              alt="Instagram button"
              className="h-10 md:h-16 lg:h-28"
            />
          </a>
        </div>
        <img src="../title/title_theme.png" alt="Hero" className="min-w-96" />
      </div>
    </div>
  );
};

export default Hero;