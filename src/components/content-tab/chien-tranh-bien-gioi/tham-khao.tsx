import { ExternalLink, FileText } from "lucide-react";
import React from "react";

export default function ThamKhao() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <FileText className="w-7 h-7 text-red-600" />
          Tài liệu Tham khảo
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
                  Phân tích chiến tranh biên giới làm trầm trọng khủng hoảng
                  kinh tế
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
                  Lịch sử Quân đội Nhân dân Việt Nam (1945-2000)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  NXB Quân đội Nhân dân, 2005 - Chi tiết quân số, chiến dịch
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Niên giám Thống kê 1976-1985
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Tổng cục Thống kê - Phân bổ ngân sách, GDP, viện trợ
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
                  Wikipedia. (n.d.). <em>Cambodian–Vietnamese War</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Xung đột 1977-1978, lật đổ Pol Pot.
                  Việt Nam duy trì lực lượng lớn tại Campuchia (180,000 quân năm 1984, peak ~200,000 năm 1980),
                  gây thiệt hại về người đáng kể.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Cambodian–Vietnamese_War"
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
                  Oxfam. (n.d.). <em>Development Aid Denied</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Ước tính khoảng 140,000-200,000 quân Việt Nam tại Kampuchea (peak ~200,000 năm 1980).
                </p>
                <a
                  href="https://oxfamilibrary.openrepository.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Oxfam Library
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wikipedia. (n.d.). <em>Sino-Vietnamese War</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Chiến tranh biên giới Việt-Trung
                  17/2-16/3/1979, xung đột quy mô lớn gây thiệt hại nặng nề cho
                  cả hai bên.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Sino-Vietnamese_War"
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
                  Wikipedia. (n.d.).{" "}
                  <em>Sino-Vietnamese conflicts (1979-1991)</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Xung đột biên giới liên tục
                  1979-1991 với nhiều trận đánh, gây thiệt hại về người đáng kể.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Sino-Vietnamese_conflicts_(1979–1991)"
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
                  Hoover Institution. (n.d.).{" "}
                  <em>The 1979 Sino-Vietnamese War and Its Consequences</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Chi tiết chiến tranh 1979, áp lực
                  thúc đẩy Đổi Mới 1986.
                </p>
                <a
                  href="https://www.hoover.org/research/1979-sino-vietnamese-war-and-its-consequences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Hoover Institution
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
                  viện trợ Liên Xô: ~75% đầu tư công, ~40% ngân sách, ~10% GDP, ~70% ngoại thương tại peak giữa 1980s. 
                  Viện trợ Liên Xô tài trợ 95% sản lượng than của Việt Nam, 51% xi măng, 35% phát điện.
                  Viện trợ Liên Xô ~USD 1 tỷ/năm vs phương Tây ~USD 100 triệu/năm.
                  Sự gián đoạn viện trợ từ phương Tây, Nhật Bản sau vấn đề Campuchia.
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
                  New York Times. (1979).{" "}
                  <em>UN Assembly bids Vietnamese forces evacuate Cambodia</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Cấm vận phương Tây/ASEAN sau xâm
                  lược Campuchia.
                </p>
                <a
                  href="https://www.nytimes.com/1979/11/15/archives/un-assembly-bids-vietnamese-forces-evacuate-cambodia-vote-to.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  NY Times Archives
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  New York Times. (1979).{" "}
                  <em>
                    Sweden tells Vietnam to quit Cambodia or it may withdraw aid
                  </em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Thụy Điển đình chỉ viện trợ 1979,
                  Nhật Bản chặn ODA.
                </p>
                <a
                  href="https://www.nytimes.com/1979/01/21/archives/sweden-tells-vietnam-to-quit-cambodia-or-it-may-withdraw-aid.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  NY Times Archives
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
