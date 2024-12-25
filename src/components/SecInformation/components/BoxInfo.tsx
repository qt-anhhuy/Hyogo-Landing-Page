import React from "react";
import Image from "next/image";
interface BoxInfoProps {
  icon: string;
  number?: string;
  text?: string;
  content: string;
}

export default function BoxInfo({ icon, number, text, content }: BoxInfoProps) {
  return (
    <div className="flex flex-col items-center pb-4">
      <Image
        src={icon}
        alt="icon"
        className="pt-[38px] py-[44px] pb-2.5"
        width={100}
        height={100}
        unoptimized
      />
      <div className="flex flex-col items-center justify-center text-center mt-2 w-full">
        {number && (
          <p className="text-blue-tertiary text-5xl font-extrabold">{number}</p>
        )}
        {text && (
          <p className="text-blue-tertiary text-[31px] font-extrabold ">
            {text}
          </p>
        )}
        <p className="text-blue-tertiary text-lg font-bold flex justify-center items-center w-full mt-2">
          {content}
        </p>
      </div>
    </div>
  );
}
