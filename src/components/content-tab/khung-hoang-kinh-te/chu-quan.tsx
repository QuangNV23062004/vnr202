export default function ChuQuan() {
  const causes = [
    {
      title: "1. Tư duy Giáo điều",
      color: "red",
      items: [
        "Sao chép máy móc mô hình Liên Xô: Áp dụng kế hoạch hóa tập trung mà không xem xét đặc thù Việt Nam",
        "Phủ nhận quy luật thị trường: Coi thị trường là 'tàn dư tư bản chủ nghĩa', cần xóa bỏ hoàn toàn",
        "Chủ quan duy ý chí: Tin rằng có thể 'xây dựng CNXH' chỉ bằng ý chí",
      ],
    },
    {
      title: "2. Cải tạo XHCN Vội vàng",
      color: "orange",
      items: [
        "Hợp tác hóa nông nghiệp cưỡng bức: Ép buộc nông dân vào HTX trước khi có điều kiện",
        "Cải tạo công thương nghiệp miền Nam quá nhanh: Không tôn trọng giai đoạn chuyển tiếp",
        "Xóa bỏ kinh tế tư nhân: Dẹp bỏ tiểu thương, thợ thủ công",
      ],
    },
    {
      title: "3. Sai lầm Kế hoạch hóa Tập trung",
      color: "purple",
      items: [
        "Ưu tiên nặng nề: Tập trung đầu tư vào công nghiệp nặng, bỏ qua nông nghiệp",
        "Kế hoạch phi thực tế: Đặt chỉ tiêu cao vút không phù hợp với khả năng thực tế",
        "Bao cấp bình quân: Trả lương, phân phối theo 'bình quân chủ nghĩa'",
        "Quản lý quan liêu: Mọi quyết định từ Trung ương → chậm trễ, thiếu linh hoạt",
      ],
    },
    {
      title: "4. Thiếu hiểu biết Kinh tế Thị trường",
      color: "blue",
      items: [
        "Không hiểu quy luật giá trị: Định giá bằng hành chính, không theo cung–cầu",
        "Không hiểu vai trò lợi ích vật chất: Coi động lực vật chất là 'tư tưởng tư sản'",
      ],
    },
  ];

  const colorMap = {
    red: "border-red-500 bg-red-50",
    orange: "border-orange-500 bg-orange-50",
    purple: "border-purple-500 bg-purple-50",
    blue: "border-blue-500 bg-blue-50",
  };

  return (
    <div className="space-y-8">
      <div className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h2 className="text-lg text-gray-600 mb-4">
            Đây là các <strong>nguyên nhân then chốt</strong> dẫn đến khủng
            hoảng. Lãnh đạo Đảng và Nhà nước áp dụng giáo điều mô hình kế hoạch
            hóa tập trung theo kiểu Liên Xô một cách máy móc, không phù hợp với
            điều kiện Việt Nam.
          </h2>
        </div>
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
                  <li key={i} className="text-gray-700 text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key insight */}
      </div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-gray-900 mb-3">Nhận định Quan trọng</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          <strong className="text-red-600">Tư duy giáo điều, chủ quan</strong>{" "}
          là <strong>nguyên nhân gốc rễ</strong> của khủng hoảng. Đây chính là
          <strong className="text-red-600"> &quot;tư duy cũ&quot;</strong> mà
          sau này Đảng phải trả giá đắt.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Nếu không có những sai lầm chủ quan này, các khó khăn khách quan có
          thể được vượt qua.
        </p>
      </div>
    </div>
  );
}
