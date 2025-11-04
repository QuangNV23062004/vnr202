import React from "react";
import { inflationData } from "./lam-phat-data";
import { gdpGrowthData } from "./gdp-growth-data";

export default function TongQuan({
  expandedYear,
  setExpandedYear,
}: {
  expandedYear: number | null;
  setExpandedYear: (year: number | null) => void;
}) {
  // Inflation chart data
  const maxRate = Math.max(...inflationData.map((d) => d.rate));
  const chartWidth = 800;
  const chartHeight = 400;
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const width = chartWidth - margin.left - margin.right;
  const height = chartHeight - margin.top - margin.bottom;
  const xStep = width / (inflationData.length - 1);

  const points = inflationData.map((data, index) => {
    const x = margin.left + index * xStep;
    const y = margin.top + height - (data.rate / maxRate) * height;
    return { x, y, year: data.year, rate: data.rate, note: data.note };
  });

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  // GDP growth chart data
  const maxGdpRate = Math.max(...gdpGrowthData.map((d) => Math.abs(d.rate)));
  const minGdpRate = Math.min(...gdpGrowthData.map((d) => d.rate));
  const gdpXStep = width / (gdpGrowthData.length - 1);
  const zeroY = margin.top + height / 2; // Middle line for 0%

  const gdpPoints = gdpGrowthData.map((data, index) => {
    const x = margin.left + index * gdpXStep;
    const y = zeroY - (data.rate / (maxGdpRate * 2)) * height;
    return { x, y, year: data.year, rate: data.rate, note: data.note };
  });

  const gdpPolylinePoints = gdpPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <>
      {/* The Shock - What happened */}
      <div className="bg-white rounded-md shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          "Cú sốc" Giá-Lương-Tiền - Chuyện gì đã xảy ra?
        </h2>
        <div className="bg-red-50 rounded-md p-6 shadow-md mb-8">
          <p className="text-gray-800 leading-relaxed mb-4">
            Tháng <strong>9/1985</strong>, Bộ Chính trị quyết định thực hiện cải
            cách "giá-lương-tiền" với hy vọng khắc phục tình trạng khan hiếm
            hàng hóa và lạm phát ẩn. Nhưng do thiếu hiểu biết về kinh tế thị
            trường, cải cách đã{" "}
            <strong className="text-red-600">thất bại thảm hại</strong>.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-md p-6 shadow-md">
            <h3 className="font-bold text-blue-900 mb-3">Tăng Giá</h3>
            <p className="text-gray-700 text-sm mb-2">
              Tăng giá mạnh các hàng hóa thiết yếu: gạo tăng nhiều lần, thực
              phẩm tăng cao
            </p>
            <p className="text-blue-600 font-semibold text-xl">Tăng gấp nhiều lần</p>
            <p className="text-xs text-gray-500 mt-1">Theo Quyết định 217-HĐBT</p>
          </div>
          <div className="bg-green-50 rounded-md p-6 shadow-md">
            <h3 className="font-bold text-green-900 mb-3">Tăng Lương</h3>
            <p className="text-gray-700 text-sm mb-2">
              Lương danh nghĩa tăng, nhưng giá trị
              thực <strong className="text-red-600">giảm mạnh</strong>
            </p>
            <p className="text-green-600 font-semibold text-xl">Tăng không theo kịp giá</p>
            <p className="text-xs text-red-600 mt-1 font-semibold">
              Đời sống giảm sút
            </p>
          </div>
          <div className="bg-purple-50 rounded-md p-6 shadow-md">
            <h3 className="font-bold text-purple-900 mb-3">Phát hành Tiền</h3>
            <p className="text-gray-700 text-sm mb-2">
              In tiền tăng mạnh để trả
              lương, bù đắp thâm hụt ngân sách
            </p>
            <p className="text-purple-600 font-semibold text-xl">Tăng rất cao</p>
          </div>
        </div>
        <div className="bg-red-100 rounded-md p-6 shadow-md">
          <h3 className="text-lg font-bold text-red-900 mb-3">
            Kết quả Thảm họa
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <strong>Lương tăng chậm hơn giá:</strong> Đời sống người lao động
              giảm mạnh
            </li>
            <li>
              <strong>Lạm phát vượt tầm kiểm soát:</strong> Đạt{" "}
              <strong className="text-red-600">774.7%</strong> trong 12 tháng
              sau cải cách (9/1985 - 9/1986)
            </li>
            <li>
              <strong>Khan hiếm trầm trọng hơn:</strong> Hàng hóa biến mất khỏi
              thị trường, chợ đen phát triển
            </li>
            <li>
              <strong>Mất niềm tin:</strong> Người dân hoang mang, mất lòng tin
              vào Nhà nước
            </li>
          </ul>
        </div>
      </div>
      {/* Inflation Chart */}
      <div className="bg-white rounded-md shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Lạm phát 774.7% - Con số Kinh hoàng (9/1985 - 9/1986)
        </h2>
        <div className="mb-8">
          <svg
            className="w-full h-96"
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* X-axis */}
            <line
              x1={margin.left}
              y1={margin.top + height}
              x2={margin.left + width}
              y2={margin.top + height}
              stroke="gray"
            />
            {/* Y-axis */}
            <line
              x1={margin.left}
              y1={margin.top}
              x2={margin.left}
              y2={margin.top + height}
              stroke="gray"
            />
            {/* Line */}
            <polyline
              points={polylinePoints}
              stroke="red"
              fill="none"
              strokeWidth="2"
            />
            {points.map((p, index) => (
              <g key={index}>
                <title>{`${p.year}: ${p.rate}% - ${p.note}`}</title>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="5"
                  fill="red"
                  className="cursor-pointer"
                  onClick={() =>
                    setExpandedYear(expandedYear === p.year ? null : p.year)
                  }
                />
                <text
                  x={p.x}
                  y={p.y - 10}
                  textAnchor="middle"
                  fontSize="16"
                  fill="gray"
                >
                  {p.rate}%
                </text>
                <text
                  x={p.x}
                  y={margin.top + height + 20}
                  textAnchor="middle"
                  fontSize="14"
                  fill="gray"
                >
                  {p.year}
                </text>
              </g>
            ))}
          </svg>
          <div className="mt-4 text-sm text-gray-600 text-center">
            Tỷ lệ Lạm phát (%)
          </div>
        </div>
        {expandedYear !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-md">
            {(() => {
              const data = inflationData.find((d) => d.year === expandedYear);
              return data ? (
                <>
                  <strong>{data.year}:</strong> {data.rate}% - {data.note}
                </>
              ) : null;
            })()}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-md p-6 shadow-md">
            <h3 className="font-semibold text-orange-900 mb-3">
              Lạm phát 774% có nghĩa là gì?
            </h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                Nếu bạn có <strong>100 đồng</strong> tháng 9/1985:
              </p>
              <p className="text-red-600 font-semibold">
                → Tháng 9/1986 chỉ còn <strong>giá trị ~11.5 đồng</strong>
              </p>
              <p className="mt-4">
                Nếu tô phở giá <strong>10 đồng</strong> tháng 9/1985:
              </p>
              <p className="text-red-600 font-semibold">
                → Tháng 9/1986 giá <strong>~87 đồng</strong>
              </p>
            </div>
          </div>
          <div className="bg-red-50 rounded-md p-6 shadow-md">
            <h3 className="font-semibold text-red-900 mb-3">
              Hậu quả với Người dân
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Lương danh nghĩa tăng, nhưng không mua được gì</li>
              <li>Tiền tiết kiệm bay hơi trong vài tháng</li>
              <li>Phải đổi USD, vàng để giữ giá trị</li>
              <li>Xếp hàng cả ngày vẫn không mua được hàng</li>
              <li>Nhiều người phải bỏ thành phố về quê</li>
            </ul>
          </div>
        </div>
      </div>
      {/* GDP Growth Chart */}
      <div className="bg-white rounded-md shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Tăng Trưởng GDP 1976-1986 - Khủng Hoảng Kinh Tế
        </h2>
        <div className="mb-8">
          <svg
            className="w-full h-96"
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* X-axis */}
            <line
              x1={margin.left}
              y1={zeroY}
              x2={margin.left + width}
              y2={zeroY}
              stroke="gray"
              strokeWidth="2"
            />
            {/* Y-axis */}
            <line
              x1={margin.left}
              y1={margin.top}
              x2={margin.left}
              y2={margin.top + height}
              stroke="gray"
            />
            {/* Zero line label */}
            <text
              x={margin.left - 30}
              y={zeroY + 5}
              textAnchor="middle"
              fontSize="12"
              fill="gray"
            >
              0%
            </text>
            {/* Line */}
            <polyline
              points={gdpPolylinePoints}
              stroke="#2563eb"
              fill="none"
              strokeWidth="3"
            />
            {gdpPoints.map((p, index) => (
              <g key={index}>
                <title>{`${p.year}: ${p.rate}% - ${p.note}`}</title>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="6"
                  fill={p.rate < 0 ? "#dc2626" : "#2563eb"}
                  className="cursor-pointer"
                  onClick={() =>
                    setExpandedYear(expandedYear === p.year ? null : p.year)
                  }
                />
                <text
                  x={p.x}
                  y={p.y - 15}
                  textAnchor="middle"
                  fontSize="14"
                  fill={p.rate < 0 ? "#dc2626" : "#2563eb"}
                  fontWeight="bold"
                >
                  {p.rate}%
                </text>
                <text
                  x={p.x}
                  y={margin.top + height + 20}
                  textAnchor="middle"
                  fontSize="14"
                  fill="gray"
                >
                  {p.year}
                </text>
              </g>
            ))}
          </svg>
          <div className="mt-4 text-sm text-gray-600 text-center">
            Tỷ lệ Tăng trưởng GDP (%)
          </div>
        </div>
        {expandedYear !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-md">
            {(() => {
              const gdpData = gdpGrowthData.find((d) => d.year === expandedYear);
              return gdpData ? (
                <>
                  <strong>{gdpData.year}:</strong> {gdpData.rate}% - {gdpData.note}
                </>
              ) : null;
            })()}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-md p-6 shadow-md">
            <h3 className="font-semibold text-blue-900 mb-3">
              Tăng Trưởng Không Ổn Định
            </h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                <strong>1976:</strong> Tăng trưởng cao 16.8% sau thống nhất
              </p>
              <p>
                <strong>1980:</strong> Suy thoái -2.9% (GDP giảm)
              </p>
              <p>
                <strong>1986:</strong> Chỉ còn 2.8%, khủng hoảng toàn diện
              </p>
            </div>
          </div>
          <div className="bg-red-50 rounded-md p-6 shadow-md">
            <h3 className="font-semibold text-red-900 mb-3">
              Nguyên Nhân Suy Giảm
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Chiến tranh biên giới tiêu hao nguồn lực</li>
              <li>Cơ chế bao cấp kém hiệu quả</li>
              <li>Cô lập quốc tế, mất viện trợ</li>
              <li>Cải cách giá-lương-tiền thất bại (1985)</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Why did it fail? */}
      <div className="bg-white rounded-md shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Tại sao Cải cách Thất bại?
        </h2>
        <div className="space-y-4">
          <div className="pl-6 py-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              1. Thiếu hiểu biết về Kinh tế thị trường
            </h3>
            <p className="text-gray-700">
              Lãnh đạo tưởng rằng chỉ cần <strong>tăng giá + tăng lương</strong>{" "}
              là giải quyết được vấn đề. Nhưng không hiểu rằng:{" "}
              <strong className="text-red-600">
                Không có hàng hóa → tăng giá cũng vô nghĩa
              </strong>
              .
            </p>
          </div>
          <div className="pl-6 py-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              2. Không cải cách Cơ chế Sản xuất
            </h3>
            <p className="text-gray-700">
              Cơ chế bao cấp vẫn giữ nguyên →{" "}
              <strong>không khuyến khích sản xuất</strong> → không tăng được
              nguồn cung → tăng giá chỉ làm trầm trọng thêm khan hiếm.
            </p>
          </div>
          <div className="pl-6 py-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              3. In tiền để Bù đắp Thâm hụt
            </h3>
            <p className="text-gray-700">
              Ngân sách không đủ trả lương → <strong>in thêm tiền</strong> →{" "}
              <strong className="text-red-600">lạm phát tăng vọt</strong> → vòng
              xoáy ác tính.
            </p>
          </div>
          <div className="pl-6 py-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              4. Thiếu Chuẩn bị và Đồng bộ
            </h3>
            <p className="text-gray-700">
              Cải cách được thực hiện <strong>đột ngột</strong>, không có dự trữ
              hàng hóa, không có kế hoạch ổn định thị trường → gây{" "}
              <strong>sốc</strong> toàn xã hội.
            </p>
          </div>
        </div>
      </div>
      {/* The Crisis Point */}
      <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 rounded-md p-8 shadow-md">
        <h2 className="text-2xl font-bold text-red-900 mb-6">
          Điểm Bùng phát - "Cái giá phải trả" cho Tư duy Cũ
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-md p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Từ Nguyên nhân đến Hậu quả: Mối liên hệ Logic
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    <span className="text-amber-600">[CQ7.2]</span> Tư duy Giáo
                    điều - Cơ chế Bao cấp
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Áp dụng máy móc mô hình kế hoạch hóa tập trung, phủ nhận quy
                    luật thị trường, dẫn đến nền kinh tế kém hiệu quả, khan hiếm
                    hàng hóa
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center text-red-600 text-2xl font-bold">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    <span className="text-orange-600">[CQ7.3]</span> Chiến tranh
                    Biên giới
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Khuếch đại khủng hoảng nội tại: lấy đi nguồn lực khan hiếm,
                    cô lập quốc tế, đẩy nền kinh tế vào tình trạng nguy kịch
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center text-red-600 text-2xl font-bold">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    <span className="text-red-600">[CQ8.1]</span> Cải cách
                    Giá-Lương-Tiền - "Cú sốc" Thất bại
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Nỗ lực cuối cùng để cứu vãn cơ chế bao cấp → thất bại thảm
                    hại → lạm phát 774% → đỉnh cao của khủng hoảng
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center text-green-600 text-2xl font-bold">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Buộc phải Đổi Mới (1986)
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Thất bại toàn diện khiến Đảng thừa nhận: cơ chế bao cấp
                    không còn đường sống →{" "}
                    <strong className="text-green-600">
                      phải đổi mới tư duy, đổi mới cơ chế
                    </strong>{" "}
                    → Đại hội VI (12/1986) ra đời chính sách Đổi Mới
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-600 text-white rounded-md p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">Bài học Lịch sử</h3>
            <p className="leading-relaxed">
              Cải cách giá-lương-tiền 1985 không chỉ là một chính sách thất bại,
              mà chính là <strong>"cái giá phải trả"</strong> cho tư duy giáo
              điều, cứng nhắc trong quản lý kinh tế. Nó chứng minh rằng:{" "}
              <strong>Không thể duy trì cơ chế bao cấp</strong> trong điều kiện
              Việt Nam. Đây chính là{" "}
              <strong>yếu tố thúc đẩy trực tiếp, bắt buộc</strong> Đảng phải
              tiến hành Đổi Mới - một bước ngoặt lịch sử của dân tộc.
            </p>
          </div>
        </div>
      </div>
      {/* Connection to Doi Moi */}
      <div className="bg-green-50 rounded-md p-8 shadow-md">
        <h2 className="text-2xl font-bold text-green-900 mb-6">
          Từ Thất bại đến Đổi Mới
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Sau cú sốc giá-lương-tiền, tình hình kinh tế-xã hội xuống đến đáy.
            Các phiên họp Bộ Chính trị diễn ra gay gắt, tranh luận về tương lai
            đất nước (→ <strong>Phiên họp Mất ngủ tháng 10/1985</strong>).
          </p>
          <p>
            Tháng 12/1986,{" "}
            <strong className="text-green-600">Đại hội Đảng lần thứ VI</strong>{" "}
            họp tại Hà Nội, chính thức thông qua{" "}
            <strong>chính sách Đổi Mới</strong>:
          </p>
          <ul className="space-y-2 ml-6">
            <li>
              Chuyển từ cơ chế kế hoạch hóa tập trung sang{" "}
              <strong>kinh tế thị trường định hướng XHCN</strong>
            </li>
            <li>
              Thừa nhận vai trò của <strong>quy luật giá trị, cung-cầu</strong>
            </li>
            <li>
              Khuyến khích <strong>kinh tế tư nhân, kinh tế hộ gia đình</strong>
            </li>
            <li>Mở cửa, hội nhập kinh tế quốc tế</li>
          </ul>
          <p className="text-green-600 font-semibold pt-4">
            → Đổi Mới đã cứu Việt Nam khỏi khủng hoảng, mở ra thời kỳ phát triển
            mới.
          </p>
        </div>
      </div>
    </>
  );
}
