import React from "react";
import { timelineEvents } from "./dong-thoi-gian-data";
import { ChevronLeft } from "lucide-react";
import { useTabs } from "@/context/tab-context";
import Header from "../common/header";

export default function DongThoiGian() {
  const { activeTabId, updateTabAddress } = useTabs();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header></Header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://thanhnien.mediacdn.vn/Uploaded/congthang/2015_05_17/temphieu_PUHU.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.6) contrast(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={() => {
              updateTabAddress(activeTabId, "vnr202-nhom5.com");
            }}
            className="inline-flex gap-2 items-center text-gray-300 hover:text-red-500 transition-colors duration-300 mb-8"
          >
            <ChevronLeft className="w-5 h-5" />
            Quay Lại
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Dòng Thời Gian
          </h1>
          <p className="text-xl text-white/90 font-medium mb-4">
            1975 - 1986: Mười Năm Khủng Hoảng
          </p>
          <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">
            Theo dõi những sự kiện quan trọng, chính sách thay đổi, và cột mốc
            lịch sử dẫn tới Đổi Mới năm 1986. Mỗi sự kiện đánh dấu một bước
            ngoặt trong lịch sử Việt Nam hiện đại.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50"></div>

            {/* Timeline events */}
            <div className="space-y-12 relative z-10">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <div
                      className={`${event.bgColor} border ${event.borderColor} rounded-lg p-6 backdrop-blur-sm hover:shadow-lg transition`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-2xl font-bold ${event.color}`}>
                          {event.year}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {event.month}
                        </span>
                      </div>
                      <h3
                        className={`text-lg font-semibold mb-2 ${event.color}`}
                      >
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-0 flex justify-center relative">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-background ${event.color.replace(
                        "text-",
                        "bg-"
                      )} absolute top-8`}
                    ></div>
                  </div>

                  {/* Empty space */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Những Cột Mốc Quan Trọng
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Khủng Hoảng Bên Ngoài (1978-1979)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hai cuộc chiến tranh liên tiếp với Campuchia và Trung Quốc tiêu
                tốn hàng tỷ đô la, làm suy kiệt nền kinh tế và buộc quân đội
                phải duy trì trạng thái quân sự cao.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Sai Lầm Cấu Trúc (1975-1985)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Duy trì cơ chế bao cấp và kế hoạch hóa tập trung quá lâu mà
                không cải cách sâu sắc. Các cách tính đơn vị, định mức, giá cả
                không phù hợp với thực tế.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-destructive mb-3">
                Thất Bại Cải Cách (1985)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cải cách giá-lương-tiền năm 1985 là lần cuối cùng cố gắng giải
                quyết vấn đề trong khuôn khổ cơ chế bao cấp. Kết quả là lạm phát
                lên tới 774%.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Bước Ngoặt: Đổi Mới (1986)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thất bại toàn diện buộc Đảng phải thừa nhận sai lầm và chuyển
                hướng sang kinh tế thị trường định hướng XHCN, mở ra kỷ nguyên
                phát triển mới.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>Bài Trình Bày Lịch Sử Việt Nam | Chủ Đề: Đổi Mới 1986</p>
          <p className="mt-2 text-sm">
            Dòng Thời Gian 1975-1986 | Khám Phá Chi Tiết Qua CQ7.2, CQ7.3 và
            CQ8.1
          </p>
        </div>
      </footer>
    </main>
  );
}
