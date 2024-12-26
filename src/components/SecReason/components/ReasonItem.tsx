import { title } from "process";
import React from "react";
type ReasonItemProps = {
  icon: string;
  title: string;
  description: string;
  isLeft?: boolean;
};
const ReasonItem = ({ icon, title, description, isLeft }: ReasonItemProps) => {
  return (
    <>
      <div className="hidden lg:block">
        {isLeft ? (
          <>
            <div className="flex flex-row justify-start items-start gap-[1.625rem]">
              <img src={icon} alt="icon" className="mt-1 min-w-[40px] " />
              <div className="flex flex-col gap-4 min-w-[23.87rem] max-w-[26.56rem]">
                <p className="text-left text-blue-secondary text-[22px] font-bold">
                  {title}
                </p>
                <p className="text-left text-black-text text-lg font-normal">
                  {description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row justify-end items-start gap-[1.625rem]">
              <div className="flex flex-col gap-4 min-w-[23.87rem] max-w-[26.56rem]">
                <p className="text-right text-blue-secondary text-[22px] font-bold">
                  {title}
                </p>
                <p className="text-right text-black-text text-lg font-normal">
                  {description}
                </p>
              </div>
              <img src={icon} alt="icon" className="mt-1" />
            </div>
          </>
        )}
      </div>
      <div className="flex lg:hidden">
        <div className="flex flex-row justify-start items-start gap-[1.625rem]">
          <img src={icon} alt="icon" className="mt-1 min-w-[40px] " />
          <div className="flex flex-col gap-4 min-w-[23.87rem] max-w-[26.56rem]">
            <p className="text-left text-blue-secondary text-[22px] font-bold">
              {title}
            </p>
            <p className="text-left text-black-text text-lg font-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReasonItem;
