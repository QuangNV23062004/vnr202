"use client";
import { useAIChat } from "@/context/ai-context";
import { ChevronDown, Menu, Sparkles } from "lucide-react";
import React, { useRef, useState } from "react";
import SideBar from "./side-bar";
import GeminiConversation from "./gemini-conversation";
import GeminiSuggestion from "./gemini-suggestion";

export default function GeminiContent() {
  const { messages, isTyping, handleClearMessages, sendMessageOnly } =
    useAIChat();

  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gemini-2.0-flash");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessageOnly(input);
      setInput("");
    }
  };

  return (
    <div className="flex h-screen bg-[#f8f9fa]">
      <aside
        className={`${
          isSidebarOpen ? "w-16" : "w-0"
        } transition-all duration-300 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-6`}
      >
        {isSidebarOpen && (
          <>
            <SideBar
              setIsOpen={setIsSidebarOpen}
              clearable={messages.length !== 0}
              onClearMessages={handleClearMessages}
            />
          </>
        )}
      </aside>

      <main className="flex-1 flex flex-col min-h-0">
        <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0">
          <h1 className="text-xl font-normal text-gray-800 flex items-center gap-2">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className=" text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              >
                <Menu size={24} />
              </button>
            )}
            <span>Gemini</span>
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full">
              <Sparkles size={16} className="text-orange-600" />
              <span className="text-sm text-gray-700">Try Gemini Advanced</span>
            </div>
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-medium">
              U
            </div>
          </div>
        </header>

        {/* Main content area with proper overflow handling */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Conversation area - takes available space and scrolls */}
          <div className="flex-1 overflow-y-auto px-6">
            <GeminiConversation messages={messages} isThinking={isTyping} />
          </div>

          {/* Input area - fixed at bottom with visible overflow for suggestions */}
          <div className="flex-shrink-0 px-6 pb-25 pt-6 bg-[#f8f9fa]">
            <div className="w-full max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5">
                <div className="flex items-start gap-3 mb-4">
                  <Sparkles size={20} className="text-gray-500 mt-1" />
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter a prompt for Gemini"
                    className="flex-1 text-base text-gray-800 placeholder-gray-500 outline-none"
                    onKeyDown={handleKeyDown}
                  />
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() =>
                        setIsModelDropdownOpen(!isModelDropdownOpen)
                      }
                      className="flex items-center gap-1.5 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded-full transition-colors"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isModelDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isModelDropdownOpen && (
                      <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 w-72 z-50">
                        <p className="text-sm font-medium text-gray-700 mb-3">
                          Choose your model
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start justify-between p-3 rounded-lg bg-blue-50 border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors">
                            <div>
                              <p className="font-medium text-gray-900">
                                Fast all-round help
                              </p>
                              <p className="text-sm text-gray-600">
                                gemini-2.0-flash
                              </p>
                            </div>
                            <span className="text-xs font-semibold text-white bg-blue-600 px-2 py-1 rounded-full">
                              Selected
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-gray-400 text-xs">
                  Gemini can make mistakes, so double-check it.
                </span>
              </div>
              <GeminiSuggestion
                onSuggestionClick={(suggestion) => {
                  sendMessageOnly(suggestion);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
