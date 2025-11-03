import { AlertTriangle, Circle } from "lucide-react";
import React from "react";

const causes = [
  {
    title: "1. Hậu quả Chiến tranh",
    color: "red",
    items: [
      "Cơ sở hạ tầng bị phá hủy nghiêm trọng: đường xá, cầu cống, nhà máy",
      "Thiệt hại về người: hàng triệu người chết, bị thương, khuyết tật",
      "Nền nông nghiệp tàn phá: bom mìn, chất độc hóa học làm đất đai hoang hóa",
      "Nền kinh tế miền Nam khác biệt hoàn toàn với miền Bắc",
    ],
  },
  {
    title: "2. Chiến tranh Biên giới",
    color: "orange",
    items: [
      "Đóng quân 200,000 binh sĩ tại Campuchia (1978–1989)",
      "Xung đột biên giới với Trung Quốc (1979–1989)",
      "Chi tiêu quốc phòng chiếm ~15–25% ngân sách nhà nước",
    ],
  },
  {
    title: "3. Cô lập Quốc tế",
    color: "blue",
    items: [
      "Cấm vận kinh tế từ phương Tây do vấn đề Campuchia",
      "Mất nguồn viện trợ và đầu tư nước ngoài",
      "Viện trợ từ Liên Xô chiếm ~60–65% tổng viện trợ song phương",
    ],
  },
  {
    title: "4. Thiên tai & Điều kiện Tự nhiên",
    color: "green",
    items: [
      "Hạn hán, lũ lụt thường xuyên làm mất mùa (1977, 1978, 1984, 1985)",
      "Thiếu công nghệ và thiết bị hiện đại để chống chọi thiên tai",
    ],
  },
];

const colorMap = {
  red: "border-red-500 bg-red-50",
  orange: "border-orange-500 bg-orange-50",
  purple: "border-purple-500 bg-purple-50",
  blue: "border-blue-500 bg-blue-50",
  green: "border-green-500 bg-green-50",
};

export default function KhachQuan() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-lg text-gray-600 mb-4">
          Bên cạnh đó, cũng tồn tại những{" "}
          <strong>nguyên nhân khách quan</strong> tác động đến khủng hoảng kinh
          tế - xã hội. Tình hình thế giới biến động phức tạp, khủng hoảng năng
          lượng và chiến tranh lạnh đã ảnh hưởng tiêu cực đến nền kinh tế Việt
          Nam vốn còn non trẻ và phụ thuộc nhiều vào viện trợ bên ngoài.
        </h2>

        <div className="space-y-6">
          <div className="space-y-4">
            {causes.map((cause, idx) => (
              <div
                key={idx}
                className={`border-1 p-6 rounded-lg shadow-md ${
                  colorMap[cause.color as keyof typeof colorMap]
                }`}
              >
                <h3
                  className="font-bold text-gray-900 mb-4"
                  style={{
                    color: cause.color,
                    opacity: 0.9,
                  }}
                >
                  {cause.title}
                </h3>
                <ul className="space-y-2">
                  {cause.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 shadow-md">
        <h3 className="font-semibold text-gray-900 mb-3">Kết luận</h3>
        <p className="text-gray-700 leading-relaxed">
          Các nguyên nhân khách quan tạo ra một{" "}
          <strong className="text-amber-600">
            môi trường kinh tế vô cùng khắc nghiệt
          </strong>{" "}
          cho Việt Nam sau thống nhất. Tuy nhiên, đây chưa phải là nguyên nhân
          chính dẫn đến khủng hoảng - nhiều quốc gia khác cũng trải qua chiến
          tranh và khó khăn tương tự nhưng vẫn phục hồi nhanh hơn.{" "}
          <strong className="text-red-600">
            Nguyên nhân chủ quan mới là yếu tố quyết định.
          </strong>
        </p>
      </div>
    </div>
  );
}
