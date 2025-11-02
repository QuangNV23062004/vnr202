"use client";

import { X, Plus } from "lucide-react";
import { useTabs } from "../../context/tab-context";
import { useEffect } from "react";

export default function TabBar() {
  const { availableTabs, activeTabId, setActiveTabId, closeTab, openTab } = useTabs();

  const handleNewTab = () => {
    const newTabId = `tab-${Date.now()}`;
    openTab(newTabId, "Google", "https://www.google.com");
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+T or Cmd+T - New Tab
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        handleNewTab();
      }
      // Ctrl+W or Cmd+W - Close Tab
      if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
        e.preventDefault();
        if (activeTabId !== "0") {
          closeTab(activeTabId);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTabId]);

  useEffect(() => {}, [availableTabs]);
  return (
    <div className="flex items-end bg-gray-200 px-2 pt-2 border-b">
      {availableTabs.map((tab) => (
        <div
          key={tab.id}
          className={`
            flex items-center gap-2 px-4 py-2 cursor-pointer
            transition-all duration-150 min-w-[150px] max-w-[250px]
            border-t border-l border-r rounded-t-md
            ${
              activeTabId === tab.id
                ? "bg-white text-black border-gray-300 -mb-[1px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-50 border-gray-300"
            }
          `}
          onClick={() => setActiveTabId?.(tab.id)}
          onMouseDown={(e) => {
            // Middle click to close tab
            if (e.button === 1 && tab.id !== "0" && !tab.canNotClose) {
              e.preventDefault();
              closeTab(tab.id);
            }
          }}
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
              className="hover:bg-red-100 hover:text-red-600 rounded p-1 transition-colors shrink-0"
              title="Close tab (Ctrl+W or Middle-click)"
            >
              <X size={14} />
            </button>
          )}
        </div>
      ))}

      {/* New Tab Button */}
      <button
        onClick={handleNewTab}
        className="flex items-center justify-center px-3 py-2 ml-1 bg-gray-100 hover:bg-gray-50 border-t border-l border-r border-gray-300 rounded-t-md transition-colors group"
        title="New tab (Ctrl+T)"
      >
        <Plus size={16} className="text-gray-600 group-hover:text-gray-900" />
      </button>
    </div>
  );
}
