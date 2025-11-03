"use client";

import React, { useState } from "react";
import {
  TrendingDown,
  AlertTriangle,
  Factory,
  Users,
  BookOpen,
  Lightbulb,
  ExternalLink,
  FileText,
  Circle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  MapPin,
  Pin,
} from "lucide-react";
import { useTabs } from "@/context/tab-context";
import Header from "../common/header";

export default function KhungHoangKinhTe() {
  const [activeSection, setActiveSection] = useState<
    "objective" | "subjective" | "mechanism" | "references"
  >("objective");
  const { updateCurrentTabAddress, openTab } = useTabs();

  const handleNavigate = (e: React.MouseEvent, url: string, title: string) => {
    e.preventDefault();

    // Check if middle click or ctrl/cmd click (should open in new tab)
    if (e.button === 1 || e.ctrlKey || e.metaKey) {
      // Open in new tab
      const newTabId = `tab-${Date.now()}`;
      openTab(newTabId, title, url);
    } else {
      // Open in current tab
      updateCurrentTabAddress(url);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-red-50">
      <Header></Header>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-3">
            <TrendingDown className="w-8 h-8 text-amber-600" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">
              CQ7.2 - Phân tích Lý thuyết
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Khủng hoảng Kinh tế - Xã hội (1975-1986)
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Phân tích nguyên nhân khách quan và chủ quan dẫn đến khủng hoảng,
            đặc biệt là sai lầm trong tư duy kế hoạch hóa tập trung
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection("objective")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "objective"
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Nguyên nhân Khách quan
            </button>
            <button
              onClick={() => setActiveSection("subjective")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "subjective"
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Nguyên nhân Chủ quan
            </button>
            <button
              onClick={() => setActiveSection("mechanism")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "mechanism"
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Cơ chế Bao cấp
            </button>
            <button
              onClick={() => setActiveSection("references")}
              className={`px-4 py-4 text-sm font-medium border-b-2 transition ${
                activeSection === "references"
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Tài liệu Tham khảo
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeSection === "objective" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-amber-600" />
                Nguyên nhân Khách quan
              </h2>

              <div className="space-y-6">
                {/* War aftermath */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    1. Hậu quả Chiến tranh
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Cơ sở hạ tầng bị phá hủy nghiêm trọng: đường xá, cầu
                        cống, nhà máy, khu công nghiệp
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Thiệt hại về người: hàng triệu người chết, bị thương,
                        khuyết tật
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Nền nông nghiệp tàn phá: bom mìn, chất độc hóa học làm
                        đất đai hoang hóa
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Nền kinh tế miền Nam còn theo mô hình thị trường, khác
                        biệt hoàn toàn với miền Bắc
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Border wars */}
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    2. Chiến tranh Biên giới (CQ7.3)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Đóng quân 200,000 binh sĩ tại Campuchia (1978-1989)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>Xung đột biên giới với Trung Quốc (1979-1989)</span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Chi tiêu quốc phòng chiếm ~15-25% ngân sách nhà nước
                        (~20% GDP, 1976-1985), lấy đi nguồn lực cho phát triển
                      </span>
                    </li>
                  </ul>
                </div>

                {/* International isolation */}
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    3. Cô lập Quốc tế
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Cấm vận kinh tế từ phương Tây do vấn đề Campuchia
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>Mất nguồn viện trợ và đầu tư nước ngoài</span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Viện trợ từ Liên Xô chiếm ~60-65% tổng viện trợ song
                        phương (1976-1985)
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Natural disasters */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    4. Thiên tai & Điều kiện Tự nhiên
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Hạn hán, lũ lụt thường xuyên làm mất mùa (1977, 1978,
                        1984, 1985)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-amber-600 fill-amber-600 mt-0.5 shrink-0" />
                      <span>
                        Thiếu công nghệ và thiết bị hiện đại để chống chọi thiên
                        tai
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-3">Kết luận</h3>
              <p className="text-gray-700 leading-relaxed">
                Các nguyên nhân khách quan tạo ra một{" "}
                <strong className="text-amber-600">
                  môi trường kinh tế vô cùng khắc nghiệt
                </strong>{" "}
                cho Việt Nam sau thống nhất. Tuy nhiên, đây chưa phải là nguyên
                nhân chính dẫn đến khủng hoảng - nhiều quốc gia khác cũng trải
                qua chiến tranh và khó khăn tương tự nhưng vẫn phục hồi nhanh
                hơn.{" "}
                <strong className="text-red-600">
                  Nguyên nhân chủ quan mới là yếu tố quyết định.
                </strong>
              </p>
            </div>
          </div>
        )}

        {activeSection === "subjective" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-red-600" />
                Nguyên nhân Chủ quan - Sai lầm trong Tư duy
              </h2>

              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600 mb-8">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Đây là{" "}
                  <strong className="text-red-600">
                    nguyên nhân then chốt
                  </strong>{" "}
                  dẫn đến khủng hoảng. Lãnh đạo Đảng và Nhà nước áp dụng{" "}
                  <strong>giáo điều</strong> mô hình kế hoạch hóa tập trung theo
                  kiểu Liên Xô một cách <strong>máy móc</strong>, không phù hợp
                  với điều kiện Việt Nam.
                </p>
              </div>

              <div className="space-y-6">
                {/* Dogmatic thinking */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    1. Tư duy Giáo điều
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Sao chép máy móc mô hình Liên Xô:</strong> Áp
                        dụng kế hoạch hóa tập trung một cách giáo điều, không
                        xem xét đặc thù của Việt Nam (nông nghiệp nhỏ, công
                        nghiệp kém phát triển)
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Phủ nhận quy luật thị trường:</strong> Coi thị
                        trường là "tàn dư tư bản chủ nghĩa", cần xóa bỏ hoàn
                        toàn → loại bỏ cơ chế giá cả, cung cầu
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Chủ quan duy ý chí:</strong> Tin rằng có thể
                        "xây dựng CNXH" chỉ bằng ý chí, không cần điều kiện kinh
                        tế-xã hội phù hợp
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Forced collectivization */}
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    2. Cải tạo XHCN vội vàng
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Hợp tác hóa nông nghiệp cưỡng bức:</strong> Ép
                        buộc nông dân vào hợp tác xã trước khi có điều kiện →
                        năng suất giảm mạnh, nông dân kháng cự tiêu cực
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>
                          Cải tạo công thương nghiệp miền Nam quá nhanh:
                        </strong>{" "}
                        Không tôn trọng giai đoạn chuyển tiếp, gây đổ vỡ nền
                        kinh tế miền Nam
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Xóa bỏ kinh tế tư nhân:</strong> Dẹp bỏ tiểu
                        thương, thợ thủ công → giảm sản xuất, khan hiếm hàng hóa
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Centralized planning errors */}
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    3. Sai lầm trong Kế hoạch hóa Tập trung
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Ưu tiên nặng nề:</strong> Tập trung đầu tư vào
                        công nghiệp nặng, bỏ qua nông nghiệp và công nghiệp nhẹ
                        → mất cân đối nghiêm trọng
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Kế hoạch phi thực tế:</strong> Đặt chỉ tiêu cao
                        vút không phù hợp với khả năng thực tế → thất bại liên
                        tục
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Bao cấp bình quân:</strong> Trả lương, phân phối
                        theo "bình quân chủ nghĩa" → mất động lực lao động, năng
                        suất thấp
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Quản lý quan liêu, cứng nhắc:</strong> Mọi quyết
                        định đều do Trung ương quyết định → chậm trễ, thiếu linh
                        hoạt, lãng phí
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Lack of understanding */}
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    4. Thiếu hiểu biết về Kinh tế thị trường
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Không hiểu quy luật giá trị:</strong> Định giá
                        bằng hành chính, không theo cung-cầu → giá sai lệch,
                        khan hiếm trầm trọng
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Circle className="w-4 h-4 text-red-600 fill-red-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Không hiểu vai trò lợi ích vật chất:</strong>{" "}
                        Coi động lực vật chất là "tư tưởng tư sản" → người lao
                        động không có động lực
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Critical Insight */}
            <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-lg p-8 border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-red-600" />
                Nhận định Quan trọng
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-red-600">
                  Tư duy giáo điều, chủ quan
                </strong>{" "}
                trong việc áp dụng mô hình kế hoạch hóa tập trung là{" "}
                <strong>nguyên nhân gốc rễ</strong> của khủng hoảng. Đây chính
                là
                <strong className="text-red-600">"tư duy cũ"</strong> mà sau này
                Đảng phải trả giá đắt và buộc phải thay đổi trong Đổi Mới 1986.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nếu không có những sai lầm chủ quan này, các khó khăn khách quan
                có thể được vượt qua. Nhưng với cơ chế bao cấp cứng nhắc, mọi
                khó khăn đều trở thành <strong>khủng hoảng toàn diện</strong>.
              </p>
            </div>
          </div>
        )}

        {activeSection === "mechanism" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Factory className="w-7 h-7 text-amber-600" />
                Cơ chế Bao cấp - Kế hoạch hóa Tập trung
              </h2>

              <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600 mb-8">
                <p className="text-gray-800 leading-relaxed">
                  <strong>Cơ chế bao cấp</strong> là hệ thống quản lý kinh tế
                  theo mô hình kế hoạch hóa tập trung, trong đó{" "}
                  <strong>Nhà nước quyết định tất cả</strong>: sản xuất gì, bao
                  nhiêu, giá bao nhiêu, ai được sử dụng. Người dân và doanh
                  nghiệp <strong>không có quyền tự quyết</strong>.
                </p>
              </div>

              <div className="space-y-6">
                {/* How it works */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Cơ chế Bao cấp hoạt động như thế nào?
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">
                        Trong Sản xuất
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Nhà nước quyết định sản xuất gì, bao nhiêu</li>
                        <li>• Cấp phát nguyên vật liệu theo chỉ tiêu</li>
                        <li>• Thu mua sản phẩm theo giá định trước</li>
                        <li>• Không quan tâm hiệu quả, chất lượng</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3">
                        Trong Phân phối
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Tem phiếu: gạo, thịt, đường, vải...</li>
                        <li>• Lương bổng theo cấp bậc, seniority</li>
                        <li>• Không phụ thuộc năng suất lao động</li>
                        <li>• "Bình quân chủ nghĩa" - ai cũng như nhau</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3">
                        Trong Giá cả
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Nhà nước định giá bằng hành chính</li>
                        <li>• Không theo cung-cầu thị trường</li>
                        <li>• Giá không phản ánh giá trị thực</li>
                        <li>• Dẫn đến khan hiếm, chợ đen</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-3">
                        Trong Quản lý
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Tất cả quyết định từ Trung ương</li>
                        <li>• Quan liêu, giấy tờ, thủ tục phức tạp</li>
                        <li>• Không linh hoạt, chậm trễ</li>
                        <li>• Lãng phí, tham nhũng</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Consequences */}
                <div className="bg-red-50 rounded-lg p-8 border border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Hậu quả của Cơ chế Bao cấp
                  </h3>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Mất động lực Sản xuất
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Làm nhiều hay ít đều được trả lương như nhau → không
                          ai muốn làm việc chăm chỉ → năng suất lao động cực
                          thấp
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Lãng phí Nguồn lực
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Nhà nước quyết định đầu tư vào đâu, nhưng không hiệu
                          quả → nhiều dự án lãng phí, thất bại (nhà máy thép
                          Thái Nguyên, xi măng...)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Khan hiếm Hàng hóa
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Giá thấp hơn giá trị → thiếu hụt → chợ đen phát triển
                          → lạm phát ẩn
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Quan liêu, Tham nhũng
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Hệ thống cấp phát → cán bộ có quyền lực lớn → tham
                          nhũng, "xin-cho"
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Đời sống Nhân dân khó khăn
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Thiếu lương thực, thực phẩm → xếp hàng mua tem phiếu →
                          "thời bao cấp" trở thành ký ức đau thương
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Example */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Pin className="w-5 h-5 text-gray-900" />
                    Ví dụ Minh họa: Hợp tác xã Nông nghiệp
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Trước hợp tác xã:</strong> Nông dân tự canh tác,
                      được hưởng toàn bộ sản phẩm → chăm sóc cẩn thận, năng suất
                      cao.
                    </p>
                    <p>
                      <strong>Sau hợp tác xã:</strong> Đất đai, công cụ sản xuất
                      được "công hữu hóa". Nông dân làm việc chung, nhận công
                      điểm (bình quân). Sản phẩm thu hoạch phải nộp cho Nhà
                      nước.
                    </p>
                    <p className="text-red-600 font-semibold">
                      → Kết quả: Nông dân làm việc qua loa, năng suất giảm mạnh.
                      Nhiều nơi nông dân phá hoại, làm ăn "tự chữa" (trồng
                      riêng) → HTX thất bại.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final verdict */}
            <div className="bg-linear-to-r from-amber-50 to-red-50 rounded-lg p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kết luận: Cơ chế Bao cấp - Nguyên nhân Gốc rễ của Khủng hoảng
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cơ chế bao cấp kế hoạch hóa tập trung{" "}
                <strong className="text-red-600">
                  không phù hợp với điều kiện Việt Nam
                </strong>{" "}
                - một nước nông nghiệp chậm phát triển, vừa trải qua chiến
                tranh. Thay vì giải phóng năng lực sản xuất, nó{" "}
                <strong>kìm hãm mọi sáng tạo</strong>, biến nền kinh tế thành{" "}
                <strong>cỗ máy quan liêu, kém hiệu quả</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Đỉnh cao của sự thất bại là{" "}
                <strong className="text-red-600">
                  cải cách giá-lương-tiền 1985 (CQ8.1)
                </strong>{" "}
                - "cú sốc" cuối cùng khiến Đảng buộc phải thừa nhận:{" "}
                <strong>Cơ chế bao cấp đã lỗi thời, cần phải Đổi Mới</strong>.
              </p>
            </div>
          </div>
        )}

        {activeSection === "references" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7 text-amber-600" />
                Tài liệu Tham khảo Chính thức
              </h2>

              <div className="space-y-6">
                {/* Vietnamese Sources */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Nguồn Trong nước
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Văn kiện Đại hội VI (1986)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Phân tích sai lầm trong kế hoạch hóa tập trung và khủng
                        hoảng kinh tế
                      </p>
                      <a
                        href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-v/bao-cao-chinh-tri-cua-ban-chap-hanh-trung-uong-khoa-iv-tai-dai-hoi-dai-bieu-toan-quoc-lan-thu-v-cua-dang-1498"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Tư liệu Văn kiện Đảng
                      </a>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Nghị quyết 06-NQ/TW (1978)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Về nhiệm vụ kinh tế năm 1978
                      </p>
                      <a
                        href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iv/nghi-quyet-so-06-nqtw-ngay-711978-hoi-nghi-lan-thu-ba-ban-chap-hanh-trung-uong-dang-khoa-iv-ve-nhiem-vu-kinh-te-nam-1072"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Tư liệu Văn kiện Đảng
                      </a>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Chỉ thị 100-CT/TW (1981)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Về sản xuất hàng hóa trong nông nghiệp và thất bại hợp
                        tác xã
                      </p>
                      <a
                        href="https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Chi-thi-100-CT-TW-1981-Cai-tien-cong-tac-khoan-mo-rong-san-pham-den-nhom-lao-dong-hop-tac-xa-nong-nghiep-247358.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Tư liệu Văn kiện Đảng
                      </a>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Lịch sử Việt Nam 1975-2000
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Viện Lịch sử Đảng - NXB Chính trị Quốc gia, 2008
                      </p>
                      <a
                        href="https://nxbctqg.org.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        NXB Chính trị Quốc gia
                      </a>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Niên giám Thống kê 1976-1985
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Tổng cục Thống kê - Dữ liệu thiên tai, nông nghiệp, lạm
                        phát
                      </p>
                      <a
                        href="https://www.gso.gov.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Tổng cục Thống kê
                      </a>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Tạp chí Cộng sản (1986)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Phân tích khủng hoảng và đường lối Đổi Mới
                      </p>
                      <a
                        href="https://www.tapchicongsan.org.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Tạp chí Cộng sản
                      </a>
                    </div>
                  </div>
                </div>

                {/* International Sources */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Nguồn Quốc tế
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Wikipedia. (n.d.). <em>Economic history of Vietnam</em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Chi tiết khủng hoảng
                        1976-1986: lạm phát, năng suất thấp, thiếu hàng hóa.
                        Miền Bắc kế hoạch hóa vs miền Nam thị trường tự do.
                      </p>
                      <a
                        href="https://en.wikipedia.org/wiki/Economic_history_of_Vietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Xem tài liệu
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Wikipedia. (n.d.). <em>Đổi Mới</em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Lạm phát {">"}700%, tăng
                        trưởng chậm dẫn đến Đổi Mới 1986. Hậu quả bao cấp: lạm
                        phát ẩn, chợ đen.
                      </p>
                      <a
                        href="https://en.wikipedia.org/wiki/%C4%90%E1%BB%95i_M%E1%BB%9Bi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Xem tài liệu
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Wikipedia. (n.d.). <em>Five-Year Plans of Vietnam</em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Kế hoạch 5 năm 1976-1981 thất
                        bại, mất cân đối nghiêm trọng.
                      </p>
                      <a
                        href="https://en.wikipedia.org/wiki/Five-Year_Plans_of_Vietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Xem tài liệu
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Wikipedia. (n.d.). <em>Agriculture in Vietnam</em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Hợp tác hóa cưỡng bức, năng
                        suất giảm 7% cuối 1970s. Năng suất lao động giảm, thiếu
                        ăn.
                      </p>
                      <a
                        href="https://en.wikipedia.org/wiki/Agriculture_in_vietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Xem tài liệu
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        World Bank. (n.d.).{" "}
                        <em>Military expenditure (% of GDP) - Vietnam</em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Dữ liệu lịch sử chi tiêu quốc
                        phòng ~20% GDP (điều chỉnh 1976-1985).
                      </p>
                      <a
                        href="https://data.worldbank.org/indicator/MS.MIL.XPND.GD.ZS?locations=VN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Xem dữ liệu
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Dell, M., & Querubin, P. (2017).{" "}
                        <em>The long-run impact of bombing Vietnam</em>
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Journal of Development Economics.
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Phá hủy hạ tầng chiến tranh,
                        ảnh hưởng trường học và dân số lâu dài.
                      </p>
                      <a
                        href="https://www.sciencedirect.com/science/article/abs/pii/S0304387810000817"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        ScienceDirect
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Malesky, E., & London, J. (2014).{" "}
                        <em>
                          "No Responsibility and No Rice": The Rise and Fall of
                          Agricultural Collectivization in Vietnam
                        </em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Thất bại collectivization,
                        kháng cự của nông dân, năng suất giảm mạnh.
                      </p>
                      <a
                        href="https://www.researchgate.net/publication/42851820_No_Responsibility_and_No_Rice_The_Rise_and_Fall_of_Agricultural_Collectivization_in_Vietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        ResearchGate
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        IMF. (2002).{" "}
                        <em>VI Stabilization and Adjustment Policies</em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Cải cách giá-lương-tiền 1985
                        thất bại, làm trầm trọng khủng hoảng.
                      </p>
                      <a
                        href="https://www.elibrary.imf.org/display/book/9781557755384/ch006.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        IMF eLibrary
                      </a>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Los Angeles Times. (1985).{" "}
                        <em>
                          Government Eliminates Subsidies in Economic Reform
                        </em>
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Nội dung:</strong> Cải cách 1985 xóa trợ cấp gây
                        "cú sốc", quan liêu, lãng phí, đời sống khó khăn.
                      </p>
                      <a
                        href="https://www.latimes.com/archives/la-xpm-1985-09-30-fi-17632-story.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LA Times Archives
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Topics Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Khám phá thêm
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={(e) =>
                handleNavigate(
                  e,
                  "https://vnr202-nhom5.com/chien-tranh-bien-gioi",
                  "CQ7.3: Chiến tranh Biên giới"
                )
              }
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(
                    e,
                    "https://vnr202-nhom5.com/chien-tranh-bien-gioi",
                    "CQ7.3: Chiến tranh Biên giới"
                  );
                }
              }}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-lg transition text-left group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
                    CQ7.3 - Khủng hoảng Bên ngoài
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                    Chiến tranh Biên giới
                  </h3>
                  <p className="text-sm text-gray-600">
                    Vấn đề Campuchia và gánh nặng quốc phòng trong giai đoạn
                    khủng hoảng
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition ml-4 shrink-0" />
              </div>
            </button>

            <button
              onClick={(e) =>
                handleNavigate(
                  e,
                  "https://vnr202-nhom5.com/cai-cach-gia-luong-tien",
                  "CQ8.1: Cải cách Giá-Lương-Tiền"
                )
              }
              onMouseDown={(e) => {
                if (e.button === 1) {
                  handleNavigate(
                    e,
                    "https://vnr202-nhom5.com/cai-cach-gia-luong-tien",
                    "CQ8.1: Cải cách Giá-Lương-Tiền"
                  );
                }
              }}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600 hover:shadow-lg transition text-left group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">
                    CQ8.1 - Đỉnh cao Khủng hoảng
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    Cải cách Giá-Lương-Tiền (9/1985)
                  </h3>
                  <p className="text-sm text-gray-600">
                    "Cú sốc" thất bại và lạm phát 774.7% - hậu quả của tư duy cũ
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition ml-4 shrink-0" />
              </div>
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center flex items-center justify-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Tip: Ctrl+Click (Cmd+Click on Mac) hoặc Middle-click để mở trong tab
            mới
          </p>
        </div>
      </div>
    </div>
  );
}
