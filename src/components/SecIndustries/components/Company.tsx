import React from "react";
type CompanyProps = {
  logo: string;
  name: string;
  linhvuc: string;
  text1: string;
  text2?: string;
};
const Company = ({ logo, name, linhvuc, text1, text2 }: CompanyProps) => {
  const color =
    linhvuc.toLowerCase().includes("sản xuất") ||
    linhvuc.toLowerCase().includes("nhân sự")
      ? "bg-blue-secondary"
      : "bg-yellow";
  return (
    <div className="flex flex-col ">
      <div className="w-full h-auto">
        <iframe
          className="w-full min-h-[340px]"
          src="https://www.youtube.com/embed/7xbKejvXIGE?list=RD7xbKejvXIGE"
          allowFullScreen
        ></iframe>
      </div>
      <div className={`w-full h-3 ${color}`} />
      <div className="flex flex-row gap-3 sm:gap-10 my-5">
        <div className="basis-[40%] ">
          <img src={logo} alt="logo" className="w-full " />
        </div>
        <div className="basis-[60%] flex flex-col">
          <div
            className={`text-${color.substring(
              3
            )} text-[21px] md:text-[28px] lg:text-[22px] xl:text-[32px] font-medium flex justify-center sm:justify-start items-center h-full sm:h-auto 2xl:whitespace-nowrap`}
          >
            {name}
          </div>
          <div className="hidden sm:block w-[71px] h-0.5 bg-[#60b3d7]" />
          <div className="hidden sm:block mt-[7px]">
            <p
              className={`text-${color.substring(
                3
              )} text-lg md:text-xl font-semibold`}
            >
              Lĩnh vực:
            </p>
            <p className="text-black-text text-base md:text-xl font-medium md:font-semibold">
              {linhvuc}
            </p>
          </div>
        </div>
      </div>
      {/* linh vuc mobile */}
      <div className="block sm:hidden">
        <p className={`text-${color.substring(3)} text-lg font-semibold`}>
          Lĩnh vực:
        </p>
        <p className="text-black-text text-lg font-medium ">{linhvuc}</p>
      </div>
      <p className=" text-blue-secondary text-lg sm:text-xl font-bold mb-2 mt-2.5 sm:mt-0">
        Thông tin công ty
      </p>
      <p className="text-black-text text-lg font-medium">{text1}</p>
      <br />
      {text2 && <p className="text-black-text text-lg font-medium">{text2}</p>}
    </div>
  );
};

export default Company;
