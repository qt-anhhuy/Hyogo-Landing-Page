"use client"

import React, { useState } from "react";

type QuestionBoxProps = {
  title: string;
  text: string;
};

const QuestionBox = ({ title, text }: QuestionBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col">
      <div 
        className={`pl-[1.81rem] py-1 pr-5 justify-between items-center flex flex-row shadow-xl cursor-pointer transition-colors duration-300 ${
          isExpanded 
            ? "bg-[#B4E3EF]" 
            : "bg-[#029FC8]"
        }`}
        onClick={toggleExpand}
      >
        <div className={`text-xl font-semibold transition-colors duration-300 ${
          isExpanded 
            ? "text-[#34414D]" 
            : "text-white"
        }`}>
          {title}
        </div>
        <img 
          src={isExpanded ? "/images/icons/arrow-dark.svg" : "/images/icons/arrow-light.svg"}
          alt="icon" 
          className={`transform transition-all duration-300 -rotate-90 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      <div 
        className={`pl-8 pr-[25px] bg-white text-lg font-normal leading-loose mr-6 shadow-xl transition-all duration-300 overflow-hidden ${
          isExpanded 
            ? "max-h-[500px] py-[26px] opacity-100" 
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default QuestionBox;
