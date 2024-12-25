import React from "react";
type Props = {
  img: string;
  bg: string;
  description: string;
};

const ImgText = ({ img, bg, description }: Props) => {
  return (
    <div className="relative">
      <div className="bg-white p-[5px]">
        <img src={img} alt="bg" className="" />
      </div>

      <img src={bg} alt="bg" className="absolute bottom-[-90%] left-7 z-[1]" />
      <p className="absolute bottom-[-55%] left-[18%] z-[2] text-white text-lg font-bold max-w-[17rem] max-h-[8rem] leading-[38px]">
        {description}
      </p>
    </div>
  );
};

export default ImgText;
