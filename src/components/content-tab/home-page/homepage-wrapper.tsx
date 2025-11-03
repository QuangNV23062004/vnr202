"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "../common/header";
import { useTabs } from "@/context/tab-context";

export default function HomepageWrapper() {
  const { updateCurrentTabAddress, activeTabId } = useTabs();
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header></Header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-30"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="text-sm uppercase tracking-widest text-accent mb-4">
            Lịch Sử Việt Nam
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Đêm Trước Đổi Mới
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Khủng hoảng kinh tế, xã hội và thử nghiệm (1975 – 1986)
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            10 năm sau thống nhất, Việt Nam rơi vào khủng hoảng toàn diện. Bài
            trình bày này phân tích các nguyên nhân khách quan, chủ quan, và con
            đường dẫn tới Đổi Mới năm 1986.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className=" flex flex-row rounded-md bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-6 py-3 text-lg"
              onClick={() => {
                const el = document.getElementById("key-questions");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Bắt Đầu Khám Phá <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Questions */}

      {/* Context Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Bối Cảnh Lịch Sử</h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                10 Năm Đầu Sau Thống Nhất (1975-1985)
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Duy trì cơ chế quan liêu bao cấp quá lâu</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>
                    Chiến tranh biên giới Tây Nam (1978) & Bắc thuộc (1979) →
                    kiệt quệ
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Cấm vận Mỹ & phương Tây → thiếu vốn, công nghệ</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Lạm phát, khan hiếm hàng hóa, đời sống khó khăn</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Kết Quả: Đổi Mới 1986
              </h3>
              <p className="text-muted-foreground">
                Thất bại toàn diện buộc Đảng Cộng sản Việt Nam phải thừa nhận cơ
                chế bao cấp không còn phù hợp. Đại hội VI (tháng 12/1986) quyết
                định chuyển hướng sang kinh tế thị trường định hướng XHCN, mở ra
                kỷ nguyên mới cho sự phát triển của đất nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30" id="key-questions">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Các nội dung chính
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition md:col-span-3">
              <div className="text-accent text-2xl font-bold mb-4">
                Dòng Thời Gian
              </div>
              <h3 className="text-lg font-semibold mb-3">
                1975-1986: Mười Năm Khủng Hoảng
              </h3>
              <p className="text-muted-foreground">
                Khám phá các sự kiện quan trọng, thay đổi chính sách, và cột mốc
                lịch sử dẫn tới Đổi Mới 1986.
              </p>
              <button
                onClick={() => {
                  updateCurrentTabAddress(
                    "vnr202-nhom5.com/dong-thoi-gian-1975-1986"
                  );
                }}
              >
                Xem Dòng Thời Gian →
              </button>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-primary text-2xl font-bold mb-4">CQ7.2</div>
              <h3 className="text-lg font-semibold mb-3">
                Nguyên Nhân Khủng Hoảng
              </h3>
              <p className="text-muted-foreground">
                Phân tích các nguyên nhân khách quan và chủ quan dẫn tới khủng
                hoảng kinh tế-xã hội, đặc biệt sai lầm trong tư duy kế hoạch hóa
                tập trung.
              </p>
              <button
                onClick={() => {
                  updateCurrentTabAddress(
                    "vnr202-nhom5.com/dong-thoi-gian-1975-1986"
                  );
                }}
              >
                {" "}
                Tìm hiểu thêm →
              </button>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition">
              <div className="text-accent text-2xl font-bold mb-4">CQ7.3</div>
              <h3 className="text-lg font-semibold mb-3">
                Chiến Tranh Biên Giới
              </h3>
              <p className="text-muted-foreground">
                Khủng hoảng bên ngoài: chiến tranh bảo vệ biên giới và can thiệp
                Campuchia, hậu quả kinh tế-chính trị nặng nề.
              </p>
              <button
                onClick={() => {
                  updateCurrentTabAddress(
                    "vnr202-nhom5.com/chien-tranh-bien-gioi"
                  );
                }}
              >
                Tìm hiểu thêm →
              </button>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition">
              <div className="text-primary text-2xl font-bold mb-4">CQ8.1</div>
              <h3 className="text-lg font-semibold mb-3">Cải Cách Thất Bại</h3>
              <p className="text-muted-foreground">
                Đỉnh cao khủng hoảng: cải cách giá-lương-tiền (1985) và lạm phát
                774%, thúc đẩy Đổi Mới 1986.
              </p>
              <button
                onClick={() => {
                  updateCurrentTabAddress(
                    "vnr202-nhom5.com/cai-cach-gia-luong-tien"
                  );
                }}
              >
                {" "}
                Tìm hiểu thêm →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>Bài Trình Bày Lịch Sử Việt Nam | Chủ Đề: Đổi Mới 1986</p>
          <p className="mt-2 text-sm">
            Tìm hiểu chi tiết qua các trang Dòng Thời Gian, CQ7.2, CQ7.3 và
            CQ8.1
          </p>
        </div>
      </footer>
    </main>
  );
}
