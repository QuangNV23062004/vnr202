export default function CoChe() {
  const mechanisms = [
    {
      title: "Trong Sản xuất",
      color: "blue",
      items: [
        "Nhà nước quyết định sản xuất gì, bao nhiêu",
        "Cấp phát nguyên vật liệu theo chỉ tiêu",
        "Thu mua sản phẩm theo giá định trước",
        "Không quan tâm hiệu quả, chất lượng",
      ],
    },
    {
      title: "Trong Phân phối",
      color: "green",
      items: [
        "Tem phiếu: gạo, thịt, đường, vải...",
        "Lương bổng theo cấp bậc, seniority",
        "Không phụ thuộc năng suất lao động",
        "'Bình quân chủ nghĩa' — ai cũng như nhau",
      ],
    },
    {
      title: "Trong Giá cả",
      color: "purple",
      items: [
        "Nhà nước định giá bằng hành chính",
        "Không theo cung–cầu thị trường",
        "Giá không phản ánh giá trị thực",
        "Dẫn đến khan hiếm, chợ đen",
      ],
    },
    {
      title: "Trong Quản lý",
      color: "red",
      items: [
        "Tất cả quyết định từ Trung ương",
        "Quan liêu, giấy tờ, thủ tục phức tạp",
        "Không linh hoạt, chậm trễ",
        "Lãng phí, tham nhũng",
      ],
    },
  ];

  const colorMap = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    red: "bg-red-50 border-red-200",
  };

  return (
    <div className="space-y-8">
      {/* Definition */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 shadow-sm">
        <p className="text-gray-800 leading-relaxed">
          <strong>Cơ chế bao cấp</strong> là hệ thống quản lý kinh tế theo mô
          hình kế hoạch hóa tập trung, trong đó{" "}
          <strong>Nhà nước quyết định tất cả</strong>: sản xuất gì, bao nhiêu,
          giá bao nhiêu, ai được sử dụng.
        </p>
      </div>

      <div className="bg-white p-6 rounded-md shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">
          Cơ chế hoạt động như thế nào?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {mechanisms.map((mech, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-md border shadow-md ${
                colorMap[mech.color as keyof typeof colorMap]
              }`}
            >
              <h4 className="font-semibold text-gray-900 mb-3">{mech.title}</h4>
              <ul className="space-y-2">
                {mech.items.map((item, i) => (
                  <li key={i} className="text-gray-700 text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Consequences */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-gray-900 mb-6">Hậu quả của Cơ chế</h3>
        <div className="space-y-4">
          {[
            {
              num: 1,
              title: "Mất động lực Sản xuất",
              desc: "Làm nhiều hay ít đều được trả lương như nhau → năng suất cực thấp",
            },
            {
              num: 2,
              title: "Lãng phí Nguồn lực",
              desc: "Nhiều dự án lãng phí, thất bại (nhà máy thép, xi măng...)",
            },
            {
              num: 3,
              title: "Khan hiếm Hàng hóa",
              desc: "Giá thấp hơn giá trị → thiếu hụt → chợ đen phát triển",
            },
            {
              num: 4,
              title: "Quan liêu, Tham nhũng",
              desc: "Cán bộ có quyền lực lớn → tham nhũng, xin–cho",
            },
            {
              num: 5,
              title: "Đời sống Nhân dân Khó khăn",
              desc: "Thiếu lương thực, thực phẩm → xếp hàng mua tem phiếu",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.num}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-gray-900 mb-3">Kết luận</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Cơ chế bao cấp kế hoạch hóa tập trung{" "}
          <strong className="text-red-600">
            không phù hợp với điều kiện Việt Nam
          </strong>
          . Thay vì giải phóng năng lực sản xuất, nó{" "}
          <strong>kìm hãm mọi sáng tạo</strong>, biến nền kinh tế thành{" "}
          <strong>cỗ máy quan liêu, kém hiệu quả</strong>.
        </p>
      </div>
    </div>
  );
}
