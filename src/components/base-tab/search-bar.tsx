"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";
import { useTabs } from "@/context/tab-context";

const SUGGESTIONS = [
  "Dòng thời gian Lịch sử",
  "Khủng hoảng Kinh tế - Xã hội",
  "Chiến tranh Biên giới",
  "Cải cách Giá-Lương-Tiền",
  "Phiên họp Mất ngủ",
  "Kết nối với Hiện đại",
];

// Convert Vietnamese text to URL-friendly slug
const toSlug = (text: string): string => {
  // Remove Vietnamese diacritics
  const from =
    "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ";
  const to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";

  let slug = text.toLowerCase();

  // Replace Vietnamese characters
  for (let i = 0; i < from.length; i++) {
    slug = slug.replace(new RegExp(from[i], "g"), to[i]);
  }

  // Replace spaces and special characters with hyphens
  slug = slug
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

  return slug;
};

export default function SearchBar() {
  const { updateCurrentTabAddress } = useTabs();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on query
  useEffect(() => {
    if (query.trim()) {
      const querySlug = toSlug(query);
      const filtered = SUGGESTIONS.filter((suggestion) =>
        toSlug(suggestion).includes(querySlug)
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    if (finalQuery.trim()) {
      // Use slug for URL instead of original text
      const slug = toSlug(finalQuery);
      const newAddress = `https://www.google.com/search?q=${encodeURIComponent(
        slug
      )}`;
      updateCurrentTabAddress(newAddress);
      setShowSuggestions(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleQuickButtonClick = (text: string) => {
    handleSearch(text);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl">
      {/* New relative wrapper for input and dropdown */}
      <div className="relative w-full">
        {/* Search input container */}
        <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition">
          <Search className="text-gray-500 w-5 h-5 mr-3" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              if (query.trim() && filteredSuggestions.length > 0) {
                setShowSuggestions(true);
              }
            }}
            type="text"
            placeholder="Search Google or type a URL"
            className="grow focus:outline-none text-gray-700"
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={() => {
              updateCurrentTabAddress(
                "https://gemini.google.com/app/vnr202-assistance"
              );
            }}
          >
            <Sparkles className="text-gray-500 w-5 h-5 cursor-pointer hover:text-gray-700" />
          </button>
        </div>

        {/* Dropdown suggestions */}
        {showSuggestions && (
          <div
            ref={dropdownRef}
            className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
              >
                <Search className="text-gray-400 w-4 h-4 mr-3" />
                <span className="text-gray-700">{suggestion}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick search buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-2xl">
        {SUGGESTIONS.map((text, index) => (
          <button
            key={index}
            onClick={() => handleQuickButtonClick(text)}
            className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-800 hover:ring-1 hover:ring-gray-300 transition"
          >
            {text}
          </button>
        ))}
      </div>

      {/* Language links */}
      <p className="text-sm text-gray-600 mt-6">
        Google offered in:{" "}
        <span className="text-blue-700 cursor-pointer hover:underline">
          Tiếng Việt
        </span>{" "}
        <span className="text-blue-700 cursor-pointer hover:underline">
          Français
        </span>{" "}
        <span className="text-blue-700 cursor-pointer hover:underline">
          繁體中文
        </span>
      </p>
    </div>
  );
}
