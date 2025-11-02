"use client";
import { Globe, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useTabs } from "@/context/tab-context";
import { useState, useEffect } from "react";

export default function TabAddress({
  url,
  setUrl,
}: {
  url: string;
  setUrl: (url: string) => void;
}) {
  const [currentUrl, setCurrentUrl] = useState(url);
  const { goBack, goForward, canGoBack, canGoForward } = useTabs();

  // Sync currentUrl with url prop when tab changes
  useEffect(() => {
    setCurrentUrl(url);
  }, [url]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setUrl(currentUrl);
    }
  };

  return (
    <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 border-b border-gray-200 justify-evenly">
      {/* Back/Forward buttons */}
      <div className="flex gap-1">
        <button
          onClick={() => goBack()}
          disabled={!canGoBack()}
          className={`p-2 rounded-full transition ${
            canGoBack()
              ? "hover:bg-gray-200 text-gray-700"
              : "text-gray-300 cursor-not-allowed"
          }`}
          title="Back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goForward()}
          disabled={!canGoForward()}
          className={`p-2 rounded-full transition ${
            canGoForward()
              ? "hover:bg-gray-200 text-gray-700"
              : "text-gray-300 cursor-not-allowed"
          }`}
          title="Forward"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Favicon */}
      <div>
        <Globe className="text-gray-500" />
      </div>

      {/* Address bar */}
      <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition">
        <input
          value={currentUrl}
          onChange={(e) => setCurrentUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search Google or type a URL"
          className="flex-grow focus:outline-none text-gray-700"
        />
      </div>
    </div>
  );
}
