"use client";
import Footer from "@components/footer/Footer";
import HeaderForm from "@components/header/components/HeaderForm";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <HeaderForm />
      <div className="flex flex-col pt-[8.75rem] pb-[6.56rem] justify-center items-center px-[26.68rem]">
        <img src="/images/icons/success.png" alt="success" />
        <p className="text-blue-secondary text-[65px] font-bold uppercase mt-[3rem]">
          thành công
        </p>
        <p className="text-blue-secondary text center text-3xl font-bold text-center mt-[2rem] leading-[56px]">
          Cảm ơn bạn đã đăng ký tham gia chương trình Hyogo Job Fair Pre - Event
        </p>
        <p className="text-blue-secondary text center text-3xl font-bold text-center leading-[56px]">
          Chúc bạn có hành trang bổ ích tại sự kiện!
        </p>
        <p className="text-black text center text-lg font-normal mt-8 leading-[56px]">
          Thông tin của bạn đã được gửi đến BTC của Job Fair
        </p>
        <p className="text-black text center text-lg font-normal leading-[56px]">
          BTC sẽ gửi thông tin xác nhận và hướng dẫn tham gia sự kiện khi gần
          đến ngày sự kiện.
        </p>
        <button
          className="bg-blue-secondary text-white text-[22px] font-bold font-din px-[3.43rem] py-5 rounded-[5px] mt-8 "
          onClick={() => router.push("/")}
        >
          Trở về trang chủ
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default page;
