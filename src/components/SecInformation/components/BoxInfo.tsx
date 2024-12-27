import React from "react";
import Image from "next/image";
interface BoxInfoProps {
  icon: string;
  number?: string;
  text?: string;
  content: string;
  className?: string;
}

export default function BoxInfo({ icon, number, text, content, className }: BoxInfoProps) {
  return (
    <div className={`flex flex-col items-center pb-4 ${className || ''}`}>
      <Image
        src={icon}
        alt="icon"
        className="pt-[38px] py-[44px] pb-2.5 hidden lg:block"
        width={100}
        height={100}
        unoptimized
      />
      <Image
        src={icon}
        alt="icon"
        className="pt-[38px] py-[44px] pb-2.5 block lg:hidden"
        width={71}
        height={71}
        unoptimized
      />
      <div className="flex flex-col items-center justify-center text-center mt-2 w-full">
        {number && (
          <p className="text-blue-tertiary text-5xl font-extrabold">{number}</p>
        )}
        {text && (
          <p className="text-blue-tertiary text-[22px] lg:text-[31px] font-extrabold ">
            {text}
          </p>
        )}
        <p className="text-blue-tertiary text-base lg:text-lg font-bold flex justify-center items-center w-full mt-2">
          {content}
        </p>
      </div>
    </div>
  );
}
