"use client";

import React, { useState } from "react";
import { TrendingUp, AlertCircle, DollarSign, Zap, ChevronDown, ChevronUp, ExternalLink, FileText, Lightbulb, XCircle, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { useTabs } from "@/context/tab-context";

export default function CaiCachGiaLuongTien() {
  const [expandedYear, setExpandedYear] = useState<number | null>(1985);
  const [activeSection, setActiveSection] = useState<"overview" | "references">("overview");
  const { updateCurrentTabAddress, openTab } = useTabs();

  const handleNavigate = (e: React.MouseEvent, url: string, title: string) => {
    e.preventDefault();
    
    // Check if middle click or ctrl/cmd click (should open in new tab)
    if (e.button === 1 || e.ctrlKey || e.metaKey) {
      // Open in new tab
      const newTabId = `tab-${Date.now()}`;
      openTab(newTabId, title, url);
    } else {
      // Open in current tab
      updateCurrentTabAddress(url);
    }
  };

  const inflationData = [
    { year: 1980, rate: 6.8 },
    { year: 1981, rate: 98.9 },
    { year: 1982, rate: 95.6 },
    { year: 1983, rate: 33.6 },
    { year: 1984, rate: 92.8 },
    { year: 1985, rate: 91.6 },
    { year: 1986, rate: 774.7 },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-8 h-8 text-red-600" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              CQ8.1 - Đỉnh cao Khủng hoảng
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Cải cách Giá-Lương-Tiền (Tháng 9/1985)
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            "Cú sốc" thất bại đánh dấu sự sụp đổ của cơ chế bao cấp - "Cái giá phải trả" 
            cho tư duy cũ và yếu tố thúc đẩy trực tiếp Đổi Mới
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection("overview")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "overview"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Phân tích
            </button>
            <button
              onClick={() => setActiveSection("references")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "references"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Tài liệu Tham khảo
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        {activeSection === "overview" && (
          <>
        {/* The Shock - What happened */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Zap className="w-7 h-7 text-red-600" />
            "Cú sốc" Giá-Lương-Tiền - Chuyện gì đã xảy ra?
          </h2>
          
          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600 mb-8">
            <p className="text-gray-800 leading-relaxed mb-4">
              Tháng <strong>9/1985</strong>, Bộ Chính trị quyết định thực hiện cải cách "giá-lương-tiền" 
              với hy vọng khắc phục tình trạng khan hiếm hàng hóa và lạm phát ẩn. Nhưng do thiếu hiểu biết 
              về kinh tế thị trường, cải cách đã <strong className="text-red-600">thất bại thảm hại</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Tăng Giá
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Tăng giá trung bình <strong>4-6 lần</strong>: gạo ~10 lần, thực phẩm ~3-5 lần
              </p>
              <p className="text-blue-600 font-semibold text-xl">+400-600%</p>
              <p className="text-xs text-gray-500 mt-1">Gạo từ 0.6 → 6 đồng/kg</p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Tăng Lương
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Lương danh nghĩa tăng <strong>~2-3 lần</strong>, nhưng giá trị thực giảm <strong className="text-red-600">60-70%</strong>
              </p>
              <p className="text-green-600 font-semibold text-xl">+200-300%</p>
              <p className="text-xs text-red-600 mt-1 font-semibold">Giá trị thực: -60-70%</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Phát hành Tiền
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                In tiền tăng <strong>~500-600%</strong> (M1) trong 12 tháng để trả lương, bù đắp thâm hụt
              </p>
              <p className="text-purple-600 font-semibold text-xl">+587%</p>
            </div>
          </div>

          <div className="bg-red-100 rounded-lg p-6 border-2 border-red-300">
            <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Kết quả Thảm họa
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li className="flex gap-2">
                <XCircle className="w-6 h-6 text-red-600 shrink-0" />
                <span>
                  <strong>Lương tăng chậm hơn giá:</strong> Đời sống người lao động giảm mạnh
                </span>
              </li>
              <li className="flex gap-2">
                <XCircle className="w-6 h-6 text-red-600 shrink-0" />
                <span>
                  <strong>Lạm phát vượt tầm kiểm soát:</strong> Đạt <strong className="text-red-600">774.7%</strong> trong 12 tháng sau cải cách (9/1985 - 9/1986)
                </span>
              </li>
              <li className="flex gap-2">
                <XCircle className="w-6 h-6 text-red-600 shrink-0" />
                <span>
                  <strong>Khan hiếm trầm trọng hơn:</strong> Hàng hóa biến mất khỏi thị trường, chợ đen phát triển
                </span>
              </li>
              <li className="flex gap-2">
                <XCircle className="w-6 h-6 text-red-600 shrink-0" />
                <span>
                  <strong>Mất niềm tin:</strong> Người dân hoang mang, mất lòng tin vào Nhà nước
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Inflation Chart */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Lạm phát 774.7% - Con số Kinh hoàng (9/1985 - 9/1986)
          </h2>
          
          <div className="mb-8">
            <div className="relative h-96 flex items-end gap-4">
              {inflationData.map((data, index) => {
                const maxRate = 774.7;
                const height = (data.rate / maxRate) * 100;
                const isShock = data.year === 1986;
                
                return (
                  <div key={data.year} className="flex-1 flex flex-col items-center">
                    <div className="w-full relative group cursor-pointer"
                         onClick={() => setExpandedYear(expandedYear === data.year ? null : data.year)}>
                      <div 
                        className={`w-full rounded-t-lg transition-all duration-300 ${
                          isShock 
                            ? 'bg-linear-to-t from-red-600 to-red-400 shadow-lg' 
                            : 'bg-linear-to-t from-orange-500 to-orange-300'
                        } hover:opacity-80`}
                        style={{ height: `${Math.max(height, 5)}%` }}
                      />
                      <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 
                                      ${isShock ? 'text-red-600 font-black text-2xl' : 'text-gray-700 font-bold text-lg'}`}>
                        {data.rate}%
                      </div>
                    </div>
                    <div className={`mt-4 text-center ${isShock ? 'font-black text-red-600 text-lg' : 'font-semibold text-gray-700'}`}>
                      {data.year}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Y-axis labels */}
            <div className="mt-4 text-sm text-gray-600 text-center">
              Tỷ lệ Lạm phát (%)
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-3">Lạm phát 774% có nghĩa là gì?</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>Nếu bạn có <strong>100 đồng</strong> tháng 9/1985:</p>
                <p className="text-red-600 font-semibold">
                  → Tháng 9/1986 chỉ còn <strong>giá trị ~11.5 đồng</strong>
                </p>
                <p className="mt-4">Nếu tô phở giá <strong>10 đồng</strong> tháng 9/1985:</p>
                <p className="text-red-600 font-semibold">
                  → Tháng 9/1986 giá <strong>~87 đồng</strong>
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-3">Hậu quả với Người dân</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Lương danh nghĩa tăng, nhưng không mua được gì</li>
                <li>• Tiền tiết kiệm bay hơi trong vài tháng</li>
                <li>• Phải đổi USD, vàng để giữ giá trị</li>
                <li>• Xếp hàng cả ngày vẫn không mua được hàng</li>
                <li>• Nhiều người phải bỏ thành phố về quê</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why did it fail? */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tại sao Cải cách Thất bại?
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-6 py-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                1. Thiếu hiểu biết về Kinh tế thị trường
              </h3>
              <p className="text-gray-700">
                Lãnh đạo tưởng rằng chỉ cần <strong>tăng giá + tăng lương</strong> là giải quyết được vấn đề. 
                Nhưng không hiểu rằng: <strong className="text-red-600">Không có hàng hóa → tăng giá cũng vô nghĩa</strong>.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                2. Không cải cách Cơ chế Sản xuất
              </h3>
              <p className="text-gray-700">
                Cơ chế bao cấp vẫn giữ nguyên → <strong>không khuyến khích sản xuất</strong> → 
                không tăng được nguồn cung → tăng giá chỉ làm trầm trọng thêm khan hiếm.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                3. In tiền để Bù đắp Thâm hụt
              </h3>
              <p className="text-gray-700">
                Ngân sách không đủ trả lương → <strong>in thêm tiền</strong> → 
                <strong className="text-red-600">lạm phát tăng vọt</strong> → vòng xoáy ác tính.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6 py-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                4. Thiếu Chuẩn bị và Đồng bộ
              </h3>
              <p className="text-gray-700">
                Cải cách được thực hiện <strong>đột ngột</strong>, không có dự trữ hàng hóa, 
                không có kế hoạch ổn định thị trường → gây <strong>sốc</strong> toàn xã hội.
              </p>
            </div>
          </div>
        </div>

        {/* The Crisis Point */}
        <div className="bg-linear-to-r from-red-50 via-orange-50 to-amber-50 rounded-lg p-8 border-2 border-red-300">
          <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8" />
            Điểm Bùng phát - "Cái giá phải trả" cho Tư duy Cũ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Từ Nguyên nhân đến Hậu quả: Mối liên hệ Logic
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      <span className="text-amber-600">[CQ7.2]</span> Tư duy Giáo điều - Cơ chế Bao cấp
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Áp dụng máy móc mô hình kế hoạch hóa tập trung, phủ nhận quy luật thị trường, 
                      dẫn đến nền kinh tế kém hiệu quả, khan hiếm hàng hóa
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center text-red-600 text-2xl font-bold">
                  ↓
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      <span className="text-orange-600">[CQ7.3]</span> Chiến tranh Biên giới
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Khuếch đại khủng hoảng nội tại: lấy đi nguồn lực khan hiếm, cô lập quốc tế, 
                      đẩy nền kinh tế vào tình trạng nguy kịch
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center text-red-600 text-2xl font-bold">
                  ↓
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      <span className="text-red-600">[CQ8.1]</span> Cải cách Giá-Lương-Tiền - "Cú sốc" Thất bại
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Nỗ lực cuối cùng để cứu vãn cơ chế bao cấp → thất bại thảm hại → lạm phát 774% 
                      → đỉnh cao của khủng hoảng
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center text-green-600 text-2xl font-bold">
                  ↓
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Buộc phải Đổi Mới (1986)
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Thất bại toàn diện khiến Đảng thừa nhận: cơ chế bao cấp không còn đường sống → 
                      <strong className="text-green-600">phải đổi mới tư duy, đổi mới cơ chế</strong> 
                      → Đại hội VI (12/1986) ra đời chính sách Đổi Mới
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Bài học Lịch sử
              </h3>
              <p className="leading-relaxed">
                Cải cách giá-lương-tiền 1985 không chỉ là một chính sách thất bại, mà chính là 
                <strong>"cái giá phải trả"</strong> cho tư duy giáo điều, cứng nhắc trong quản lý kinh tế. 
                Nó chứng minh rằng: <strong>Không thể duy trì cơ chế bao cấp</strong> trong điều kiện 
                Việt Nam. Đây chính là <strong>yếu tố thúc đẩy trực tiếp, bắt buộc</strong> Đảng phải 
                tiến hành Đổi Mới - một bước ngoặt lịch sử của dân tộc.
              </p>
            </div>
          </div>
        </div>

        {/* Connection to Doi Moi */}
        <div className="bg-green-50 rounded-lg p-8 border-2 border-green-300">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Từ Thất bại đến Đổi Mới
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Sau cú sốc giá-lương-tiền, tình hình kinh tế-xã hội xuống đến đáy. Các phiên họp Bộ Chính trị 
              diễn ra gay gắt, tranh luận về tương lai đất nước (→ <strong>Phiên họp Mất ngủ tháng 10/1985</strong>).
            </p>
            <p>
              Tháng 12/1986, <strong className="text-green-600">Đại hội Đảng lần thứ VI</strong> họp tại Hà Nội, 
              chính thức thông qua <strong>chính sách Đổi Mới</strong>:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Chuyển từ cơ chế kế hoạch hóa tập trung sang <strong>kinh tế thị trường định hướng XHCN</strong></span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Thừa nhận vai trò của <strong>quy luật giá trị, cung-cầu</strong></span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Khuyến khích <strong>kinh tế tư nhân, kinh tế hộ gia đình</strong></span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Mở cửa, hội nhập kinh tế quốc tế</span>
              </li>
            </ul>
            <p className="text-green-600 font-semibold pt-4">
              → Đổi Mới đã cứu Việt Nam khỏi khủng hoảng, mở ra thời kỳ phát triển mới.
            </p>
          </div>
        </div>
          </>
        )}

        {activeSection === "references" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7 text-red-600" />
                Tài liệu Tham khảo Chính thức
              </h2>
              
              <div className="space-y-6">
                {/* Official Documents */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    1. Văn kiện Đảng và Nhà nước
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Nghị quyết 09-NQ/TW (9/9/1985)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Quyết định chính thức về cải cách giá-lương-tiền
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
                        Chi tiết về mức tăng giá: Gạo từ 0.6 → 6 đồng/kg (~10x)
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
                        Nghị định 135-CP (1985)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Về lương: Lương tối thiểu từ 120 → 350 đồng/tháng (~2.9x)
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
                        "Chúng ta chưa hiểu đúng quy luật giá trị" - Thừa nhận thất bại
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
                  </div>
                </div>

                {/* Financial Data */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    2. Dữ liệu Tài chính
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Báo cáo Ngân hàng Nhà nước (1986)
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        Lạm phát 774.7% (9/1985 - 9/1986)
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        M1 (tiền cung ứng) tăng 587% trong cùng kỳ
                      </p>
                      <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Lưu trữ: Thư viện Quốc hội
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        World Bank - Vietnam Economic Report (1987)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Phân tích tác động của cải cách giá-lương-tiền 1985
                      </p>
                      <a 
                        href="https://www.worldbank.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        worldbank.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Academic Sources */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    3. Nghiên cứu và Sách chuyên khảo
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Lịch sử Kinh tế Việt Nam 1945-2000 (tập 2)
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        NXB Chính trị Quốc gia, 2004
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        Chi tiết về cải cách giá-lương-tiền và hậu quả
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Hồi ký Nguyễn Văn Linh
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        NXB Chính trị Quốc gia, 2000
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        Ghi chép về "Phiên họp Mất ngủ" tháng 10/1985
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Đổi Mới - Nhìn lại 30 năm
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        NXB Chính trị Quốc gia, 2016
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        Phân tích quá trình dẫn đến Đổi Mới
                      </p>
                    </div>
                  </div>
                </div>

                {/* Internal Reports */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    4. Báo cáo Nội bộ
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Báo cáo Bộ Lao động (1986)
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        Về tình trạng đời sống người lao động sau cải cách
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        "Lương tăng nhưng không mua được gì"
                      </p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Tài liệu Bộ Chính trị (10/1985)
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        Biên bản phiên họp bàn về hậu quả cải cách
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        "Cải cách đột ngột, không chuẩn bị"
                      </p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Báo cáo Bộ Kế hoạch (1986)
                      </h4>
                      <p className="text-sm text-gray-700">
                        "Nguồn cung không tăng" - Phân tích về thất bại
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oral History */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    5. Lịch sử Trực tiếp
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Nghiên cứu Di cư 1985-1986
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        Viện Xã hội học Việt Nam
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        Về hiện tượng "bỏ thành phố về quê" sau cải cách
                      </p>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Tài liệu Nội bộ (1986)
                      </h4>
                      <p className="text-sm text-gray-700">
                        Ghi chép giá thực tế tại Hà Nội: Tô phở 10 → 87 đồng
                      </p>
                    </div>
                  </div>
                </div>

                {/* Search Tips */}
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-red-600" />
                    Cách Tìm kiếm Tài liệu
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Tư liệu Văn kiện Đảng:</strong>{" "}
                        <a href="https://tulieuvankien.dangcongsan.vn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          tulieuvankien.dangcongsan.vn
                        </a>{" "}
                        → Tìm: "cải cách giá lương tiền 1985"
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>World Bank:</strong> Search "Vietnam 1985 reform" cho báo cáo kinh tế
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Thư viện Quốc hội:</strong> Tra cứu Báo cáo Ngân hàng Nhà nước 1986
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Topics Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Khám phá thêm</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={(e) => handleNavigate(e, "https://vnr202-nhom5.com/khung-hoang-kinh-te-xa-hoi", "CQ7.2: Khủng hoảng Kinh tế - Xã hội")}
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(e, "https://vnr202-nhom5.com/khung-hoang-kinh-te-xa-hoi", "CQ7.2: Khủng hoảng Kinh tế - Xã hội");
                }
              }}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600 hover:shadow-lg transition text-left group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">
                    CQ7.2 - Nguyên nhân Gốc rễ
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    Khủng hoảng Kinh tế - Xã hội
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tư duy cũ và cơ chế bao cấp - nguyên nhân chủ quan của khủng hoảng
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition ml-4 shrink-0" />
              </div>
            </button>

            <button
              onClick={(e) => handleNavigate(e, "https://vnr202-nhom5.com/chien-tranh-bien-gioi", "CQ7.3: Chiến tranh Biên giới")}
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(e, "https://vnr202-nhom5.com/chien-tranh-bien-gioi", "CQ7.3: Chiến tranh Biên giới");
                }
              }}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-lg transition text-left group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
                    CQ7.3 - Khủng hoảng Kép
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                    Chiến tranh Biên giới
                  </h3>
                  <p className="text-sm text-gray-600">
                    Khủng hoảng bên ngoài khuếch đại khủng hoảng bên trong
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition ml-4 shrink-0" />
              </div>
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center flex items-center justify-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Tip: Ctrl+Click (Cmd+Click on Mac) hoặc Middle-click để mở trong tab mới
          </p>
        </div>
      </div>
    </div>
  );
}

