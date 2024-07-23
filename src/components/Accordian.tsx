import React, { useState } from 'react';

interface AccordionProps {
  title: string;
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
        className="cursor-pointer hover:bg-gray-700 hover:bg-opacity-30 rounded-md transition duration-300 flex justify-center items-center w-full p-4 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-700 bg-opacity-30 rounded-md">
          <span>{content}</span>
        </div>
      )}
    </div>
  );
};

export default Accordion;
