"use client";

import { Plus, X } from "lucide-react";
import { useTabs } from "../../context/tab-context";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
export default function TabBar() {
  const { availableTabs, activeTabId, setActiveTabId, closeTab, openTab } =
    useTabs();

  useEffect(() => {}, [availableTabs]);

  return (
    <div className="flex items-end bg-gray-200 px-2 pt-2 border-b border-gray-300 gap-1">
      {availableTabs.map((tab) => (
        <div
          key={tab.id}
          className={`
            flex items-center gap-2 px-4 py-2 cursor-pointer
            transition-all duration-150 min-w-[150px] max-w-[250px]
            border-t border-l border-r rounded-t-md
            ${
              activeTabId === tab.id
                ? "bg-gray-50 text-black border-gray-300 -mb-[1px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-50 border-gray-300"
            }
          `}
          onClick={() => setActiveTabId?.(tab.id)}
        >
          {/* Tab name */}
          <span className="flex-1 truncate text-sm font-medium">
            {tab.name}
          </span>

          {/* Close button (hide for main tab) */}
          {tab.id !== "0" && !tab.canNotClose && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab?.(tab.id);
              }}
              className="hover:bg-gray-200 rounded p-1 transition-colors flex-shrink-0"
              title="Close tab"
            >
              <X size={14} />
            </button>
          )}
        </div>
      ))}
      <div>
        <button
          onClick={() => openTab(uuid(), "Google", "https://www.google.com")}
        >
          <Plus className="text-gray-400 hover:text-gray-500" />
        </button>
      </div>
    </div>
  );
}
