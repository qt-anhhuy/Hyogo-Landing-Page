import React from "react";
import FooterCol from "./components/FooterCol";
type FooterColProps = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
};
const Footer = () => {
  const FooterContent = [
    {
      title: "MENU",
      text1: "Giới thiệu chương trình",
      text2: "Đôi tượng tham gia",
      text3: "Lợi ích tham gia",
      text4: "Danh sách công ty",
      text5: "Cuộc sống tại Hyogo",
      text6: "Câu hỏi thường gặp",
    },
    {
      title: "CONTACT",
      text1: "Vincom Center, 45A Lý Tự Trọng, Quận 1, TP. Hồ Chí Minh",
      text2: "(84 28) 3827 0977 | 0901 822 531 (Ms Nhi)",
      text3: "hyogo.recruitment@pasonatech.vn",
      text4: "DPrivacy Policy",
    },
  ];
  return (
    <section className=" pb-6 ">
      <div className=" border border-[#dedede] 2xl:mx-[8.25rem] md:mb-5 2xl:mb-10"></div>
      <div className="pl-5 pr-4 md:pl-[3rem] md:pr-[3rem] lg:pl-[7rem] lg:pr-[4rem] 2xl:pl-[15.75rem] 2xl:pr-[9.5rem] flex flex-col lg:flex-row gap-12 2xl:gap-0 justify-between items-start">
        <div className="flex flex-col items-start gap-[29px] pt-5">
          <img
            src="/images/header/hyogo-logo-footer.png"
            alt="logo"
            className="w-[184px] h-[52px] 2xl:w-auto 2xl:h-auto"
          />
          <img src="/images/icons/icon-social-media.svg" alt="logo" />
        </div>

        {FooterContent.map((item, index) => (
          <FooterCol
            key={index}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            text3={item.text3}
            text4={item.text4}
            text5={item.text5}
            text6={item.text6}
          />
        ))}
      </div>
      <div className="lg:hidden border border-[#dedede] mt-10 mx-4 "></div>
      <div className="text-lg 2xl:text-xl font-din text-gray-text font-medium leading-[35px] text-center mt-4 2xl:mt-8">
        © 2024 POWERED BY PASONA tech vietnam
      </div>
    </section>
  );
};

export default Footer;
