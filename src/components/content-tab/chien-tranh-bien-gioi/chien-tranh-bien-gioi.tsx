"use client";

import React, { useState } from "react";
import {
  MapPin,
  Users,
  TrendingDown,
  Calendar,
  Shield,
  AlertCircle,
  ExternalLink,
  FileText,
  Circle,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { useTabs } from "@/context/tab-context";
import Header from "../common/header";

export default function ChienTranhBienGioi() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "economic" | "timeline" | "references"
  >("overview");
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
      <Header></Header>
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
            Vấn đề Campuchia và các cuộc chiến bảo vệ biên giới - gánh nặng kinh
            tế và chính trị trong giai đoạn khủng hoảng (1975-1986)
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
            <button
              onClick={() => setActiveTab("references")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === "references"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Tài liệu Tham khảo
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
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  2 Mặt trận
                </h3>
                <p className="text-gray-600 text-sm">
                  Biên giới Tây Nam & Phía Bắc
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                <Users className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  ~200,000
                </h3>
                <p className="text-gray-600 text-sm">
                  Quân số tại Campuchia (peak 1980s)
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                <TrendingDown className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  80-90%
                </h3>
                <p className="text-gray-600 text-sm">Phụ thuộc viện trợ Liên Xô</p>
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
                    Trong khi nội bộ đất nước đang chìm trong khủng hoảng kinh
                    tế-xã hội do cơ chế bao cấp kế hoạch hóa tập trung, Việt Nam
                    phải đối mặt với các cuộc chiến tranh bảo vệ biên giới - tạo
                    thành một{" "}
                    <span className="font-semibold text-red-600">
                      khủng hoảng kép
                    </span>{" "}
                    nghiêm trọng.
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
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <span>Xung đột với Khmer Đỏ tại Campuchia</span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <span>Chiến dịch giải phóng Campuchia (1978-1979)</span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <span>
                        Duy trì 150,000-200,000 quân tại Campuchia (luân phiên,
                        peak ~200,000)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
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
                      <Circle className="w-4 h-4 text-orange-600 fill-orange-600 mt-0.5 shrink-0" />
                      <span>Chiến tranh biên giới Việt-Trung (1979)</span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-orange-600 fill-orange-600 mt-0.5 shrink-0" />
                      <span>Xung đột liên tục trên biên giới (1979-1989)</span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-orange-600 fill-orange-600 mt-0.5 shrink-0" />
                      <span>Duy trì lực lượng phòng thủ lớn</span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-orange-600 fill-orange-600 mt-0.5 shrink-0" />
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
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gánh nặng Trực tiếp
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      • Chi tiêu quốc phòng chiếm tỷ trọng lớn trong ngân sách nhà nước
                    </li>
                    <li>
                      • Huy động hàng trăm ngàn thanh niên vào quân đội
                    </li>
                    <li>• Giảm đáng kể lực lượng lao động sản xuất</li>
                    <li>• Chi phí vũ khí, trang bị, hậu cần khổng lồ</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gánh nặng Gián tiếp
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cấm vận kinh tế quốc tế từ phương Tây và ASEAN</li>
                    <li>• Cô lập ngoại giao với phương Tây</li>
                    <li>
                      • Mất đi viện trợ quốc tế (Nhật Bản, Thụy Điển đình chỉ
                      1979)
                    </li>
                    <li>• Phụ thuộc 80-90% vào viện trợ từ Liên Xô</li>
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
                  Gánh nặng Ngân sách trong thập kỷ 1980s
                </h3>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Chi tiêu quốc phòng chiếm tỷ trọng lớn trong ngân sách nhà nước
                    do phải duy trì lực lượng quân đội đông đảo trên hai mặt trận:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>
                        <strong>Biên giới Tây Nam:</strong> Duy trì 150,000-200,000 quân
                        tại Campuchia (peak ~200,000)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">•</span>
                      <span>
                        <strong>Biên giới Phía Bắc:</strong> Lực lượng phòng thủ lớn
                        đối phó căng thẳng với Trung Quốc
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-600">•</span>
                      <span>
                        <strong>Hậu cần & Vũ khí:</strong> Chi phí khổng lồ cho trang
                        bị, đạn dược, hậu cần
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Consequences */}
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-4">
                  Hệ quả: Vòng xoáy Khủng hoảng
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex gap-3">
                    <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
                    <span>
                      <strong>Thiếu vốn đầu tư:</strong> Ngân sách dành cho quốc
                      phòng → không còn vốn cho phát triển kinh tế → sản xuất
                      trì trệ
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
                    <span>
                      <strong>Thiếu lao động:</strong> Hàng trăm ngàn thanh niên
                      nhập ngũ → thiếu lực lượng lao động sản xuất → năng suất
                      giảm
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
                    <span>
                      <strong>Cô lập quốc tế:</strong> Cấm vận từ phương Tây →
                      không có viện trợ, đầu tư nước ngoài → phụ thuộc vào Liên
                      Xô
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
                    <span>
                      <strong>Khủng hoảng kép:</strong> Áp lực từ chiến tranh +
                      khủng hoảng nội tại của cơ chế bao cấp → đẩy đất nước vào
                      khủng hoảng toàn diện
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Overview */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tác động Kinh tế của Chiến tranh Biên giới
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gánh nặng Quân sự
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Chi tiêu quốc phòng tăng đáng kể, huy động hàng trăm ngàn thanh
                    niên vào quân ngũ, làm giảm lực lượng lao động sản xuất.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cô lập Quốc tế
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Viện trợ từ phương Tây và Nhật Bản bị đình chỉ (1979). Việt Nam
                    phụ thuộc 80-90% vào viện trợ từ Liên Xô.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Suy giảm Kinh tế
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Tăng trưởng kinh tế chậm lại, giai đoạn 1979-1985 trung bình chỉ
                    khoảng 1-3%/năm, thấp hơn nhiều so với giai đoạn trước đó.
                  </p>
                </div>
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
                      Quân đội Việt Nam tiến vào Campuchia (25/12/1978), lật đổ
                      chế độ Khmer Đỏ (Phnom Penh 7/1/1979). Bắt đầu giai đoạn
                      đóng quân tại Campuchia với lực lượng lớn (peak ~200,000 binh sĩ)
                      kéo dài 10 năm.
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
                      Trung Quốc mở cuộc tấn công quy mô lớn vào biên giới phía
                      Bắc Việt Nam (17/2-16/3/1979). Xung đột kéo dài gần một tháng
                      với quy mô lớn, gây thiệt hại nặng nề về người và của cho cả
                      hai bên.
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
                      Các cuộc đụng độ và pháo kích liên tục diễn ra trên biên
                      giới Việt-Trung trong suốt thập kỷ 1980s. Căng thẳng kéo dài
                      buộc Việt Nam phải duy trì lực lượng phòng thủ lớn tại cả hai
                      mặt trận, gây gánh nặng kinh tế nghiêm trọng.
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
                      Phương Tây và ASEAN áp đặt cấm vận kinh tế toàn diện. Nhật Bản
                      và Thụy Điển đình chỉ viện trợ 1979. Việt Nam bị cô lập ngoại
                      giao, phụ thuộc 80-90% vào viện trợ từ Liên Xô cho cả quân sự
                      và kinh tế.
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
                      Việt Nam hoàn tất việc rút quân khỏi Campuchia vào tháng 9/1989,
                      kết thúc 10 năm đóng quân. Bước đầu cải thiện quan hệ quốc tế
                      sau Đổi Mới, mở đường cho bình thường hóa với Trung Quốc và
                      phương Tây.
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
                Chiến tranh biên giới không chỉ là khủng hoảng bên ngoài, mà còn{" "}
                <strong className="text-red-600">
                  phơi bày và khuếch đại các khủng hoảng bên trong
                </strong>{" "}
                của cơ chế bao cấp. Gánh nặng quốc phòng khổng lồ đã{" "}
                <strong>lấy đi nguồn lực khan hiếm</strong> vốn cần thiết cho
                phát triển kinh tế, đẩy nhanh quá trình sụp đổ của mô hình kế
                hoạch hóa tập trung và buộc Đảng phải suy nghĩ lại về con đường
                phát triển.
              </p>
            </div>
          </div>
        )}

        {activeTab === "references" && (
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
                        Phân tích chiến tranh biên giới làm trầm trọng khủng
                        hoảng kinh tế
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
                        NXB Quân đội Nhân dân, 2005 - Chi tiết quân số, chiến
                        dịch
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
                        <strong>Nội dung:</strong> Xung đột 1977-1978, lật đổ
                        Pol Pot. Việt Nam duy trì lực lượng lớn tại Campuchia
                        (peak ~200,000), gây thiệt hại về người đáng kể.
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
                        <em>
                          The 1979 Sino-Vietnamese War and Its Consequences
                        </em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Chi tiết chiến tranh 1979, áp
                        lực thúc đẩy Đổi Mới 1986.
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
                        Forsberg, L. T. (2007).{" "}
                        <em>
                          Economic reforms in Vietnam: Transition or reconstruction
                        </em>
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Stockholm School of Economics.
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Phân tích sự phụ thuộc nặng nề
                        vào viện trợ Liên Xô (70% kim ngạch ngoại thương), và sự gián
                        đoạn viện trợ từ phương Tây, Nhật Bản sau vấn đề Campuchia.
                      </p>
                      <a
                        href="https://swopec.hhs.se/eijswp/abs/eijswp0226.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        SWOPEC
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        New York Times. (1979).{" "}
                        <em>
                          UN Assembly bids Vietnamese forces evacuate Cambodia
                        </em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Cấm vận phương Tây/ASEAN sau
                        xâm lược Campuchia.
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
                          Sweden tells Vietnam to quit Cambodia or it may
                          withdraw aid
                        </em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Thụy Điển đình chỉ viện trợ
                        1979, Nhật Bản chặn ODA.
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
        )}

        {/* Related Topics Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Khám phá thêm
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={(e) =>
                handleNavigate(
                  e,
                  "https://vnr202-nhom5.com/khung-hoang-kinh-te-xa-hoi",
                  "CQ7.2: Khủng hoảng Kinh tế - Xã hội"
                )
              }
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(
                    e,
                    "https://vnr202-nhom5.com/khung-hoang-kinh-te-xa-hoi",
                    "CQ7.2: Khủng hoảng Kinh tế - Xã hội"
                  );
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
                    Phân tích nguyên nhân chủ quan và khách quan dẫn đến khủng
                    hoảng
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition ml-4 shrink-0" />
              </div>
            </button>

            <button
              onClick={(e) =>
                handleNavigate(
                  e,
                  "https://vnr202-nhom5.com/cai-cach-gia-luong-tien",
                  "CQ8.1: Cải cách Giá-Lương-Tiền"
                )
              }
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(
                    e,
                    "https://vnr202-nhom5.com/cai-cach-gia-luong-tien",
                    "CQ8.1: Cải cách Giá-Lương-Tiền"
                  );
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
                    "Cú sốc" thất bại và lạm phát 774.7% - con đường đến Đổi Mới
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition ml-4 shrink-0" />
              </div>
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center flex items-center justify-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Tip: Ctrl+Click (Cmd+Click on Mac) hoặc Middle-click để mở trong tab
            mới
          </p>
        </div>
      </div>
    </div>
  );
}
