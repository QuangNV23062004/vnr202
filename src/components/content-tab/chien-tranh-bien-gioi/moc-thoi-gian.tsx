import { AlertCircle } from "lucide-react";
import React from "react";

export default function MocThoiGian() {
  return (
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
                Quân đội Việt Nam tiến vào Campuchia (25/12/1978), lật đổ chế độ
                Khmer Đỏ (Phnom Penh 7/1/1979). Bắt đầu giai đoạn đóng quân
                150,000-200,000 binh sĩ tại Campuchia (peak ~200,000) kéo dài 10
                năm.
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
                Trung Quốc mở cuộc tấn công quy mô lớn vào biên giới phía Bắc
                Việt Nam (17/2-16/3/1979). Khoảng 200,000 quân Trung Quốc đối
                đầu với 70,000-100,000 quân chính quy Việt Nam + ~150,000 dân
                quân. Xung đột gây thiệt hại nặng nề cho cả hai bên.
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
                Các cuộc đụng độ và pháo kích liên tục diễn ra trên biên giới
                Việt-Trung (~3,750 sự kiện 1979-1982). Đặc biệt trận Vị Xuyên
                (1984-1988) với ~4,000 binh sĩ Việt Nam tử vong. Việt Nam phải
                duy trì lực lượng lớn tại cả hai mặt trận.
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
                Phương Tây và ASEAN áp đặt cấm vận kinh tế toàn diện (UNGA
                Resolution S/13027, 1979). Nhật Bản và Thụy Điển đình chỉ viện
                trợ 1979. Việt Nam bị cô lập ngoại giao, phụ thuộc ~80-90% vào
                viện trợ từ Liên Xô (~$3 tỷ/năm cho quân sự và kinh tế).
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
                Việt Nam hoàn tất việc rút quân khỏi Campuchia (21-26/9/1989,
                đợt cuối ~26,000 binh sĩ), kết thúc 10 năm đóng quân. Bước đầu
                cải thiện quan hệ quốc tế sau Đổi Mới, mở đường cho bình thường
                hóa với Trung Quốc và phương Tây.
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
          <strong>lấy đi nguồn lực khan hiếm</strong> vốn cần thiết cho phát
          triển kinh tế, đẩy nhanh quá trình sụp đổ của mô hình kế hoạch hóa tập
          trung và buộc Đảng phải suy nghĩ lại về con đường phát triển.
        </p>
      </div>
    </div>
  );
}
