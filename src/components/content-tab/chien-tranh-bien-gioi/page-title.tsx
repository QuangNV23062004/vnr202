import { TrendingDown } from "lucide-react";
import React from "react";

export default function PageTitle() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-4">
          <p className="text-sm font-medium text-amber-600 uppercase tracking-wider">
            CQ7.3 - Khủng hoảng Bên ngoài
          </p>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Chiến tranh Biên giới
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Vấn đề Campuchia và các cuộc chiến bảo vệ biên giới - gánh nặng kinh
          tế và chính trị trong giai đoạn khủng hoảng (1975-1986)
        </p>
      </div>
    </div>
  );
}
