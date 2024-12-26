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
      {/* Desktop View */}
      <div className="hidden lg:block max-w-[600px]">
        {isLeft ? (
          <div className="flex flex-row justify-start items-start gap-[1.625rem]">
            <img src={icon} alt="icon" className="mt-1 w-[50px]" />
            <div className="flex flex-col gap-4">
              <p className="text-left text-blue-secondary text-[22px] font-bold line-clamp-2">
                {title}
              </p>
              <p className="text-left text-black-text text-lg font-normal line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-end items-start gap-[1.625rem]">
            <div className="flex flex-col gap-4">
              <p className="text-right text-blue-secondary text-[22px] font-bold line-clamp-2">
                {title}
              </p>
              <p className="text-right text-black-text text-lg font-normal line-clamp-3">
                {description}
              </p>
            </div>
            <img src={icon} alt="icon" className="mt-1 w-[50px]" />
          </div>
        )}
      </div>

      {/* Mobile & Tablet View */}
      <div className="lg:hidden w-full px-[0.9375rem]">
        <div className="flex flex-row justify-start items-start gap-[1.625rem] w-full">
          <img src={icon} alt="icon" className="mt-1 w-[50px]" />
          <div className="flex flex-col gap-4 flex-1">
            <p className="text-left text-blue-secondary text-[22px] font-bold line-clamp-2">
              {title}
            </p>
            <p className="text-left text-black-text text-lg font-normal line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReasonItem;
