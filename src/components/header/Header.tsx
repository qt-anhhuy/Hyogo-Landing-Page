"use client";
import React from "react";
import Menu from "./components/Menu";
import "../../styles/globals.css";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import MenuMobile from "./components/MenuMb";
import CopyRight from "@components/common/CopyRight";

export default function Header() {
  const router = useRouter();
  const texts = [
    "Sản xuất",
    "xây dựng và thiết kế cơ khí",
    "công nghệ thông tin",
    "phát triển công nghệ",
    "nhân sự",
  ];
  return (
    <>
      <header className="relative max-w-[1920px] mx-auto">
        <div className="z-[-1] absolute top-0 h-full w-full">
          <img
            src="/images/header/bg-header.jpg"
            alt="logo"
            className="hidden lg:block w-full h-full object-cover"
          />
          <img
            src="/images/header/bg-mb.jpg"
            alt="logo"
            className="block lg:hidden w-full h-full object-cover"
          />
        </div>
        <div className=" pt-5 px-4 md:px-14 lg:pl-[7rem] lg:pr-[5rem] 2xl:pl-[15.375rem] 2xl:pr-[11.375rem]">
          <Menu />

          <div className="flex flex-col lg:flex-row justify-between gap-[33px]">
            <div>
              {/* block title */}
              <div className="">
                <p className="text-blue-primary text-xl lg:text-[38px] font-bold mt-8 lg:mt-10 leading-none whitespace-nowrap">
                  Điểm đến lý tưởng cho Kỹ sư tương lai
                </p>
                <div className="text-blue-secondary text-[80px] font-bold lg:text-[156px] lg:font-extrabold uppercase leading-none font-geomanist ">
                  Hyogo
                </div>
                <div>
                  <span className="text-blue-secondary text-[32px] lg:text-[61px] font-bold uppercase leading-none font-geomanist">
                    JOB FAIR{" "}
                  </span>
                  <span className="text-blue-primary text-[32px] lg:text-[61px] font-bold uppercase leading-none font-geomanist">
                    PRE-EVENT
                  </span>
                </div>
                <div>
                  <span className="text-blue-primary text-base lg:text-[28px] font-bold uppercase leading-none ">
                    Hạn đăng ký
                  </span>
                  <span className="text-blue-primary text-[26px] lg:text-[52px] font-bold uppercase tracking-[2.60px] leading-none">
                    {" "}
                    07/03/2025
                  </span>
                </div>
              </div>
              {/* block info */}
              <div className="lg:order-2 order-3 flex flex-row lg:flex-nowrap flex-wrap md:justify-between justify-start items-center bg-white  w-fit rounded-[5px] pl-[26px] pr-5 py-4 mt-5 gap-5 shadow-[0px_2px_12px_0px_rgba(96,179,215,1.00)]">
                <div className="flex lg:flex-col flex-row gap-2 justify-start lg:justify-center items-start lg:items-center">
                  <img
                    src="/images/icons/icon-alarm.svg"
                    alt="logo"
                    className="lg:w-[36px] lg:h-[36px] w-[29px] h-[29px]"
                  />
                  <div>
                    <p className="text-black-text text-lg font-medium text-start lg:text-center">
                      Thời gian
                    </p>
                    <p className="text-blue-secondary text-lg font-bold text-start lg:text-center">
                      13 / 03 / 2025
                    </p>
                    <p className="text-blue-secondary text-lg font-bold text-start lg:text-center">
                      08:00 - 12:00
                    </p>
                  </div>
                </div>
                <div className="min-[550px]:order-1 order-2 flex flex-row lg:flex-col gap-2 justify-start lg:justify-center items-start lg:items-center  lg:border-l lg:border-r border-blue-quaternary lg:px-[26px] ">
                  <img
                    src="/images/icons/icon-location-city.svg"
                    alt="logo"
                    className="lg:w-[40px] lg:h-[40px] w-[29px] h-[29px]"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-black-text text-lg font-medium text-start lg:text-center">
                      OFFLINE tại
                    </p>
                    <p className="text-blue-secondary text-lg font-bold">
                      Trường Đại học Trường Đại học
                    </p>
                    <p className="text-blue-secondary text-lg font-bold">
                      Trường Đại học Trường Đại học
                    </p>
                  </div>
                </div>
                <div className="min-[550px]:order-2 order-1 flex flex-row lg:flex-col gap-2 justify-start lg:justify-center items-start lg:items-center">
                  <img
                    src="/images/icons/icon-date-range.svg"
                    alt="logo"
                    className="lg:w-[45px] lg:h-[32px] w-[29px] h-[29px]"
                    width={45}
                    height={32}
                  />
                  <div>
                    <p className="text-black-text text-lg font-medium text-start lg:text-center">
                      ONLINE qua
                    </p>
                    <p className="text-blue-secondary text-lg font-bold text-start lg:text-center">
                      nền tảng
                    </p>
                    <p className="text-blue-secondary text-lg font-bold text-start lg:text-center">
                      ZOOM
                    </p>
                  </div>
                </div>
              </div>
              {/* button icon */}
              <div className="lg:order-3 order-2 lg:hidden flex flex-row justify-start">
                <button
                  className="block lg:hidden rounded-[5px] px-6 py-3  bg-gradient-yellow text-black-btn text-xl font-extrabold uppercase mt-[22px]"
                  onClick={() => router.push("/application-form")}
                >
                  Đăng ký ngay
                </button>
                <img
                  className="ml-[-20px]"
                  src="/images/icons/Haba-tan1.png"
                  alt="icon"
                />
              </div>

              {/* button ko icon */}
              <button
                className="hidden lg:block rounded-[5px] px-[37px] py-[18px] bg-gradient-yellow text-black-btn text-2xl font-extrabold uppercase mt-[22px]"
                onClick={() => router.push("/application-form")}
              >
                Đăng ký ngay
              </button>
            </div>
            {/* block image hero */}
            <div className="w-full h-auto">
              <img src="/images/header/hero.png" alt="logo" />
            </div>
          </div>
        </div>
        {/* auto text */}
      </header>
      <div className="">
        <Marquee className="pt-5 pb-[6px] sm:pb-[64px]" pauseOnHover>
          {texts.map((text, index) => (
            <span
              key={index}
              className={cn(
                "mx-0 text-lg sm:mx-4 sm:text-4xl font-extrabold uppercase",
                index % 2 === 0 ? "text-blue-secondary" : "text-blue-quaternary"
              )}
            >
              {text}
            </span>
          ))}
        </Marquee>

        <Marquee className="block sm:hidden pb-5" reverse pauseOnHover>
          {texts.map((text, index) => (
            <span
              key={index}
              className={cn(
                "mx-0 text-lg 4xl font-extrabold uppercase whitespace-nowrap",
                index % 2 === 0 ? "text-blue-secondary" : "text-blue-quaternary"
              )}
            >
              {text}
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
