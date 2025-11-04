import { ArrowRight } from "lucide-react";
import React from "react";

export default function KinhTe() {
  return (
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
              Chi tiêu quốc phòng chiếm tỷ trọng lớn trong ngân sách nhà nước do
              phải duy trì lực lượng quân đội đông đảo trên hai mặt trận:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2">
                <span className="text-red-600">•</span>
                <span>
                  <strong>Biên giới Tây Nam:</strong> peak ~200,000 năm 1980, ~180,000 năm 1984
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
                <strong>Thiếu vốn đầu tư:</strong> Ngân sách dành cho quốc phòng
                → không còn vốn cho phát triển kinh tế → sản xuất trì trệ
              </span>
            </p>
            <p className="flex gap-3">
              <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
              <span>
                <strong>Thiếu lao động:</strong> Hàng trăm ngàn thanh niên nhập
                ngũ → thiếu lực lượng lao động sản xuất → năng suất giảm
              </span>
            </p>
            <p className="flex gap-3">
              <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
              <span>
                <strong>Cô lập quốc tế:</strong> Cấm vận từ phương Tây → không
                có viện trợ, đầu tư nước ngoài → phụ thuộc vào Liên Xô (viện trợ Liên Xô ~USD 1 tỷ/năm 
                so với viện trợ phương Tây ~USD 100 triệu/năm)
              </span>
            </p>
            <p className="flex gap-3">
              <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
              <span>
                <strong>Phụ thuộc sản xuất:</strong> Viện trợ Liên Xô tài trợ 95% sản lượng than của Việt Nam, 
                51% xi măng, 35% phát điện → kinh tế mất tính tự chủ hoàn toàn
              </span>
            </p>
            <p className="flex gap-3">
              <ArrowRight className="w-6 h-6 text-red-600 shrink-0" />
              <span>
                <strong>Khủng hoảng kép:</strong> Áp lực từ chiến tranh + khủng
                hoảng nội tại của cơ chế bao cấp → đẩy đất nước vào khủng hoảng
                toàn diện
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
            <h3 className="font-semibold text-gray-900 mb-2">Cô lập Quốc tế</h3>
            <p className="text-gray-700 text-sm mb-3">
              Viện trợ từ phương Tây và Nhật Bản bị đình chỉ (1979). Việt Nam
              phụ thuộc nặng nề vào viện trợ Liên Xô: ~75% đầu tư công, ~70% ngoại thương, 
              ~90% nguyên liệu chính (peak giữa 1980s).
            </p>
            <p className="text-gray-700 text-sm font-semibold">
              Phụ thuộc sản xuất của Việt Nam:
            </p>
            <ul className="text-gray-700 text-xs ml-4 mt-1">
              <li>• 95% sản lượng than của VN</li>
              <li>• 51% sản xuất xi măng của VN</li>
              <li>• 35% phát điện của VN</li>
            </ul>
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
  );
}
