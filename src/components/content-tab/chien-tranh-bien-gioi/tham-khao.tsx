import { ExternalLink, FileText } from "lucide-react";
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
                  Quân số 150k-200k, luân phiên ~500k. Thương vong ~15,000.
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
                  Wikipedia. (n.d.). <em>Sino-Vietnamese War</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> 17/2-16/3/1979: 200k quân TQ vs
                  70k-100k VN + 150k dân quân. Thương vong 20k-35k mỗi bên.
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
                  <strong>Nội dung:</strong> ~3,750 vụ xung đột 1979-1982. Trận
                  Vị Xuyên: 4,000 VN tử vong, 9,000 bị thương.
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
                  GlobalSecurity.org. (n.d.).{" "}
                  <em>Cambodia - Vietnamese Occupation 1979-1989</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Duy trì 180,000 quân, cao điểm
                  200,000. Tổng luân phiên ~500,000.
                </p>
                <a
                  href="https://www.globalsecurity.org/military/world/cambodia/history-vietnam.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  GlobalSecurity.org
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  World Bank. (n.d.).{" "}
                  <em>Military expenditure (% of GDP) - Vietnam</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> Chi tiêu quốc phòng ~20% GDP
                  (1979-1985).
                </p>
                <a
                  href="https://data.worldbank.org/indicator/MS.MIL.XPND.GD.ZS?locations=VN"
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
                  Alpha History. (n.d.). <em>Vietnam War timeline: Cambodia</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> 25/12/1978: 150,000 quân xâm lược.
                  07/01/1979: Giải phóng Phnom Penh.
                </p>
                <a
                  href="https://alphahistory.com/vietnamwar/vietnam-war-timeline-cambodia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Alpha History
                </a>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Russia Beyond. (2016).{" "}
                  <em>How Russian aid helped rebuild post-war Vietnam</em>
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Nội dung:</strong> 80-90% phụ thuộc viện trợ Liên Xô,
                  ~1-3 tỷ USD/năm (1979-1985).
                </p>
                <a
                  href="https://www.rbth.com/multimedia/history/2016/03/16/how-russian-aid-helped-rebuild-post-war-vietnam_575851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Russia Beyond
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
