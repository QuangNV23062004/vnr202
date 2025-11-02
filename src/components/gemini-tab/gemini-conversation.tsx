import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

interface Message {
  from: "user" | "AI";
  text: string;
  timestamp: Date;
}

export default function GeminiConversation({
  messages,
  isThinking,
}: {
  messages: Message[];
  isThinking?: boolean;
}) {
  // refs for scrolling
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll to bottom when messages or thinking state change
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages, isThinking]);

  if (messages.length === 0 && !isThinking) {
    return (
      <div className="flex flex-col items-center text-center mt-20">
        <h2 className="text-5xl font-semibold text-blue-600 mb-2">Xin chào</h2>
        <h4 className="text-md italic text-blue-500 mb-12">
          Tôi sẵn sàng giải đáp mọi thắc mắc của bạn về Lịch sử Đảng Cộng sản
          Việt Nam
        </h4>
      </div>
    );
  }

  return (
    // Parent likely sets a flex container height; ensure this component can grow and scroll
    <div ref={containerRef} className="flex-1 min-h-0 w-full">
      <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto p-6 h-full overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {/* AI message */}
            {msg.from === "AI" && (
              <>
                <div className="mt-1 text-blue-500 flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <div className="flex flex-col gap-1 max-w-[80%]">
                  <div className="bg-transparent text-gray-800 text-[15px] leading-relaxed whitespace-pre-wrap break-words">
                    {msg.text}
                  </div>
                  <div className="text-xs text-gray-400">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </>
            )}

            {/* User message */}
            {msg.from === "user" && (
              <div className="flex flex-col items-end gap-1 max-w-[70%]">
                <div className="bg-[#eef2ff] text-gray-800 px-4 py-2.5 rounded-2xl rounded-tr-none shadow-sm text-sm whitespace-pre-wrap break-words">
                  {msg.text}
                </div>
                <div className="text-xs text-gray-400">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Thinking/Loading Animation */}
        {isThinking && (
          <div className="flex items-start gap-2 justify-start">
            <div className="mt-1 text-blue-500 flex-shrink-0">
              <Sparkles size={20} />
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-2xl max-w-[70%]">
              <div className="flex items-center gap-1 h-4">
                <style jsx>{`
                  @keyframes bounce {
                    0%,
                    80%,
                    100% {
                      transform: translateY(0);
                      opacity: 0.6;
                    }
                    40% {
                      transform: translateY(-8px);
                      opacity: 1;
                    }
                  }
                  .dot {
                    animation: bounce 1.4s infinite ease-in-out;
                  }
                  .dot:nth-child(1) {
                    animation-delay: -0.32s;
                  }
                  .dot:nth-child(2) {
                    animation-delay: -0.16s;
                  }
                `}</style>
                <div className="dot w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="dot w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="dot w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500 ml-1">
                Gemini is thinking...
              </span>
            </div>
          </div>
        )}

        {/* sentinel to scroll to */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
