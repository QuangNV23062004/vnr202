"use client";
import { useTabs } from "@/context/tab-context";
import { Bell, Upload, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header({
  search,
  onChange,
}: {
  search?: string;
  onChange?: (value: string) => void;
}) {
  const { updateCurrentTabAddress } = useTabs();
  const [tempSearch, setTempSearch] = useState(search || "");
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newAddress = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        tempSearch
      )}`;
      onChange?.(tempSearch);
      updateCurrentTabAddress(newAddress);
    }
  };
  return (
    <header className="border-b border-gray-200 px-4 py-2">
      <div className="max-w-full mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
          onClick={() => {
            updateCurrentTabAddress("https://www.youtube.com/");
          }}
        >
          <Image
            src="/youtube_logo.png"
            alt="YouTube"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold text-gray-800">
            MiniYouTube
          </span>
          <span className="text-md font-light text-gray-500 mb-5">VNR202</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
            <Search className="w-5 h-5 text-gray-600" />
            <input
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="bg-transparent ml-3 outline-none w-full text-sm"
              onKeyDown={onKeyDown}
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Upload className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          <button className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
            N
          </button>
        </div>
      </div>
    </header>
  );
}
