"use client";

import { X, Plus } from "lucide-react";
import { useTabs } from "../../context/tab-context";
import { useEffect, useState } from "react";

export default function TabBar() {
  const { availableTabs, activeTabId, setActiveTabId, closeTab, openTab, reorderTabs } = useTabs();
  const [draggedTabId, setDraggedTabId] = useState<string | null>(null);
  const [dragOverTabId, setDragOverTabId] = useState<string | null>(null);

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
        const activeTab = availableTabs.find(tab => tab.id === activeTabId);
        if (activeTab && !activeTab.canNotClose) {
          closeTab(activeTabId);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTabId, availableTabs, closeTab]);

  useEffect(() => {}, [availableTabs]);

  const handleDragStart = (e: React.DragEvent, tabId: string) => {
    setDraggedTabId(tabId);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", tabId);
    // Add slight delay to improve drag feel
    setTimeout(() => {
      if (e.target instanceof HTMLElement) {
        e.target.style.opacity = "0.5";
      }
    }, 0);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    if (e.target instanceof HTMLElement) {
      e.target.style.opacity = "1";
    }
    setDraggedTabId(null);
    setDragOverTabId(null);
  };

  const handleDragOver = (e: React.DragEvent, tabId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (draggedTabId && draggedTabId !== tabId) {
      setDragOverTabId(tabId);
    }
  };

  const handleDragLeave = () => {
    setDragOverTabId(null);
  };

  const handleDrop = (e: React.DragEvent, targetTabId: string) => {
    e.preventDefault();
    if (draggedTabId && draggedTabId !== targetTabId) {
      reorderTabs(draggedTabId, targetTabId);
    }
    setDraggedTabId(null);
    setDragOverTabId(null);
  };

  return (
    <div className="flex items-end bg-gray-200 px-2 pt-2 border-b border-gray-300 gap-1">
      {availableTabs.map((tab) => (
        <div
          key={tab.id}
          draggable
          onDragStart={(e) => handleDragStart(e, tab.id)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, tab.id)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, tab.id)}
          className={`
            flex items-center gap-2 px-4 py-2 cursor-pointer
            transition-all duration-150 min-w-[150px] max-w-[250px]
            border-t border-l border-r rounded-t-md
            ${
              activeTabId === tab.id
                ? "bg-gray-50 text-black border-gray-300 -mb-px"
                : "bg-gray-100 text-gray-600 hover:bg-gray-50 border-gray-300"
            }
            ${dragOverTabId === tab.id ? "border-blue-500 border-2" : ""}
            ${draggedTabId === tab.id ? "opacity-50" : ""}
          `}
          onClick={() => setActiveTabId?.(tab.id)}
          onMouseDown={(e) => {
            // Middle click to close tab
            if (e.button === 1 && !tab.canNotClose) {
              e.preventDefault();
              closeTab(tab.id);
            }
          }}
        >
          {/* Tab name */}
          <span className="flex-1 truncate text-sm font-medium">
            {tab.name}
          </span>

          {/* Close button */}
          {!tab.canNotClose && (
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
