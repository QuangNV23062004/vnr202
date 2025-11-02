"use client";

import React, { useState } from "react";
import { MapPin, Users, TrendingDown, Calendar, Shield, AlertCircle, ExternalLink } from "lucide-react";
import { useTabs } from "@/context/tab-context";

export default function ChienTranhBienGioi() {
  const [activeTab, setActiveTab] = useState<"overview" | "economic" | "timeline">("overview");
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

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-8 h-8 text-red-600" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              CQ7.3 - Khủng hoảng Bên ngoài
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Chiến tranh Biên giới
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Vấn đề Campuchia và các cuộc chiến bảo vệ biên giới - gánh nặng kinh tế và chính trị 
            trong giai đoạn khủng hoảng (1975-1986)
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === "overview"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab("economic")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === "economic"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Gánh nặng Kinh tế
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === "timeline"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Dòng thời gian
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                <MapPin className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-1">2 Mặt trận</h3>
                <p className="text-gray-600 text-sm">Biên giới Tây Nam & Phía Bắc</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                <Users className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-1">600,000+</h3>
                <p className="text-gray-600 text-sm">Quân số điều động</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                <TrendingDown className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-1">~5% GDP</h3>
                <p className="text-gray-600 text-sm">Chi tiêu quốc phòng hàng năm</p>
              </div>
            </div>

            {/* Main Crisis Explanation */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Khủng hoảng kép: Bên trong & Bên ngoài
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Trong khi nội bộ đất nước đang chìm trong khủng hoảng kinh tế-xã hội do cơ chế 
                    bao cấp kế hoạch hóa tập trung, Việt Nam phải đối mặt với các cuộc chiến tranh 
                    bảo vệ biên giới - tạo thành một <span className="font-semibold text-red-600">khủng hoảng kép</span> nghiêm trọng.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Southwestern Border */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    Biên giới Tây Nam (1978-1989)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Xung đột với Khmer Đỏ tại Campuchia</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Chiến dịch giải phóng Campuchia (1978-1979)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Duy trì 150,000-200,000 quân tại Campuchia</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Cấm vận quốc tế từ phương Tây</span>
                    </li>
                  </ul>
                </div>

                {/* Northern Border */}
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    Biên giới Phía Bắc (1979-1989)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Chiến tranh biên giới Việt-Trung (1979)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Xung đột liên tục trên biên giới (1979-1989)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Duy trì lực lượng phòng thủ lớn</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Căng thẳng ngoại giao với Trung Quốc</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hậu quả đối với Nền kinh tế
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gánh nặng Trực tiếp</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Chi tiêu quân sự chiếm ~5% GDP</li>
                    <li>• Huy động hàng trăm ngàn thanh niên vào quân đội</li>
                    <li>• Giảm lực lượng lao động sản xuất</li>
                    <li>• Chi phí vũ khí, trang bị, hậu cần</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gánh nặng Gián tiếp</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cấm vận kinh tế quốc tế</li>
                    <li>• Cô lập ngoại giao với phương Tây</li>
                    <li>• Mất đi viện trợ quốc tế</li>
                    <li>• Phụ thuộc vào viện trợ từ Liên Xô</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "economic" && (
          <div className="space-y-8">
            {/* Economic Burden Visualization */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Gánh nặng Kinh tế từ Chiến tranh
              </h2>
              
              {/* Budget Allocation */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Phân bổ Ngân sách Nhà nước (1980-1985)
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Quốc phòng & An ninh</span>
                      <span className="text-red-600 font-bold">~40-45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div className="bg-red-600 h-6 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Kinh tế & Đầu tư</span>
                      <span className="text-blue-600 font-bold">~30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div className="bg-blue-600 h-6 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Giáo dục & Y tế</span>
                      <span className="text-green-600 font-bold">~15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div className="bg-green-600 h-6 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Khác</span>
                      <span className="text-gray-600 font-bold">~10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6">
                      <div className="bg-gray-500 h-6 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consequences */}
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-4">
                  Hệ quả: Vòng xoáy Khủng hoảng
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex gap-3">
                    <span className="text-red-600 font-bold text-xl">→</span>
                    <span>
                      <strong>Thiếu vốn đầu tư:</strong> Ngân sách dành cho quốc phòng → không còn vốn 
                      cho phát triển kinh tế → sản xuất trì trệ
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-red-600 font-bold text-xl">→</span>
                    <span>
                      <strong>Thiếu lao động:</strong> Hàng trăm ngàn thanh niên nhập ngũ → thiếu 
                      lực lượng lao động sản xuất → năng suất giảm
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-red-600 font-bold text-xl">→</span>
                    <span>
                      <strong>Cô lập quốc tế:</strong> Cấm vận từ phương Tây → không có viện trợ, 
                      đầu tư nước ngoài → phụ thuộc vào Liên Xô
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-red-600 font-bold text-xl">→</span>
                    <span>
                      <strong>Khủng hoảng kép:</strong> Áp lực từ chiến tranh + khủng hoảng nội tại 
                      của cơ chế bao cấp → đẩy đất nước vào khủng hoảng toàn diện
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                So sánh Giai đoạn trước và sau Chiến tranh
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 text-gray-900 font-semibold">Chỉ tiêu</th>
                      <th className="text-center py-3 px-4 text-gray-900 font-semibold">1976-1978</th>
                      <th className="text-center py-3 px-4 text-gray-900 font-semibold">1979-1985</th>
                      <th className="text-center py-3 px-4 text-gray-900 font-semibold">Biến động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-700">Chi quốc phòng / GDP</td>
                      <td className="py-3 px-4 text-center text-gray-700">~3%</td>
                      <td className="py-3 px-4 text-center text-gray-700">~5-7%</td>
                      <td className="py-3 px-4 text-center text-red-600 font-semibold">+67%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-700">Quân số thường trực</td>
                      <td className="py-3 px-4 text-center text-gray-700">~500,000</td>
                      <td className="py-3 px-4 text-center text-gray-700">~1,200,000</td>
                      <td className="py-3 px-4 text-center text-red-600 font-semibold">+140%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-700">Viện trợ nước ngoài</td>
                      <td className="py-3 px-4 text-center text-gray-700">Đa dạng</td>
                      <td className="py-3 px-4 text-center text-gray-700">Chỉ Liên Xô</td>
                      <td className="py-3 px-4 text-center text-red-600 font-semibold">Giảm mạnh</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-gray-700">Tăng trưởng GDP</td>
                      <td className="py-3 px-4 text-center text-gray-700">~5%</td>
                      <td className="py-3 px-4 text-center text-gray-700">~2%</td>
                      <td className="py-3 px-4 text-center text-red-600 font-semibold">-60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Dòng thời gian Chiến tranh Biên giới
              </h2>
              
              <div className="space-y-6">
                {/* Timeline items */}
                <div className="flex gap-6">
                  <div className="shrink-0 w-32 pt-1">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      Tháng 12/1978
                    </div>
                  </div>
                  <div className="grow border-l-4 border-red-600 pl-6 pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Chiến dịch Giải phóng Campuchia
                    </h3>
                    <p className="text-gray-700">
                      Quân đội Việt Nam tiến vào Campuchia, lật đổ chế độ Khmer Đỏ. Bắt đầu giai đoạn 
                      đóng quân 200,000 binh sĩ tại Campuchia kéo dài 10 năm.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-32 pt-1">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      Tháng 2/1979
                    </div>
                  </div>
                  <div className="grow border-l-4 border-orange-600 pl-6 pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Chiến tranh Biên giới Việt-Trung
                    </h3>
                    <p className="text-gray-700">
                      Trung Quốc mở cuộc tấn công quy mô lớn vào biên giới phía Bắc Việt Nam. 
                      Xung đột kéo dài gần 1 tháng, gây thiệt hại nặng nề cho cả hai bên.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-32 pt-1">
                    <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      1979-1989
                    </div>
                  </div>
                  <div className="grow border-l-4 border-amber-600 pl-6 pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Xung đột Biên giới liên tục
                    </h3>
                    <p className="text-gray-700">
                      Các cuộc đụng độ và pháo kích liên tục diễn ra trên biên giới Việt-Trung. 
                      Việt Nam phải duy trì lực lượng lớn tại cả hai mặt trận.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-32 pt-1">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      1979-1985
                    </div>
                  </div>
                  <div className="grow border-l-4 border-blue-600 pl-6 pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Cấm vận Quốc tế
                    </h3>
                    <p className="text-gray-700">
                      Phương Tây áp đặt cấm vận kinh tế toàn diện. Việt Nam bị cô lập ngoại giao, 
                      phụ thuộc hoàn toàn vào viện trợ từ Liên Xô và các nước XHCN.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-32 pt-1">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      Tháng 9/1989
                    </div>
                  </div>
                  <div className="grow border-l-4 border-green-600 pl-6 pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Rút quân khỏi Campuchia
                    </h3>
                    <p className="text-gray-700">
                      Việt Nam hoàn tất việc rút quân khỏi Campuchia, kết thúc 10 năm đóng quân. 
                      Bước đầu cải thiện quan hệ quốc tế sau Đổi Mới.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-lg p-8 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Nhận định Quan trọng
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Chiến tranh biên giới không chỉ là khủng hoảng bên ngoài, mà còn <strong className="text-red-600">
                phơi bày và khuếch đại các khủng hoảng bên trong</strong> của cơ chế bao cấp. Gánh nặng 
                quốc phòng khổng lồ đã <strong>lấy đi nguồn lực khan hiếm</strong> vốn cần thiết cho phát triển 
                kinh tế, đẩy nhanh quá trình sụp đổ của mô hình kế hoạch hóa tập trung và buộc Đảng phải 
                suy nghĩ lại về con đường phát triển.
              </p>
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
                    CQ7.2 - Khủng hoảng Bên trong
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    Khủng hoảng Kinh tế - Xã hội
                  </h3>
                  <p className="text-sm text-gray-600">
                    Phân tích nguyên nhân chủ quan và khách quan dẫn đến khủng hoảng
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition ml-4 shrink-0" />
              </div>
            </button>

            <button
              onClick={(e) => handleNavigate(e, "https://vnr202-nhom5.com/cai-cach-gia-luong-tien", "CQ8.1: Cải cách Giá-Lương-Tiền")}
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(e, "https://vnr202-nhom5.com/cai-cach-gia-luong-tien", "CQ8.1: Cải cách Giá-Lương-Tiền");
                }
              }}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-lg transition text-left group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
                    CQ8.1 - Đỉnh cao Khủng hoảng
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                    Cải cách Giá-Lương-Tiền (1985)
                  </h3>
                  <p className="text-sm text-gray-600">
                    "Cú sốc" thất bại và lạm phát 774% - con đường đến Đổi Mới
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition ml-4 shrink-0" />
              </div>
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            💡 Tip: Ctrl+Click (Cmd+Click on Mac) hoặc Middle-click để mở trong tab mới
          </p>
        </div>
      </div>
    </div>
  );
}

