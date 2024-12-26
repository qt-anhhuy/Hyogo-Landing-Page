"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeaderForm = () => {
  const router = useRouter();
  return (
    <header className="container mx-auto pt-7 bg-white shadow-[0px_4px_4px_0px_rgba(34,132,198,0.10)] sm:shadow-none sm:bg-transparent pb-2 sm:pb-0">
      <div className="flex flex-row justify-between items-center">
        <img
          src="/images/header/logohyogo.png"
          alt="logo"
          onClick={() => router.push("/")}
          className="hidden sm:block cursor-pointer max-w-[228px]"
        />
        <img
          src="/images/header/logo-mb.png"
          alt="logo"
          onClick={() => router.push("/")}
          className="block sm:hidden cursor-pointer"
        />
        <div className="flex flex-col justify-center item-end">
          <p className="text-center text-blue-secondary text-[24px] md:text-[54px] font-normal font-just">
            Hyogo Prefectures
          </p>
          <p className="text-center text-black-text text-[18px] md:text-[32px] font-normal font-just">
            Job Fair PRE - EVENT
          </p>
        </div>
      </div>
      <div className="hidden sm:block border border-[#dedede] sm:mt-10"></div>
    </header>
  );
};

export default HeaderForm;
