import { Marquee } from "@components/ui/marquee";
import React from "react";

const SecSlider = () => {
  const slider1 = [
    {
      img: "/images/slider/slider1.6.png",
    },
    {
      img: "/images/slider/slider1.1.png",
    },
    {
      img: "/images/slider/slider1.2.png",
    },
    {
      img: "/images/slider/slider1.3.png",
    },
    {
      img: "/images/slider/slider1.4.png",
    },
    {
      img: "/images/slider/slider1.5.png",
    },
  ];
  const slider2 = [
    {
      img: "/images/slider/slider2.6.png",
    },
    {
      img: "/images/slider/slider2.1.png",
    },
    {
      img: "/images/slider/slider2.2.png",
    },
    {
      img: "/images/slider/slider2.3.png",
    },
    {
      img: "/images/slider/slider2.4.png",
    },
    {
      img: "/images/slider/slider2.5.png",
    },
  ];
  return (
    <div className="flex flex-col  gap-8 pt-8 ">
      <Marquee className="w-full" pauseOnHover>
        {slider1.map((item, index) => (
          <div key={index} className={`mx-1 ${index % 2 === 1 ? "pt-12" : ""}`}>
            <img
              src={item.img}
              alt={`slider1-${index}`}
              className="h-[200px] w-auto object-contain shadow-lg"
            />
          </div>
        ))}
      </Marquee>
      <div className="flex flex-row justify-between items-center pl-[8.2rem] pr-[12rem]">
        <div>
          <p className="text-center text-black-text text-[32px] font-semibold">
            TẠI SAO CHỌN SỰ NGHIỆP TẠI
          </p>
          <p className="text-center text-blue-secondary text-[80px] font-normal font-just">
            Hyogo Prefecture
          </p>
        </div>
        <div className="max-w-[42.875rem]">
          <p className="text-center text-black-text text-xl font-normal">
            Tỉnh Hyogo đi đầu trong đổi mới, tích cực nuôi dưỡng các ngành công
            nghiệp công nghệ cao và các sản phẩm tiên phong. Tỉnh Hyogo là nơi
            có cơ sở bức xạ synchrotron hiệu suất cao nhất thế giới, "SPring-8",
            siêu máy tính "Fugaku“ - đạt tiêu chuẩn linh hoạt cao nhất thế giới.
          </p>
          <br />
          <p className="text-center text-black-text text-xl font-normal">
            Hyogo nổi tiếng với phong cảnh thiên nhiên tuyệt đẹp, văn hóa ẩm
            thực đa dạng và môi trường sống thoải mái, chất lượng cao. Cộng đồng
            người Việt tại Hyogo năng động, giúp bạn dễ dàng ổn định cuộc sống
            mới.
          </p>
        </div>
        <img src="/images/icons/Haba-tan6.png" alt="icon" />
      </div>
      <Marquee className="w-full" reverse pauseOnHover>
        {slider2.map((item, index) => (
          <div key={index} className={`mx-1 ${index % 2 === 1 ? "pt-12" : ""}`}>
            <img
              src={item.img}
              alt={`slider2-${index}`}
              className="h-[200px] w-auto object-contain shadow-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SecSlider;
