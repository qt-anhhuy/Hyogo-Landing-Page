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
    <div className="flex flex-col max-w-[41.94rem]">
      <div className="max-w-[671px] min-h-[341px]">
        <iframe
          src="https://youtu.be/7xbKejvXIGE?si=IsClS7fXULBzAySc"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className={`max-w-[671px] h-3 ${color}`} />
      <div className="flex flex-row gap-10 my-5">
        <img src={logo} alt="logo" />
        <div className="flex flex-col">
          <div className={`text-${color.substring(3)} text-[32px] font-medium`}>
            {name}
          </div>
          <div className="w-[71px] h-0.5 bg-[#60b3d7]" />
          <p className={`text-${color.substring(3)} text-xl font-semibold`}>
            Lĩnh vực:
          </p>
          <p className="text-black-text text-xl font-semibold">{linhvuc}</p>
        </div>
      </div>
      <p className=" text-blue-secondary text-xl font-bold mb-2">
        Thông tin công ty
      </p>
      <p className="text-black-text text-lg font-medium">{text1}</p>
      <br />
      {text2 && <p className="text-black-text text-lg font-medium">{text2}</p>}
    </div>
  );
};

export default Company;
