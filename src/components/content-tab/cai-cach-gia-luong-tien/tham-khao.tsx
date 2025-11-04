import { ExternalLink } from "lucide-react";
import React from "react";

export default function ThamKhao() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          {/* Vietnamese Sources */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Nguồn Trong nước
            </h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Nghị quyết 09-NQ/TW (9/9/1985)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Quyết định về cải cách giá-lương-tiền
                </p>
                <a
                  href="https://tulieuvankien.dangcongsan.vn"
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
                  Quyết định 217-HĐBT (20/9/1985)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Chi tiết mức tăng giá các hàng hóa thiết yếu
                </p>
                <a
                  href="https://tulieuvankien.dangcongsan.vn"
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
                  Văn kiện Đại hội VI (12/1986)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Thừa nhận thất bại và thừa nhận quy luật giá trị, cung cầu
                </p>
                <a
                  href="https://tulieuvankien.dangcongsan.vn"
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
                  Hồi ký Nguyễn Văn Linh
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  NXB Chính trị Quốc gia, 2001 - Ghi chép về phiên họp mất ngủ
                  tháng 10/1985
                </p>
                <a
                  href="https://www.nxbctqg.org.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  NXB Chính trị Quốc gia
                </a>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Đổi Mới - Nhìn lại 30 năm
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  NXB Chính trị Quốc gia, 2016 - Phân tích quá trình cải cách
                </p>
                <a
                  href="https://www.nxbctqg.org.vn"
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
                  Báo cáo Ngân hàng Nhà nước (1986)
                </h4>
                <p className="text-sm text-gray-700 mb-2">Lạm phát 774.7%</p>
                <a
                  href="https://www.sbv.gov.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ngân hàng Nhà nước
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
                  IMF. (1991). <em>Vietnam: A Case Study in Economic Reform</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Xác nhận giai đoạn cải cách và ổn
                  định từ 1986, lạm phát nghiêm trọng và điều chỉnh chính sách.
                </p>
                <a
                  href="https://www.elibrary.imf.org/view/journals/001/1991/083/article-A001-en.xml"
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
                  Vietnam50.us. (n.d.).{" "}
                  <em>
                    A Comparative Review of Vietnam's Economic Performance and
                    Policy Between 1975 and 2024
                  </em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Dữ liệu kinh tế chính thức
                  1976-1986:
                </p>
                <ul className="text-xs text-gray-600 mb-2 ml-4 list-disc">
                  <li>CPI (lạm phát): 1986 đạt 774.7% (cao nhất lịch sử)</li>
                  <li>
                    GDP growth rates: Từ 16.8% (1976) xuống -2.9% (1980), chỉ
                    còn 2.8% (1986)
                  </li>
                  <li>
                    GDP deflator: Phản ánh lạm phát trong toàn bộ nền kinh tế
                  </li>
                </ul>
                <a
                  href="https://vietnam50.us/Home/reports/a-comparative-review-of-vietnams-economic-performance-and-policy-between-1975-and-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Xem báo cáo
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  World Bank. (n.d.).{" "}
                  <em>Inflation, consumer prices (annual %) - Vietnam</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Cơ sở dữ liệu lạm phát World Bank.
                  Dữ liệu công khai bắt đầu từ năm 1996.
                </p>
                <a
                  href="https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=VN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Xem dữ liệu
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wikipedia. (n.d.). <em>Economic history of Vietnam</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Tổng quan về lịch sử kinh tế và cải
                  cách Việt Nam.
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
                  <strong>Nội dung:</strong> Tổng quan về chính sách Đổi Mới và
                  chuyển sang kinh tế thị trường định hướng XHCN.
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
                  Hayton, B. (2010). <em>Vietnam: Rising Dragon</em>
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Yale University Press.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Bối cảnh lịch sử xã hội và kinh tế
                  Việt Nam.
                </p>
                <a
                  href="https://yalebooks.yale.edu/book/9780300170931/vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Yale Books
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
