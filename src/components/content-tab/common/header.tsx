import { useTabs } from "@/context/tab-context";
import React from "react";

export default function Header() {
  const { activeTabId, updateTabAddress, availableTabs } = useTabs();
  const currentTab = availableTabs.find((tab) => tab.id === activeTabId);
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="font-bold text-lg text-primary">Đổi Mới 1986</div>
        <div className="flex gap-6">
          <button
            onClick={() => {
              updateTabAddress(activeTabId, "vnr202-nhom5.com");
            }}
            className={
              currentTab?.address === "vnr202-nhom5.com"
                ? "text-foreground hover:text-primary transition"
                : "text-muted-foreground hover:text-primary transition"
            }
          >
            Trang Chủ
          </button>
          <button
            onClick={() => {
              updateTabAddress(
                activeTabId,
                "vnr202-nhom5.com/dong-thoi-gian-1975-1986"
              );
            }}
            className={
              currentTab?.address ===
              "vnr202-nhom5.com/dong-thoi-gian-1975-1986"
                ? "text-foreground hover:text-primary transition"
                : "text-muted-foreground hover:text-primary transition"
            }
          >
            Dòng Thời Gian
          </button>
          <button
            onClick={() => {
              updateTabAddress(
                activeTabId,
                "vnr202-nhom5.com/khung-hoang-kinh-te-xa-hoi"
              );
            }}
            className={
              currentTab?.address ===
              "vnr202-nhom5.com/khung-hoang-kinh-te-xa-hoi"
                ? "text-foreground hover:text-primary transition"
                : "text-muted-foreground hover:text-primary transition"
            }
          >
            CQ7.2
          </button>
          <button
            onClick={() => {
              updateTabAddress(
                activeTabId,
                "vnr202-nhom5.com/chien-tranh-bien-gioi"
              );
            }}
            className={
              currentTab?.address === "vnr202-nhom5.com/chien-tranh-bien-gioi"
                ? "text-foreground hover:text-primary transition"
                : "text-muted-foreground hover:text-primary transition"
            }
          >
            CQ7.3
          </button>
          <button
            onClick={() => {
              updateTabAddress(
                activeTabId,
                "vnr202-nhom5.com/cai-cach-gia-luong-tien"
              );
            }}
            className={
              currentTab?.address === "vnr202-nhom5.com/cai-cach-gia-luong-tien"
                ? "text-foreground hover:text-primary transition"
                : "text-muted-foreground hover:text-primary transition"
            }
          >
            CQ8.1
          </button>
        </div>
      </div>
    </nav>
  );
}
