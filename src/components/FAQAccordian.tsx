import React, { useState } from 'react';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md transition duration-500 flex justify-between items-center w-full p-4 text-left focus:outline-none"
        onClick={toggleAccordion}
        style={{ minHeight: '48px' }} // Ensure consistent height
      >
        <span className="text-sm lg:text-2xl">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="text-xs lg:text-xl p-4 bg-white bg-opacity-10 rounded-md">
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
