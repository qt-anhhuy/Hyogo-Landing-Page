import React from "react";
type FooterColProps = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5?: string;
  text6?: string;
};
const FooterCol = ({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}: FooterColProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-[29px] ">
      <p className="text-2xl sm:text-[25px] font-bold font-din text-blue-secondary leading-[30px]">
        {title}
      </p>
      <p className="text-black-text text-lg sm:text-xl font:medium sm:font-normal">
        {text1}
      </p>
      <p className="text-black-text text-lg sm:text-xl font:medium sm:font-normal">
        {text2}
      </p>
      <p className="text-black-text text-lg sm:text-xl font:medium sm:font-normal">
        {text3}
      </p>
      <p className="text-black-text text-lg sm:text-xl font:medium sm:font-normal">
        {text4}
      </p>
      <p className="text-black-text text-lg sm:text-xl font:medium sm:font-normal">
        {text5}
      </p>
      <p className="text-black-text text-lg sm:text-xl font:medium sm:font-normal">
        {text6}
      </p>
    </div>
  );
};

export default FooterCol;
