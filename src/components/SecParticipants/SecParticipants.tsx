import React from "react";
import ImgText from "./components/ImgText";

const SecParticipants = () => {
  const data = [
    {
      img: "/images/SecParticipants/university.png",
      bg: "/images/SecParticipants/yellow.png",
      description:
        " Sinh viên Trường Đại học Bách Khoa - Đại học Quốc Gia TP.HCM (tất cả chuyên ngành)",
    },
    {
      img: "/images/SecParticipants/smile.png",
      bg: "/images/SecParticipants/blue.png",
      description:
        "Sinh viên ngành Khoa học Kỹ thuật hoặc các ngành liên quan trên địa bàn TP.HCM",
    },
    {
      img: "/images/SecParticipants/people.png",
      bg: "/images/SecParticipants/yellow.png",
      description:
        "Sinh viên năm 1, 2, 3, 4 mong muốn tìm hiểu cơ hội nghề nghiệp tại Nhật Bản",
    },
  ];
  return (
    <div className="relative w-full h-full">
      <div className=" bg-[#029fc8] w-[88%] h-[525px] z-0"></div>
      <div className="w-[10.23%] h-[55.6%] bg-[#0b6386]/50 z-[1] absolute bottom-0 left-[3%] " />
      <div className="origin-top-left -rotate-90 text-center text-[38px] font-extrabold tracking-wide absolute text-stroke-a font-[sans-serif] left-[6%] bottom-[-5%]">
        ĐỐI TƯỢNG THAM GIA
      </div>

      <img
        src="/images/SecParticipants/IMG.png"
        alt="bg"
        className="absolute right-0 bottom-[-26%] z-[3]"
      />
      <div className="absolute top-5 left-[12%] z-[3] flex flex-row gap-[3.625rem] justify-center items-center ">
        <p className=" text-white text-[38px] font-extrabold uppercase">
          đối tượng tham gia
        </p>
        <p className="text-white text-lg font-medium max-w-[51.875rem]">
          Sinh viên sẽ giao lưu trực tuyến với 11 doanh nghiệp đến từ tỉnh
          Hyogo. <br /> Các công ty sẽ được chia thành 3 phòng theo khối ngành,
          mỗi phiên thảo luận của doanh nghiệp sẽ có 30 phút để trình bày và
          trao đổi với sinh viên Việt Nam.
        </p>
      </div>
      <img
        src="/images/icons/icon-habatan3.png"
        alt="bg"
        className="absolute right-[5%] top-2 z-[4]"
      />
      <div className="absolute bottom-[-20%] left-[25%] z-[3] flex flew-row gap-4">
        {data.map((item, index) => (
          <ImgText
            key={index}
            img={item.img}
            bg={item.bg}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SecParticipants;
