import React from "react";
type SecTitleProps = {
  title: string;
};
const SecTitle = ({ title }: SecTitleProps) => {
  return (
    <div className="text-center text-blue-secondary text-[32px] font-extrabold leading-[50px] uppercase">
      {title}
    </div>
  );
};

export default SecTitle;
