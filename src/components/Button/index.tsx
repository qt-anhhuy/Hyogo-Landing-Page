"use client";
import React from "react";

type Props = {
  color?: string;
  title: string;
  type?: "button" | "submit" | "reset";
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  outline?: boolean;
  disable?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const sizeClasses = {
  small: "text-sm font-extrabold uppercase",
  medium: "text-lg font-extrabold uppercase",
  large: "text-2xl font-extrabold uppercase",
};

export const Button = ({
  color = "bg-gradient-yellow text-black-btn",
  title,
  type = "button",
  iconStart,
  iconEnd,
  outline = false,
  disable = false,
  size = "medium",
  onClick,
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={`rounded-[5px] ${color} ${size} ${sizeClasses[size]} ${
        iconEnd || iconStart
          ? "pl-[36px] pr-[75px] py-[17px]"
          : "px-6 py-3 xl:px-[37px] xl:py-4"
      } ${className} `}
      onClick={onClick}
      type={type}
    >
      {iconStart}
      {title}
      {iconEnd}
    </button>
  );
};
