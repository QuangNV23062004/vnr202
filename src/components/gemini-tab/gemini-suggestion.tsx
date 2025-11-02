import { Sparkles } from "lucide-react";
import React from "react";

const SUGGESTIONS = [
  "Dòng thời gian Lịch sử Đảng",
  "Thời kỳ Bao cấp",
  "Phiên họp Trung ương 6",
  "Đổi mới 1986",
  "Chiến thắng lịch sử",
];

export default function GeminiSuggestion({
  onSuggestionClick,
}: {
  onSuggestionClick?: (suggestion: string) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3 mt-4 mb-2 flex-wrap">
      {SUGGESTIONS.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSuggestionClick?.(suggestion)}
          className={`px-4 py-2.5 ${
            index === 0
              ? "bg-gray-200 hover:bg-gray-300 flex items-center gap-2"
              : "bg-gray-100 hover:bg-gray-200"
          } rounded-full transition-colors`}
        >
          {index === 0 && <Sparkles size={16} className="text-gray-700" />}
          <span className="text-sm text-gray-800">{suggestion}</span>
        </button>
      ))}
    </div>
  );
}
