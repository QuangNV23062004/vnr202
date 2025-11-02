// Create a new component: TabContentRenderer.tsx
"use client";

import SearchWrapper from "../base-tab/search-wrapper";
import SearchResults from "../search-tab/search-result";
import NotFound from "../not-found-tab/not-found";
import GeminiWrapper from "../gemini-tab/gemini-wrapper";

//Content Tab placeholders, can be changes later if wanted
import DongThoiGian from "../content-tab/dong-thoi-gian/dong-thoi-gian-wrapper";
import MatNgu from "../content-tab/mat-ngu/mat-ngu";
import ThoiKyBaoCap from "../content-tab/thoi-ky-bao-cap/thoi-ky-bao-cap";
import LamPhat774 from "../content-tab/lam-phat-774/lam-phat-774-wrapper";
import KetNoiHienTai from "../content-tab/ket-noi-hien-tai/ket-noi-hien-tai";
import KhungHoangKinhTe from "../content-tab/khung-hoang-kinh-te/khung-hoang-kinh-te";
import ChienTranhBienGioi from "../content-tab/chien-tranh-bien-gioi/chien-tranh-bien-gioi";
import CaiCachGiaLuongTien from "../content-tab/cai-cach-gia-luong-tien/cai-cach-gia-luong-tien";
interface TabContentRendererProps {
  address: string;
}

export default function TabContentRenderer({
  address,
}: TabContentRendererProps) {
  // Parse the address to determine what to render
  const url = new URL(
    address.startsWith("http") ? address : `https://${address}`
  );

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
      case "/dong-thoi-gian-1975-1986":
        return <DongThoiGian />;
      case "/khung-hoang-kinh-te-xa-hoi":
        return <KhungHoangKinhTe />;
      case "/chien-tranh-bien-gioi":
        return <ChienTranhBienGioi />;
      case "/cai-cach-gia-luong-tien":
        return <CaiCachGiaLuongTien />;
      case "/giai-ma-lam-phat-774":
        return <LamPhat774 />;
      case "/phien-hop-mat-ngu-10-1985":
        return <MatNgu />;
      case "/ky-uc-thoi-bao-cap":
        return <ThoiKyBaoCap />;
      case "/ket-noi-voi-hien-dai":
        return <KetNoiHienTai />;
    }
  }

  // 404 page
  return <NotFound />;
}
