// Create a new component: TabContentRenderer.tsx
"use client";

import { useEffect } from "react";
import { useTabs } from "@/context/tab-context";
import SearchWrapper from "../base-tab/search-wrapper";
import SearchResults from "../search-tab/search-result";
import NotFound from "../not-found-tab/not-found";
import GeminiWrapper from "../gemini-tab/gemini-wrapper";

//Content Tab placeholders, can be changes later if wanted
import DongThoiGian from "../content-tab/dong-thoi-gian/dong-thoi-gian-wrapper";
import KhungHoangKinhTe from "../content-tab/khung-hoang-kinh-te/khung-hoang-kinh-te";
import ChienTranhBienGioi from "../content-tab/chien-tranh-bien-gioi/chien-tranh-bien-gioi";
import CaiCachGiaLuongTien from "../content-tab/cai-cach-gia-luong-tien/cai-cach-gia-luong-tien";
import WatchVideo from "../youtube-tab/watch-video/watch-video";
import BaseYoutube from "../youtube-tab/base-youtube/base-youtube";
import SearchYoutube from "../youtube-tab/search-youtube/search-youtube";
import HomepageWrapper from "../content-tab/home-page/homepage-wrapper";

interface TabContentRendererProps {
  address: string;
  tabId: string;
}

export default function TabContentRenderer({
  address,
  tabId,
}: TabContentRendererProps) {
  const { setTabName } = useTabs();

  // Parse the address to determine what to render
  const url = new URL(
    address.startsWith("http") ? address : `https://${address}`
  );

  // Update tab name based on the current page
  useEffect(() => {
    let tabName = "";

    // Check if domain is google.com
    const isGoogleDomain =
      url.hostname === "www.google.com" || url.hostname === "google.com";

    // Home page - only on Google domain
    if (isGoogleDomain && url.pathname === "/" && !url.search) {
      tabName = "Google";
    }
    // Search results page - only on Google domain
    else if (
      isGoogleDomain &&
      url.pathname === "/search" &&
      url.searchParams.has("q")
    ) {
      const query = url.searchParams.get("q") || "";
      tabName = `${query} - Google Search`;
    }
    // Gemini
    else if (
      url.hostname === "gemini.google.com" &&
      url.pathname === "/app/vnr202-assistance"
    ) {
      tabName = "VNR202 AI Assistant";
    }
    // YouTube pages
    else if (url.hostname === "www.youtube.com") {
      if (url.pathname === "/") {
        tabName = "YouTube";
      } else if (url.pathname === "/watch") {
        tabName = "YouTube"; // Can be updated dynamically with video title
      } else if (url.pathname === "/results") {
        const searchQuery = url.searchParams.get("search_query") || "";
        const decoded = decodeURIComponent(searchQuery);
        tabName = `${decoded} - YouTube`;
      }
    }
    // Custom content pages
    else if (url.hostname === "vnr202-nhom5.com") {
      switch (url.pathname) {
        case "/dong-thoi-gian-1975-1986":
          tabName = "Dòng Thời Gian (1975-1986)";
          break;
        case "/khung-hoang-kinh-te-xa-hoi":
          tabName = "Khủng Hoảng Kinh Tế - Xã Hội";
          break;
        case "/chien-tranh-bien-gioi":
          tabName = "Chiến Tranh Biên Giới";
          break;
        case "/cai-cach-gia-luong-tien":
          tabName = "Cải Cách Giá - Lương - Tiền";
          break;
        case "/":
          tabName = "Đổi Mới 1986 - Trang Chủ";
          break;
        case "/dong-thoi-gian-1975-1986":
          tabName = "Dòng Thời Gian (1975-1986)";
          break;
        default:
          tabName = "404 - Not Found";
      }
    }
    // 404 page
    else {
      tabName = "404 - Not Found";
    }

    if (tabName) {
      setTabName(tabId, tabName);
    }
  }, [address, tabId, setTabName, url]);

  // Check if domain is google.com
  const isGoogleDomain =
    url.hostname === "www.google.com" || url.hostname === "google.com";

  // Home page - only on Google domain
  if (isGoogleDomain && url.pathname === "/" && !url.search) {
    return <SearchWrapper />;
  }

  // Search results page - only on Google domain
  if (
    isGoogleDomain &&
    url.pathname === "/search" &&
    url.searchParams.has("q")
  ) {
    const query = url.searchParams.get("q") || "";
    return <SearchResults query={query} />;
  }

  if (
    url.hostname === "gemini.google.com" &&
    url.pathname === "/app/vnr202-assistance"
  ) {
    return <GeminiWrapper />;
  }

  // Custom content pages for vnr202-nhom5.com domain
  if (url.hostname === "vnr202-nhom5.com") {
    switch (url.pathname) {
      case "/":
        return <HomepageWrapper />;
      case "/dong-thoi-gian-1975-1986":
        return <DongThoiGian />;
      case "/khung-hoang-kinh-te-xa-hoi":
        return <KhungHoangKinhTe />;
      case "/chien-tranh-bien-gioi":
        return <ChienTranhBienGioi />;
      case "/cai-cach-gia-luong-tien":
        return <CaiCachGiaLuongTien />;
    }
  }

  if (url.hostname === "www.youtube.com") {
    switch (url.pathname) {
      case "/":
        return <BaseYoutube />;

      case "/watch":
        return <WatchVideo id={url.searchParams.get("v") || ""} />;

      case "/results":
        const searchQuery = url.searchParams.get("search_query") || "";
        const decoded = decodeURIComponent(searchQuery);
        return <SearchYoutube searchQuery={decoded} />;
    }
  }

  // 404 page
  return <NotFound />;
}
