import { Zap } from "lucide-react";
import React from "react";

export default function PageTitle() {
  return (
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
  );
}
