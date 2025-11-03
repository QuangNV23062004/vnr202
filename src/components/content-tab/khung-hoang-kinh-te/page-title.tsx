import { TrendingDown } from "lucide-react";
import React from "react";

export default function PageTitle() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-4">
          <p className="text-sm font-medium text-amber-600 uppercase tracking-wider">
            CQ7.2 — Phân tích Lý thuyết
          </p>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Khủng hoảng Kinh tế — Xã hội (1975–1986)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Phân tích nguyên nhân khách quan và chủ quan dẫn đến khủng hoảng, đặc
          biệt là sai lầm trong tư duy kế hoạch hóa tập trung
        </p>
      </div>
    </div>
  );
}
