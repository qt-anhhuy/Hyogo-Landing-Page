"use client";

import React, { useState } from "react";
interface LayeredSliderProps {
  selectedIndustry: string;
  setSelectedIndustry: (id: string) => void;
}
const LayeredSlider = ({ selectedIndustry, setSelectedIndustry }: LayeredSliderProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(2);
  const [selected, setSelected] = useState(false);
  const slides = [
    { id: "nhansu", image: "/images/companies/nhansu.png" },
    { id: "congnghe", image: "/images/companies/cntt.png" },
    { id: "sanxuat", image: "/images/companies/sanxuat.png" },
    { id: "xaydung", image: "/images/companies/xaydung.png" },
  ];

  const getCardStyles = (index: number) => {
    if (hoveredIndex === null) {
      return "w-[74vw] lg:w-[280px] z-10";
    }

    // Card được hover luôn ở giữa và lớn nhất
    if (index === hoveredIndex) {
      return "w-[84vw] lg:w-[450px] z-30";
    }

    // Xử lý đặc biệt cho trường hợp hover ảnh đầu
    if (hoveredIndex === 0) {
      if (index === 1) return "w-[78vw] lg:w-[350px] z-20";
      if (index === 2) return "w-[74vw] lg:w-[300px] z-10";
      if (index === 3) return "w-[68vw] lg:w-[250px] z-5";
    }

    // Xử lý đặc biệt cho trường hợp hover ảnh cuối
    if (hoveredIndex === 3) {
      if (index === 2) return "w-[78vw] lg:w-[350px] z-20";
      if (index === 1) return "w-[74vw] lg:w-[300px] z-10";
      if (index === 0) return "w-[68vw] lg:w-[250px] z-5";
    }

    // Xử lý cho các trường hợp hover ảnh giữa
    if (Math.abs(index - hoveredIndex) === 1) {
      return "w-[78vw] lg:w-[350px] z-20";
    }
    return "w-[74vw] lg:w-[280px] z-10";
  };

  const getTransform = (index: number) => {
    if (hoveredIndex === null) return "translate-x-0";

    // Xử lý đặc biệt cho hover ảnh đầu
    if (hoveredIndex === 0) {
      if (index === 0) return "translate-y-[50%] lg:translate-y-0 lg:-translate-x-[10%]";
      if (index === 1) return "-translate-y-[0%] lg:translate-y-0 lg:translate-x-[5%]";
      if (index === 2) return "-translate-y-[50%] lg:translate-y-0 lg:translate-x-[15%]";
      if (index === 3) return "-translate-y-[100%] lg:translate-y-0 lg:translate-x-[20%]";
    }

    // Xử lý đặc biệt cho hover ảnh cuối
    if (hoveredIndex === 3) {
      if (index === 3) return "-translate-y-[100%] lg:translate-y-0 lg:translate-x-[10%]";
      if (index === 2) return "-translate-y-[50%] lg:translate-y-0 lg:-translate-x-[5%]";
      if (index === 1) return "-translate-y-[0%] lg:translate-y-0 lg:-translate-x-[15%]";
      if (index === 0) return "translate-y-[50%] lg:translate-y-0 lg:-translate-x-[20%]";
    }

    // Xử lý cho các trường hợp hover ảnh giữa
    const relativePosition = index - hoveredIndex;
    if (relativePosition === 0)
      return hoveredIndex === 1
        ? "translate-y-0 lg:translate-y-0 lg:translate-x-0"
        : "-translate-y-[50%] lg:translate-y-0 lg:translate-x-0";
    if (relativePosition === 1)
      return hoveredIndex === 1
        ? "-translate-y-[50%] lg:translate-y-0 lg:translate-x-[15%]"
        : "-translate-y-[100%] lg:translate-y-0 lg:translate-x-[15%]";
    if (relativePosition === -1)
      return hoveredIndex === 1
        ? "translate-y-[50%] lg:translate-y-0 lg:-translate-x-[15%]"
        : "translate-y-[0%] lg:translate-y-0 lg:-translate-x-[15%]";
    if (relativePosition === 2) return "-translate-y-[100%] lg:translate-y-0 lg:translate-x-[25%]";
    if (relativePosition === -2) return "translate-y-[50%] lg:translate-y-0 lg:-translate-x-[25%]";
    return "translate-y-0 lg:translate-y-0 lg:translate-x-0";
  };

  return (
    <div className="w-full lg:h-[300px] flex justify-center items-center overflow-visible lg:overflow-hidden lg:pl-[6rem]">
      <div className="relative h-[120vw] flex flex-col lg:flex-row justify-center items-center lg:-mx-20">
        {slides.map((slider, index) => (
          <div
            key={index}
            className={`relative transition-all duration-300 cursor-pointer flex justify-center items-center lg:-ml-24
              ${getCardStyles(index)} ${getTransform(index)}`}
            onMouseEnter={() => {
              setHoveredIndex(index);
              setSelected(false);
            }}
            onMouseLeave={() => {
              if (!selected) {
                setHoveredIndex(slides.findIndex(slide => slide.id === selectedIndustry));
              }
            }}
            onClick={() => {
              setHoveredIndex(index);
              setSelectedIndustry(slider.id);
              setSelected(true);
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
