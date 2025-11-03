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
            Phân bổ Ngân sách Nhà nước (1980-1985)
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">
                  Quốc phòng & An ninh
                </span>
                <span className="text-red-600 font-bold">~15-25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-red-600 h-6 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Tương đương ~20% GDP (theo SIPRI)
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">
                  Kinh tế & Đầu tư
                </span>
                <span className="text-blue-600 font-bold">~30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-blue-600 h-6 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">
                  Giáo dục & Y tế
                </span>
                <span className="text-green-600 font-bold">~15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-green-600 h-6 rounded-full"
                  style={{ width: "15%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Khác</span>
                <span className="text-gray-600 font-bold">~10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-gray-500 h-6 rounded-full"
                  style={{ width: "10%" }}
                ></div>
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
                có viện trợ, đầu tư nước ngoài → phụ thuộc vào Liên Xô
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

      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          So sánh Giai đoạn trước và sau Chiến tranh
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">
                  Chỉ tiêu
                </th>
                <th className="text-center py-3 px-4 text-gray-900 font-semibold">
                  1976-1978
                </th>
                <th className="text-center py-3 px-4 text-gray-900 font-semibold">
                  1979-1985
                </th>
                <th className="text-center py-3 px-4 text-gray-900 font-semibold">
                  Biến động
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">
                  Chi quốc phòng / Ngân sách
                </td>
                <td className="py-3 px-4 text-center text-gray-700">~10%</td>
                <td className="py-3 px-4 text-center text-gray-700">~15-25%</td>
                <td className="py-3 px-4 text-center text-red-600 font-semibold">
                  +50-150%
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">Quân số thường trực</td>
                <td className="py-3 px-4 text-center text-gray-700">
                  ~500,000
                </td>
                <td className="py-3 px-4 text-center text-gray-700">
                  ~1,200,000
                </td>
                <td className="py-3 px-4 text-center text-red-600 font-semibold">
                  +140%
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">Viện trợ nước ngoài</td>
                <td className="py-3 px-4 text-center text-gray-700">Đa dạng</td>
                <td className="py-3 px-4 text-center text-gray-700">
                  ~80-90% từ Liên Xô
                </td>
                <td className="py-3 px-4 text-center text-red-600 font-semibold">
                  Giảm mạnh
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">Tăng trưởng GDP</td>
                <td className="py-3 px-4 text-center text-gray-700">~4-6%</td>
                <td className="py-3 px-4 text-center text-gray-700">
                  1-3% trung bình
                </td>
                <td className="py-3 px-4 text-center text-red-600 font-semibold">
                  Giảm ~50-60%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
