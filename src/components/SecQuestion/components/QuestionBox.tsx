import React from "react";
type QuestionBoxProps = {
  title: string;
  text: string;
};
const QuestionBox = ({ title, text }: QuestionBoxProps) => {
  return (
    <div className="flex flex-col">
      <div className="pl-[1.81rem] py-1 pr-5 bg-blue-quaternary justify-between items-center flex flex-row shadow-xl">
        <div className=" text-black-text text-xl font-semibold ">{title}</div>
        <img src={"/images/icons/icon-arrow.svg"} alt="icon" />
      </div>
      <div className="pl-8 pr-[25px] py-[26px] bg-white justify-end items-center text-black-text text-lg font-normal leading-loose mr-6 shadow-xl">
        {text}
      </div>
    </div>
  );
};

export default QuestionBox;
