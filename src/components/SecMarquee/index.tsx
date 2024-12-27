"use client";
import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const texts = [
  "Sản xuất",
  "xây dựng và thiết kế cơ khí",
  "công nghệ thông tin",
  "phát triển công nghệ",
  "nhân sự",
];

const SecMarquee = () => {
  return (
    <>
      <Marquee
        className="hidden sm:block pt-5 pb-[6px] sm:pb-[64px] [--duration:30s]"
        pauseOnHover
      >
        {texts.map((text, index) => (
          <span
            key={index}
            className={cn(
              "mx-0 text-lg sm:mx-4 sm:text-4xl font-extrabold uppercase whitespace-nowrap",
              index % 2 === 0 ? "text-blue-secondary" : "text-blue-quaternary"
            )}
          >
            {text}
          </span>
        ))}
      </Marquee>
      <Marquee
        className="block sm:hidden pt-5 pb-[6px] sm:pb-[64px] [--duration:20s]"
        pauseOnHover
      >
        {texts.map((text, index) => (
          <span
            key={index}
            className={cn(
              "mx-0 text-lg sm:mx-4 sm:text-4xl font-extrabold uppercase whitespace-nowrap",
              index % 2 === 0 ? "text-blue-secondary" : "text-blue-quaternary"
            )}
          >
            {text}
          </span>
        ))}
      </Marquee>
      <Marquee
        className="block sm:hidden pb-2 [--duration:20s]"
        pauseOnHover
        reverse
      >
        {texts.map((text, index) => (
          <span
            key={index}
            className={cn(
              "mx-0 text-lg sm:mx-4 sm:text-4xl font-extrabold uppercase whitespace-nowrap",
              index % 2 === 0 ? "text-blue-secondary" : "text-blue-quaternary"
            )}
          >
            {text}
          </span>
        ))}
      </Marquee>

      {/* <Marquee className="block sm:hidden pb-5" pauseOnHover>
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
      </Marquee> */}
    </>
  );
};

export default SecMarquee;
