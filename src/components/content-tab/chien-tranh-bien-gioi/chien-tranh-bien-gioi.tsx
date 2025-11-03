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
import PageTitle from "./page-title";
import TongQuan from "./tong-quan";
import KinhTe from "./kinh-te";
import MocThoiGian from "./moc-thoi-gian";
import ThamKhao from "./tham-khao";

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

      <PageTitle></PageTitle>
      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-15 z-10 shadow-sm">
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
        {activeTab === "overview" && <TongQuan />}

        {activeTab === "economic" && <KinhTe />}

        {activeTab === "timeline" && <MocThoiGian />}

        {activeTab === "references" && <ThamKhao />}

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
                    &quot;Cú sốc&quot; thất bại và lạm phát 774.7% - con đường
                    đến Đổi Mới
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
