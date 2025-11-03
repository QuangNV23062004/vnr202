import { AlertCircle, Circle, MapPin, TrendingDown, Users } from "lucide-react";
import React from "react";

export default function TongQuan() {
  return (
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
          <h3 className="text-3xl font-bold text-gray-900 mb-1">~200,000</h3>
          <p className="text-gray-600 text-sm">
            Quân số tại Campuchia (peak 1980s)
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
          <TrendingDown className="w-8 h-8 text-amber-600 mb-3" />
          <h3 className="text-3xl font-bold text-gray-900 mb-1">80-90%</h3>
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
              Trong khi nội bộ đất nước đang chìm trong khủng hoảng kinh tế-xã
              hội do cơ chế bao cấp kế hoạch hóa tập trung, Việt Nam phải đối
              mặt với các cuộc chiến tranh bảo vệ biên giới - tạo thành một{" "}
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
                  Duy trì 150,000-200,000 quân tại Campuchia (luân phiên, peak
                  ~200,000)
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
                • Chi tiêu quốc phòng chiếm tỷ trọng lớn trong ngân sách nhà
                nước
              </li>
              <li>• Huy động hàng trăm ngàn thanh niên</li>
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
                • Mất đi viện trợ quốc tế (Nhật Bản, Thụy Điển đình chỉ 1979)
              </li>
              <li>• Phụ thuộc ~80-90% vào viện trợ từ Liên Xô</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
