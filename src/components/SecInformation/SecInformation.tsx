import React from "react";
import BoxInfo from "./components/BoxInfo";
import CopyRight from "@components/common/CopyRight";

export default function SecInformation() {
  const boxInfos = [
    {
      icon: "/images/gif/gif-location-city.gif",

      number: "11",
      content: "Công ty Nhật Bản tham gia sự kiện",
    },
    {
      icon: "/images/gif/gif-conversation.gif",
      number: "100",
      content: "Giới hạn số lượng sinh viên tham gia Offline",
    },
    {
      icon: "/images/gif/gif-physic.gif",
      number: "04",
      content: "Lĩnh vực Sản xuất/ CNTT/ Xây dựng/ Nhân sự",
    },
    {
      icon: "/images/gif/gif-video.gif",
      text: "Không giới hạn",
      content: "Số lượng sinh viên tham gia Online",
    },
    {
      icon: "/images/gif/gif-translator.gif",
      text: "Không yêu cầu",
      content: "Tiếng Nhật",
    },
  ];

  return (
    <section className="pb-9">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row">
          <img
            src="/images/SecInformation/info1.png"
            alt="img"
            className="pt-[15px] mr-3"
          />
          <div className="pl-[7px] pt-[65px] flex flex-row gap-[7px] items-start">
            <img
              src="/images/icons/icon-habatan2.svg"
              alt="img"
              className="pt-8"
            />
            <div>
              <p className="text-blue-secondary text-[120px] font-medium font-just pl-[7px] ">
                Hyogo Prefecture
              </p>
              <p className="text-black-text text-lg font-medium max-w-[27.6rem] leading-[38px]">
                Nằm ở vùng Kansai, Nhật Bản, Hyogo nổi tiếng với nền công nghiệp
                phát triển mạnh mẽ, đặc biệt là các ngành sản xuất, chế tạo và
                công nghệ thông tin.<br></br> Với nhiều công ty đa quốc gia và
                doanh nghiệp khởi nghiệp đặt trụ sở tại đây, Hyogo mang đến vô
                số cơ hội việc làm hấp dẫn cho các kỹ sư trẻ.
              </p>
            </div>
          </div>
        </div>

        <img src="/images/SecInformation/info2.png" alt="img" />
      </div>

      <div className="flex flex-row justify-between items-center pl-[250px] pr-[253px]">
        <div className="flex flex-col gap-[18px]">
          <div>
            <span className="text-blue-secondary text-[80px] font-normal font-just">
              Hyogo Job Fair{" "}
            </span>
            <span className="text-black-text text-[80px] font-normal font-just">
              Pre - Event là gì?
            </span>
          </div>
          <div className="max-w-[789px]">
            <p className="text-black-text text-lg font-medium leading-[38px]">
              Ngày hội việc làm tỉnh Hyogo - Nhật Bản là sự kiện đặc biệt do
              Chính quyền tỉnh Hyogo tổ chức. Sự kiện nhằm kết nối sinh viên
              Việt Nam với các doanh nghiệp tiềm năng tại tỉnh Hyogo để chuẩn bị
              cho bước đệm sự nghiệp tại Nhật Bản trong tương lai.
            </p>
            <br />
            <span className="text-black-text text-lg font-medium leading-[38px]">
              Sự kiện dành riêng dành cho{" "}
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              sinh viên ngành Khoa học Kỹ thuật và các ngành liên quan
            </span>
            <span className="text-[#34414d] text-lg font-medium font-['Inter'] leading-[38px]">
              , với mục tiêu trang bị cho sinh viên đầy đủ
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              {" "}
              kiến thức để nhanh chóng hoà nhập thị trường lao động{" "}
            </span>
            <span className="text-[#34414d] text-lg font-medium font-['Inter'] leading-[38px]">
              ngay khi vừa tốt nghiệp,
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              {" "}
              tìm hiểu sâu hơn về văn hóa doanh nghiệp Nhật Bản, hoạt động kinh
              doanh, yêu cầu tuyển dụng
            </span>
            <span className="text-[#34414d] text-lg font-medium font-['Inter'] leading-[38px]">
              , đồng thời khám phá những
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              {" "}
              cơ hội nghề nghiệp hấp dẫn tại tỉnh Hyogo, Nhật Bản.
            </span>
          </div>
        </div>

        <img
          src="/images/SecInformation/Hyogo_Map.png"
          alt="img"
          className="pb-[39px]"
        />
      </div>

      <div className="grid grid-cols-5 gap-[71px] pl-[231px] pr-[245px]">
        {boxInfos.map((info, index) => (
          <BoxInfo
            key={index}
            icon={info.icon}
            number={info.number}
            text={info.text}
            content={info.content}
          />
        ))}
      </div>
    </section>
  );
}
