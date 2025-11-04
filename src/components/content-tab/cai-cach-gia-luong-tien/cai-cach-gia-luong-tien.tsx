"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  AlertCircle,
  DollarSign,
  Zap,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  Lightbulb,
  XCircle,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { useTabs } from "@/context/tab-context";
import Header from "../common/header";
import { inflationData } from "./lam-phat-data";
import TongQuan from "./tong-quan";
import ThamKhao from "./tham-khao";

export default function CaiCachGiaLuongTien() {
  const [expandedYear, setExpandedYear] = useState<number | null>(1985);
  const [activeSection, setActiveSection] = useState<"overview" | "references">(
    "overview"
  );
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
            <Zap className="w-8 h-8 text-red-600" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              CQ8.1 - Đỉnh cao Khủng hoảng
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Cải cách Giá-Lương-Tiền (Tháng 9/1985)
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            "Cú sốc" thất bại đánh dấu sự sụp đổ của cơ chế bao cấp - "Cái giá
            phải trả" cho tư duy cũ và yếu tố thúc đẩy trực tiếp Đổi Mới
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-15 z-10 shadow-sm">
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
          <TongQuan
            expandedYear={expandedYear}
            setExpandedYear={setExpandedYear}
          ></TongQuan>
        )}
        {activeSection === "references" && <ThamKhao />}

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
                    CQ7.2 - Nguyên nhân Gốc rễ
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    Khủng hoảng Kinh tế - Xã hội
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tư duy cũ và cơ chế bao cấp - nguyên nhân chủ quan của khủng
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
                  "https://vnr202-nhom5.com/chien-tranh-bien-gioi",
                  "CQ7.3: Chiến tranh Biên giới"
                )
              }
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(
                    e,
                    "https://vnr202-nhom5.com/chien-tranh-bien-gioi",
                    "CQ7.3: Chiến tranh Biên giới"
                  );
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
            Tip: Ctrl+Click (Cmd+Click on Mac) hoặc Middle-click để mở trong tab
            mới
          </p>
        </div>
      </div>
    </div>
  );
}
