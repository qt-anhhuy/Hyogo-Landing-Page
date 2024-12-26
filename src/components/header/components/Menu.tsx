"use client";
import CopyRight from "@components/common/CopyRight";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import MenuMobile from "./MenuMb";

type Nav = {
  path: string;
  title: string;
};

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const Navigate = () => {
    const pathname = usePathname();
    const navigate: Nav[] = [
      {
        path: "/",
        title: "Giới thiệu chương trình",
      },
      {
        path: "#",
        title: "Đối tượng tham gia",
      },
      {
        path: "#",
        title: "Lợi ích tham gia",
      },
      {
        path: "#",
        title: "Danh sách công ty",
      },
      {
        path: "#",
        title: "Cuộc sống tại Hyogo",
      },
      {
        path: "#",
        title: "Các câu hỏi thường gặp",
      },
    ];
    return { pathname, navigate };
  };
  const { pathname, navigate } = Navigate();
  return (
    <>
      <nav className="flex flex-row justify-between items-center pt-[5px] pr-[2px] mt-[3rem] lg:mt-0">
        <img
          src="/images/header/logohyogo.png"
          alt="logo"
          className="hidden md:block max-w-[228px]"
        />
        <img
          src="/images/header/logo-mb.png"
          alt="logo"
          className="block md:hidden"
        />
        <div>
          <img
            src="/images/icons/menu-mb.png"
            alt="icon"
            className="block lg:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <ul className="mt-6 hidden lg:flex flex-row pb-2 gap-[26px]">
          {navigate.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-center content-center w-[6.5rem] "
            >
              <Link
                className={`flex items-center text-center text-base font-semibold ${
                  pathname === item.path
                    ? "text-blue-secondary"
                    : "text-black-text"
                }`}
                href={item.path}
              >
                {item.title}
              </Link>
              {pathname === item.path && (
                <div className="w-[65px] h-[3px] bg-[#029fc8] mx-auto mt-1"></div>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:block relative">
          <button
            className="rounded-[5px] px-[37px] py-[17px] bg-gradient-yellow text-black-btn text-2xl font-extrabold uppercase whitespace-nowrap"
            onClick={() => router.push("/application-form")}
          >
            Đăng ký ngay
          </button>
          <div className="absolute right-[-35%] top-[-23%] flex flex-col">
            <img
              className="px-[19px]"
              src="/images/icons/icon-habatan1.svg"
              alt="icon"
            />
            <CopyRight />
          </div>
        </div>
      </nav>
      <div className="block lg:hidden w-full h-1 mt-1 bg-white shadow-[0px_4px_4px_0px_rgba(34,132,198,0.10)]" />
      <div className="relative w-full mt-[3.25rem]">
        {showMenu && <MenuMobile />}
      </div>
    </>
  );
}
