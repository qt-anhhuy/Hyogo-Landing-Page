"use client";
import React, { useState } from "react";
import { CheckboxGroup } from "./CheckboxGroup";
import { useRouter } from "next/navigation";
const COMPANIES = [
  { name: "Aspark Co., Ltd", type: "(Sản xuất)" },
  { name: "CBS Group", type: "(Xây dựng)" },
  { name: "Fuji Data System Inc.", type: "(Công nghệ thông tin)" },
  { name: "FUJI SPRINGS CO.,INC.", type: "(Sản xuất)" },
  { name: "HYOGO MACHINERY CO.,LTD", type: "(Sản xuất)" },
  { name: "ITOH DENKI", type: "(Sản xuất)" },
  { name: "Kako Technos Co., Ltd", type: "(Sản xuất)" },
  { name: "Okada Shell Co., Ltd.", type: "(Sản xuất)" },
  { name: "Pasona Inc.", type: "(Nhân sự)" },
  { name: "Petabit Corporation", type: "(Công nghệ thông tin)" },
  { name: "Sankyu Inc.", type: "(Xây dựng)" },
];

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    primaryCompanies: [],
    secondaryCompanies: [],
  });

  const handleCompanySelection =
    (isPrimary: boolean) =>
    (e: React.ChangeEvent<HTMLInputElement>, company: { name: string }) => {
      const field = isPrimary ? "primaryCompanies" : "secondaryCompanies";
      const companies = e.target.checked
        ? [...formData[field], company]
        : formData[field].filter(
            (c: { name: string }) => c.name !== company.name
          );
      setFormData({ ...formData, [field]: companies });
    };

  return (
    <div className="mx-auto max-w-[572px]">
      <div className="p-8 mt-[4.5rem] bg-white rounded-lg shadow flex flex-col gap-8">
        <div>
          <CheckboxGroup
            title="Chọn 2 doanh nghiệp bạn quan tâm nhất"
            options={COMPANIES}
            onChange={handleCompanySelection(true)}
          />
          <div className="h-[0px] border border-[#e2e4e5] mt-3"></div>
        </div>
        <CheckboxGroup
          title="Chọn 3 doanh nghiệp bạn quan tâm (Không bắt buộc)"
          options={COMPANIES}
          onChange={handleCompanySelection(false)}
        />
      </div>
      <div className="flex flex-row justify-between items-center mt-[2.625rem]">
        <input
          type="checkbox"
          className="
          appearance-none
          w-7 h-5 
          border border-black 
          rounded 
          ml-4 mr-3
          cursor-pointer 
          checked:bg-blue-secondary
          checked:border-blue-secondary
          relative
          before:content-['✓']
          before:absolute
          before:hidden
          checked:before:block
          before:top-1/2
          before:left-1/2
          before:-translate-x-1/2
          before:-translate-y-1/2
          before:text-white
          before:text-xl
          "
        />

        <div className="">
          <span className="text-black text-base font-medium leading-normal">
            Tôi đã đọc và đồng ý với{" "}
          </span>
          <span className="text-[#029fc8] text-base font-medium underline leading-normal">
            Chính sách bảo mật
          </span>
          <span className="text-black text-base font-medium underline leading-normal">
            {" "}
          </span>
          <span className="text-black text-base font-medium leading-normal">
            và{" "}
          </span>
          <span className="text-[#029fc8] text-base font-medium underline leading-normal">
            Nghị định 13/2023{" "}
          </span>
          <span className="text-black text-base font-medium leading-normal">
            về việc thu thập và xử lý dữ liệu của Pasona.
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button
          className="mt-[1.625rem] mb-[4rem] py-2 px-7 bg-white border border-[#029fc8] text-blue-secondary text-xl font-normal leading-tight rounded-[5px] flex items-center justify-center"
          onClick={() => router.push("/application-form")}
        >
          <img
            src="/images/icons/icon-back.svg"
            alt="arrow-right"
            className="ml-2"
          />
          Quay lại
        </button>
        <button
          className="mt-[1.625rem] mb-[4rem] py-2 px-7 bg-blue-secondary text-white text-xl font-normal leading-tight rounded-[5px] flex items-center justify-center"
          onClick={() => router.push("/success-form")}
        >
          Gửi
          <img
            src="/images/icons/icon-next.svg"
            alt="arrow-right"
            className="ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Page;
