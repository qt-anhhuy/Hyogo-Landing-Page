"use client";
import Footer from "@components/footer/Footer";
import HeaderForm from "@components/header/components/HeaderForm";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div
      className="bg-repeat"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <HeaderForm />
      <div className="container mx-auto flex flex-col justify-center items-center py-[7rem]">
        <p className="text-blue-secondary text-[38px] md:text-[65px] font-bold">
          Coming Soon !
        </p>
        <button
          className="bg-blue-secondary text-white text-xl sm:text-[22px] font-semibold sm:font-bold font-din px-8 py-4 md:px-[3.43rem] ,d:py-5 rounded-[5px] mt-8 "
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
