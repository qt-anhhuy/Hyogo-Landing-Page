import React from "react";

const MenuMobile: React.FC = () => {
  const menu = [
    {
      title: "Giới thiệu chương trình",
      icon: "/images/icons/home.svg",
    },
    {
      title: "Đối tượng tham gia",
      icon: "/images/icons/group-people.svg",
    },
    {
      title: "Lợi ích tham gia",
      icon: "/images/icons/arrow.svg",
    },
    {
      title: "Danh sách công ty",
      icon: "/images/icons/note-paper.svg",
    },
    {
      title: "Cuộc sống tại Hyogo",
      icon: "/images/icons/picture.svg",
    },
    {
      title: "Các câu hỏi thường gặp",
      icon: "/images/icons/question.svg",
    },
  ];
  return (
    <div className="lg:hidden bg-white !w-full !h-screen absolute top-0 left-0 z-50 flex flex-col items-center p-4 md:px-14">
      <div className="flex flex-col items-center w-full space-y-6">
        {menu.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-4 py-4 pl-7 ${
              index === 0
                ? "bg-blue-secondary text-white"
                : "bg-blue-light text-blue-secondary"
            } text-xl font-medium rounded-[5px] border-2 border-blue-secondary`}
          >
            <img src={item.icon} alt="logo" /> {item.title}
          </button>
        ))}
      </div>

      {/* Biểu tượng mạng xã hội */}
      <img
        src="/images/icons/icon-social-media.svg"
        alt="logo"
        className="mt-9"
      />
    </div>
  );
};

export default MenuMobile;
