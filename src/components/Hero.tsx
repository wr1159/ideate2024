import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <img
          src="../title/title_theme.png"
          alt="Hero"
          className="min-w-48 md:min-w-96"
        />
    </div>
  );
};

export default Hero;
