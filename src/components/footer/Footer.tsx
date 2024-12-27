"use client";
import React from "react";
import FooterCol from "./components/FooterCol";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
      text4: "Privacy Policy",
    },
  ];
  return (
    <section className="container mx-auto pb-6 ">
      <div className=" border border-[#dedede] md:mb-5 2xl:mb-10"></div>
      <div className=" flex flex-col lg:flex-row gap-12 2xl:gap-0 justify-between items-start">
        <div className="flex flex-col items-start gap-[29px] pt-5">
          <img
            src="/images/header/logohyogo.png"
            alt="logo"
            className="border border-red-50 max-w-[184px] max-h-[52px] lg:min-w-[341px] lg:min-h-[100px]"
          />
          <div className="flex flex-row gap-3">
            <img
              className="cursor-pointer"
              src="/images/icons/fb.png"
              alt="logo"
              onClick={() =>
                router.push("https://www.facebook.com/PasonaHRVietnam")
              }
            />
            <img
              className="cursor-pointer"
              src="/images/icons/in.png"
              alt="logo"
              onClick={() =>
                router.push(
                  "https://www.linkedin.com/company/pasonahr-vietnam/"
                )
              }
            />
            <img
              className="cursor-pointer"
              src="/images/icons/web.png"
              alt="logo"
              onClick={() => router.push("https://www.google.com/")}
            />
          </div>
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
