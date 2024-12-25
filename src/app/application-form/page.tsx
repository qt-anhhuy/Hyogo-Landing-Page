import Footer from "@components/footer/Footer";
import HeaderForm from "@components/header/components/HeaderForm";
import React from "react";
import Form1 from "./components/Form1";

const Page = () => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <HeaderForm />
      <div className="flex flex-col justify-center items-center mt-9">
        <p className="text-blue-secondary text-[54px] font-bold text-center">
          Mẫu đăng ký
        </p>
        <p className="text-center text-black text-lg font-normal max-w-[68rem]">
          Thông tin bạn nhập bên dưới sẽ được công ty sử dụng cho quá trình tham
          gia sự kiện và liên lạc. Sinh viên sẽ được sắp xếp vào các phòng doanh
          nghiệp dựa trên mong muốn và độ phù hợp với từng lĩnh vực công ty. Vui
          lòng nhập đúng và đầy đủ thông tin.
        </p>
        <Form1 />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
