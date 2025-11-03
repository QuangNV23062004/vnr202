"use client";

import React, { useState } from "react";
import {
  TrendingDown,
  AlertTriangle,
  Factory,
  Users,
  BookOpen,
  Lightbulb,
  ExternalLink,
  FileText,
  Circle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  MapPin,
  Pin,
} from "lucide-react";
import { useTabs } from "@/context/tab-context";
import Header from "../common/header";
import KhachQuan from "./khach-quan";
import ChuQuan from "./chu-quan";
import CoChe from "./co-che";
import ThamKhao from "./tham-khao";
import PageTitle from "./page-title";

export default function KhungHoangKinhTe() {
  const [activeSection, setActiveSection] = useState<
    "objective" | "subjective" | "mechanism" | "references"
  >("objective");
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
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-red-50">
      <Header></Header>
      {/* Header */}

      <PageTitle></PageTitle>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-15 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection("objective")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "objective"
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Nguyên nhân Khách quan
            </button>
            <button
              onClick={() => setActiveSection("subjective")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "subjective"
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Nguyên nhân Chủ quan
            </button>
            <button
              onClick={() => setActiveSection("mechanism")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "mechanism"
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Cơ chế Bao cấp
            </button>
            <button
              onClick={() => setActiveSection("references")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "references"
                  ? "border-amber-600 text-amber-600"
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
        {activeSection === "objective" && <KhachQuan />}

        {activeSection === "subjective" && <ChuQuan />}

        {activeSection === "mechanism" && <CoChe />}

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
                  <p className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-2">
                    CQ7.3
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    Chiến tranh Biên giới
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Vấn đề Campuchia và gánh nặng quốc phòng trong khủng hoảng
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition ml-4 shrink-0" />
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
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600 hover:shadow-lg transition text-left group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">
                    CQ8.1 - Đỉnh cao Khủng hoảng
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    Cải cách Giá-Lương-Tiền (9/1985)
                  </h3>
                  <p className="text-sm text-gray-600">
                    "Cú sốc" thất bại và lạm phát 774.7% - hậu quả của tư duy cũ
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition ml-4 shrink-0" />
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
