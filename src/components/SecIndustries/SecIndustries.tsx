"use client";
import SecTitle from "@components/common/SecTitle";
import React, { useState } from "react";
import Company from "./components/Company";
import Industry from "./components/Industry";
type Industry = {
  id: string;
  title: string;
  color: string;
  img: string;
  companies: CompanyData[];
};
type CompanyData = {
  logo: string;
  name: string;
  linhvuc: string;
  text1: string;
  text2?: string;
};

const industriesData: Industry[] = [
  {
    id: "nhansu",
    title: "NHÂN SỰ",
    color: "bg-blue-secondary",
    img: "/images/companies/nhansu.png",
    companies: [
      {
        logo: "/images/companies/pasona.png",
        name: "Pasona Inc.",
        linhvuc: "Nhân sự",
        text1:
          'Pasona Inc. được thành lập vào năm 1976. Chúng tôi cung cấp các dịch vụ nhân sự nhằm "cải tiến quy trình" và "chuyển đổi doanh nghiệp" để hỗ trợ các sáng kiến số hóa và DX (chuyển đổi số) của các doanh nghiệp và chính quyền địa phương.',
        text2:
          'Theo triết lý doanh nghiệp "giải quyết các vấn đề xã hội", Pasona là đối tác đồng sáng tạo thúc đẩy các sáng kiến DX (chuyển đổi số) của khách hàng bằng nhiều công nghệ khác nhau.',
      },
    ],
  },
  {
    id: "congnghe",
    title: "CÔNG NGHỆ THÔNG TIN",
    color: "bg-[#f7b928]",
    img: "/images/companies/cntt.png",
    companies: [
      {
        logo: "/images/companies/fuji-data.png",
        name: "Fuji Data System Inc.",
        linhvuc: "Công nghệ thông tin",
        text1:
          "Fuji Data System Inc. được thành lập vào năm 1978. Trong số các lĩnh vực chuyên môn có hệ thống điều khiển ECU ô tô, hệ thống điều khiển rô-bốt, hệ thống FA, hệ thống đánh giá, công cụ kiểm tra và cơ sở xử lý chất thải thành năng lượng. Chúng tôi hỗ trợ các tài năng phát triển kỹ năng và tiến bộ chuyên môn bất kể tuổi tác. Hệ thống đào tạo mạnh mẽ và cấu trúc đánh giá của công ty cung cấp nhiều sự hỗ trợ và đánh giá phát triển năng lực cho nhân viên.",
        text2:
          "Vị trí mong muốn tuyển dụng: Phát triển công nghệ, xử lý thông tin",
      },
      {
        logo: "/images/companies/petabit.png",
        name: "Petabit Corporation",
        linhvuc: "Công nghệ thông tin",
        text1:
          "Petabit Corporation được thành lập vào năm 2000. Ngành kinh doanh của công ty bao gồm cung cấp dịch vụ lập trình máy tính. Toàn cầu hóa trang web bằng kinh nghiệm trong các giải pháp thương mại điện tử. Môi trường tại công ty tạo điều kiện cho những ý tưởng và phát triển mà bạn đề xuất có thể hình thành dưới dạng dịch vụ web, tạo ra cơ hội để thay đổi thế giới. ",
        text2: "Vị trí mong muốn tuyển dụng: Xử lý thông tin",
      },
    ],
  },
  {
    id: "xaydung",
    title: "XÂY DỰNG",
    color: "bg-[#f7b928]",
    img: "/images/companies/xaydung.png",
    companies: [
      {
        logo: "/images/companies/sankyu.png",
        name: "Sankyu Inc.",
        linhvuc: "Xây dựng",
        text1:
          'Sankyu Inc. được thành lập vào năm 1918, hoạt động trong gần 90 năm với tinh thần biết ơn. Khái niệm chính của chúng tôi là coi trọng con người, do đó chúng tôi đã đưa "cảm ơn" vào tên công ty. Sankyu Inc là một công ty chuyên cung cấp dịch vụ Logistics, kỹ thuật nhà máy và lắp ��ặt. Công ty có tham vọng trong mục tiêu trở thành nhà cung cấp dịch vụ hàng đầu thế giới. Kỹ năng kỹ thuật và mạng lưới đáng tin cậy.',
        text2:
          "Vị trí tuyển dụng: Phát triển công nghệ, quản lý, xây dựng: bảo trì máy móc",
      },
      {
        logo: "/images/companies/cbs.png",
        name: "CBS Group",
        linhvuc: "Xây dựng và thiết kế cơ khí",
        text1:
          "CBS Group ra mắt vào năm 2005. Hoạt động chuyên về thiết kế BIM kiến trúc cho các nhà thầu lớn của Nhật Bản, cũng như dịch vụ thiết kế cơ khí 3D cho các nhà sản xuất nhà máy nổi tiếng như Mitsubishi Heavy Industries và Kobelco. Năm 2025 đánh dấu kỷ niệm 25 năm công ty hoạt động tại Thành phố Hồ Chí Minh. Chúng tôi đóng vai trò là cầu nối giữa các doanh nghiệp Nhật Bản trong lĩnh vực thiết kế kiến trúc và cơ khí (2D/3D).",
        text2: "",
      },
    ],
  },
  {
    id: "sanxuat",
    title: "SẢN XUẤT",
    color: "bg-blue-secondary",
    img: "/images/companies/sanxuat.png",
    companies: [
      {
        logo: "/images/companies/aspark.png",
        name: "Aspark Co., Ltd.",
        linhvuc: "Sản xuất",
        text1:
          "Aspark Co. Ltd. được thành lập vào năm 2005. Công ty chuyên về các dự án phát triển nội bộ (xe điện, ứng dụng tìm kiếm việc làm, hệ thống AI), dịch vụ hỗ trợ kỹ thuật cho các nhà sản xuất và tiếp thị trực tuyến. Aspark là một công ty nơi những người mới tốt nghiệp có thể học hỏi kinh nghiệm quý báu và định hình sự nghiệp tương lai.",
        text2:
          "Vị trí mong muốn tuyển dụng: Phát triển công nghệ, quản lý sản xuất, xử lý thông tin",
      },
      {
        logo: "/images/companies/fuji.png",
        name: "FUJI SPRINGS CO.,INC",
        linhvuc: "Sản xuất các sản phẩm dập kim loại",
        text1:
          "FUJI SPRINGS CO.,INC. được thành lập vào năm 1960, là nhà sản xuất hàng đầu tại Nhật Bản về các thành phần pin lithium-ion cho xe HV và EV. Sản xuất linh kiện pin lithium-ion và các bộ phận an toàn cho ứng dụng ô tô.",
        text2:
          "Vị trí mong muốn tuyển dụng: Phát triển công nghệ, vị trí tổng vụ",
      },
      {
        logo: "/images/companies/hyogo.png",
        name: "HYOGO MACHINERY CO.,LTD",
        linhvuc: "Sản xuất thép và máy móc",
        text1:
          "HYOGO MACHINERY CO.,LTD được thành lập vào năm 1969. Công ty hoạt động trong lĩnh vực sản xuất, bảo trì và sửa chữa máy móc luyện thép và máy móc công nghiệp. Chúng tôi cũng có hoạt động giao dịch quốc tế đáng kể và đội ngũ nhân viên đa dạng, bao gồm nhiều nhân viên toàn cầu.",
        text2:
          "Vị trí tuyển dụng: Phát triển công nghệ, vị trí công việc chung, quản lý sản xuất",
      },
      {
        logo: "/images/companies/kako.png",
        name: "Kako Technos Co., Ltd.",
        linhvuc: "Sản xuất",
        text1:
          "Kako Technos Co., Ltd. được thành lập vào năm 1969. Chúng tôi xây dựng thiết bị điện và điện đường sắt (đặc biệt là hệ thống điều khiển phanh và thiết bị vận hành), cũng như các yêu cầu về máy móc công nghiệp chuyên dụng. Đây là một tập đoàn cho phép bạn làm việc thoải mái trong khi vẫn phát triển bản thân. Nhân viên từ nhiều quốc gia khác nhau cũng làm việc tại đây.",
        text2: "Vị trí tuyển dụng: Phát triển kỹ thuật",
      },
      {
        logo: "/images/companies/itoh.png",
        name: "ITOH DENKI CO.,LTD",
        linhvuc: "Sản xuất",
        text1:
          "ITOH DENKI CO.,LTD được thành lập vào năm 1965. Chúng tôi là nhà sản xuất có thị phần toàn cầu lớn nhất, tạo ra các mặt hàng độc đáo cần thiết cho logistics và vận chuyển. Phát triển, sản xuất, bán và lắp đặt các thiết bị liên quan đến vận chuyển như con lăn điện (con lăn có động cơ cho băng tải).",
        text2: "",
      },
      {
        logo: "/images/companies/okada.png",
        name: "Okada Shell Co., Ltd.",
        linhvuc: "Sản xuất khuôn cát chất lượng cao",
        text1:
          "Okada Shell Co., Ltd. được thành lập vào năm 2006. Công ty chuyên sản xuất và bán 'khuôn cát' chủ yếu dùng để sản xuất các bộ phận cho ô tô, xe máy, tàu thủy, máy móc xây dựng, máy móc công nghiệp, v.v. Với sức mạnh công nghệ mạnh mẽ, doanh nghiệp phát triển sản xuất các loại máy móc và nhiều loại sản phẩm khác trên toàn thế giới.",
        text2:
          "Vị trí mong muốn tuyển dụng: Phát triển công nghệ, Kỹ sư sản xuất, vv.",
      },
      {
        logo: "/images/companies/IBES.png",
        name: "IBES techno Co.,Ltd",
        linhvuc: "Sản xuất",
        text1:
          "Công ty TNHH IBES Techno được thành lập vào năm 1977. Chủ yếu tham gia vào ngành sản xuất. Công ty cung cấp dịch vụ trọn gói, từ thiết kế và sản xuất đến giao hàng các loại tấm pin cao thế và hạ thế. Hiện tại, có sáu nhân viên người Việt Nam và một nhân viên người Trung Quốc. Đây là công ty mà bạn có thể yên tâm làm việc và phát triển trong thời gian dài.",
        text2: "Vị trí tuyển dụng: Phát triển công nghệ, quản lý sản xuất",
      },
    ],
  },
];
const SecIndustries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("sanxuat");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedCompanies =
    industriesData.find((ind) => ind.id === selectedIndustry)?.companies || [];
  return (
    <div className="flex flex-col justify-center items-center w-full container mx-auto pt-10 pb-[4.875rem]">
      <SecTitle title="đồng tổ chức" />
      <div className="flex flex-row justify-center items-center mt-[3rem] gap-10 pb-[6rem]">
        <img src="/images/header/hyogo-logo.png" alt="logo" />
        <img src="/images/companies/jetro.png" alt="logo" />
      </div>
      {/* Slider Section */}

      <Industry setSelectedIndustry={setSelectedIndustry} />

      {/* Title Section */}
      <h2
        className={`text-${industriesData
          .find((ind) => ind.id === selectedIndustry)
          ?.color.substring(3)} text-3xl font-bold my-[3.25rem]`}
      >
        KHỐI NGÀNH{" "}
        {industriesData.find((ind) => ind.id === selectedIndustry)?.title}
      </h2>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gr w-full gap-[4rem]">
        {selectedCompanies.map((company, index) => (
          <Company
            key={index}
            logo={company.logo}
            name={company.name}
            linhvuc={company.linhvuc}
            text1={company.text1}
            text2={company.text2}
          />
        ))}
      </div>
    </div>
  );
};

export default SecIndustries;
