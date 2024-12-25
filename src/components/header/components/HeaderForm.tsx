"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeaderForm = () => {
  const router = useRouter();
  return (
    <header className="px-4  sm:px-[15.625rem] pt-7">
      <div className="flex flex-row justify-between items-center">
        <img
          src="/images/header/hyogo-logo.png"
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <img
          src="/images/header/logo-mb.png"
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer block md:hidden"
        />
        <div className="flex flex-col justify-center item-end">
          <p className="text-center text-blue-secondary text-[54px] font-normal font-just">
            Hyogo Prefectures
          </p>
          <p className="text-center text-black-text text-[32px] font-normal font-just">
            Job Fair PRE - EVENT
          </p>
        </div>
      </div>
      <div className="hidden sm:block border border-[#dedede] sm:mt-10"></div>
    </header>
  );
};

export default HeaderForm;
