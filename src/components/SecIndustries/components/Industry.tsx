"use client";

import React, { useState } from "react";
interface LayeredSliderProps {
  setSelectedIndustry: (id: string) => void;
}
const LayeredSlider = ({ setSelectedIndustry }: LayeredSliderProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(2);
  const slides = [
    { id: "nhansu", image: "/images/companies/nhansu.png" },
    { id: "congnghe", image: "/images/companies/cntt.png" },
    { id: "sanxuat", image: "/images/companies/sanxuat.png" },
    { id: "xaydung", image: "/images/companies/xaydung.png" },
  ];

  const getCardStyles = (index: number) => {
    if (hoveredIndex === null) {
      return "w-[280px] z-10";
    }

    // Card được hover luôn ở giữa và lớn nhất
    if (index === hoveredIndex) {
      return "w-[450px] z-30";
    }

    // Xử lý đặc biệt cho trường hợp hover ảnh đầu
    if (hoveredIndex === 0) {
      if (index === 1) return "w-[350px] z-20";
      if (index === 2) return "w-[300px] z-10";
      if (index === 3) return "w-[250px] z-0";
    }

    // Xử lý đặc biệt cho trường hợp hover ảnh cuối
    if (hoveredIndex === 3) {
      if (index === 2) return "w-[350px] z-20";
      if (index === 1) return "w-[300px] z-10";
      if (index === 0) return "w-[250px] z-0";
    }

    // Xử lý cho các trường hợp hover ảnh giữa
    if (Math.abs(index - hoveredIndex) === 1) {
      return "w-[350px] z-20";
    }
    return "w-[280px] z-10";
  };

  const getTransform = (index: number) => {
    if (hoveredIndex === null) return "translate-x-0";

    // Xử lý đặc biệt cho hover ảnh đầu
    if (hoveredIndex === 0) {
      if (index === 0) return "-translate-x-[10%]";
      if (index === 1) return "translate-x-[5%]";
      if (index === 2) return "translate-x-[15%]";
      if (index === 3) return "translate-x-[20%]";
    }

    // Xử lý đặc biệt cho hover ảnh cuối
    if (hoveredIndex === 3) {
      if (index === 3) return "translate-x-[10%]";
      if (index === 2) return "-translate-x-[5%]";
      if (index === 1) return "-translate-x-[15%]";
      if (index === 0) return "-translate-x-[20%]";
    }

    // Xử lý cho các trường hợp hover ảnh giữa
    const relativePosition = index - hoveredIndex;
    if (relativePosition === 0) return "translate-x-0";
    if (relativePosition === 1) return "translate-x-[15%]";
    if (relativePosition === -1) return "-translate-x-[15%]";
    if (relativePosition === 2) return "translate-x-[25%]";
    if (relativePosition === -2) return "-translate-x-[25%]";
    return "translate-x-0";
  };

  return (
    <div className="w-full h-[300px] flex justify-center items-center overflow-hidden pl-[6rem]">
      <div className="flex justify-center items-center relative -mx-20">
        {slides.map((slider, index) => (
          <div
            key={index}
            className={`transition-all duration-300 cursor-pointer -ml-24
              ${getCardStyles(index)} ${getTransform(index)}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(2)}
            onClick={() => {
              setHoveredIndex(index);
              setSelectedIndustry(slider.id);
            }}
          >
            <img
              src={slider.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayeredSlider;
