import { ExternalLink, FileText } from "lucide-react";
import React from "react";

export default function ThamKhao() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FileText className="w-7 h-7 text-amber-600" />
          Tài liệu Tham khảo Chính thức
        </h2>

        <div className="space-y-6">
          {/* Vietnamese Sources */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Nguồn Trong nước
            </h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Văn kiện Đại hội VI (1986)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Phân tích sai lầm trong kế hoạch hóa tập trung và khủng hoảng
                  kinh tế
                </p>
                <a
                  href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Tư liệu Văn kiện Đảng
                </a>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Nghị quyết 06-NQ/TW (1978)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Về nhiệm vụ kinh tế năm 1978
                </p>
                <a
                  href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iv/nghi-quyet-so-06-nqtw-ngay-711978-hoi-nghi-lan-thu-ba-ban-chap-hanh-trung-uong-dang-khoa-iv-ve-nhiem-vu-kinh-te-nam-1072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Tư liệu Văn kiện Đảng
                </a>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Chỉ thị 100-CT/TW (1981)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Về sản xuất hàng hóa trong nông nghiệp và thất bại hợp tác xã
                </p>
                <a
                  href="https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Chi-thi-100-CT-TW-1981-Cai-tien-cong-tac-khoan-mo-rong-san-pham-den-nhom-lao-dong-hop-tac-xa-nong-nghiep-247358.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Tư liệu Văn kiện Đảng
                </a>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Lịch sử Việt Nam 1975-2000
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Viện Lịch sử Đảng - NXB Chính trị Quốc gia, 2008
                </p>
                <a
                  href="https://nxbctqg.org.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  NXB Chính trị Quốc gia
                </a>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Niên giám Thống kê 1976-1985
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Tổng cục Thống kê - Dữ liệu thiên tai, nông nghiệp, lạm phát
                </p>
                <a
                  href="https://www.gso.gov.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Tổng cục Thống kê
                </a>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Tạp chí Cộng sản (1986)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Phân tích khủng hoảng và đường lối Đổi Mới
                </p>
                <a
                  href="https://www.tapchicongsan.org.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Tạp chí Cộng sản
                </a>
              </div>
            </div>
          </div>

          {/* International Sources */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Nguồn Quốc tế
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wikipedia. (n.d.). <em>Economic history of Vietnam</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Tổng quan khủng hoảng kinh tế 1976-1986.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Economic_history_of_Vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Xem tài liệu
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wikipedia. (n.d.). <em>Đổi Mới</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Tổng quan về chính sách Đổi Mới và bối cảnh kinh tế.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/%C4%90%E1%BB%95i_M%E1%BB%9Bi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Xem tài liệu
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wikipedia. (n.d.). <em>Five-Year Plans of Vietnam</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Kế hoạch 5 năm 1976-1981 thất bại,
                  mất cân đối nghiêm trọng.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Five-Year_Plans_of_Vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Xem tài liệu
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wikipedia. (n.d.). <em>Agriculture in Vietnam</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Hợp tác hóa cưỡng bức, năng suất
                  giảm mạnh cuối 1970s. Năng suất lao động giảm, thiếu ăn.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Agriculture_in_vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Xem tài liệu
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Forsberg, L. T. & Kokko, A. (2007).{" "}
                  <em>
                    The Role of Donors in Vietnamese Development Planning
                  </em>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Working Paper 238, Stockholm School of Economics.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Phân tích sự phụ thuộc nặng nề vào
                  viện trợ Liên Xô (70% kim ngạch ngoại thương trong thập niên
                  1980), và sự gián đoạn viện trợ từ phương Tây, Nhật Bản sau
                  vấn đề Campuchia.
                </p>
                <a
                  href="https://swopec.hhs.se/eijswp/papers/eijswp0238.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  SWOPEC (PDF)
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Vietnam Law Magazine. (n.d.).{" "}
                  <em>
                    Vietnam secures remarkable economic successes since national
                    reunification
                  </em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Viện trợ và các khoản vay nước
                  ngoài chiếm hơn 63% ngân sách. Viện trợ từ các nước xã hội chủ
                  nghĩa giảm mạnh.
                </p>
                <a
                  href="https://vietnamlawmagazine.vn/vietnam-secures-remarkable-economic-successes-since-national-reunification-7476.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Vietnam Law Magazine
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Dell, M., & Querubin, P. (2017).{" "}
                  <em>The long-run impact of bombing Vietnam</em>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Journal of Development Economics.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Phá hủy hạ tầng chiến tranh, ảnh
                  hưởng trường học và dân số lâu dài.
                </p>
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0304387810000817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  ScienceDirect
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Malesky, E., & London, J. (2014).{" "}
                  <em>
                    &quot;No Responsibility and No Rice&quot;: The Rise and Fall
                    of Agricultural Collectivization in Vietnam
                  </em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Thất bại collectivization, kháng cự
                  của nông dân, năng suất giảm mạnh.
                </p>
                <a
                  href="https://www.researchgate.net/publication/42851820_No_Responsibility_and_No_Rice_The_Rise_and_Fall_of_Agricultural_Collectivization_in_Vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  ResearchGate
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  IMF. (2002). <em>VI Stabilization and Adjustment Policies</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Cải cách giá-lương-tiền 1985 thất
                  bại, làm trầm trọng khủng hoảng.
                </p>
                <a
                  href="https://www.elibrary.imf.org/display/book/9781557755384/ch006.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  IMF eLibrary
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Los Angeles Times. (1985).{" "}
                  <em>Government Eliminates Subsidies in Economic Reform</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Cải cách 1985 xóa trợ cấp gây
                  &quot;cú sốc&quot;, quan liêu, lãng phí, đời sống khó khăn.
                </p>
                <a
                  href="https://www.latimes.com/archives/la-xpm-1985-09-30-fi-17632-story.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  LA Times Archives
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
