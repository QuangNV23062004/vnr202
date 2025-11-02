"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
export interface TabData {
  id: string;
  name: string;
  address: string;
  tabContent?: ReactNode;
  canNotClose?: boolean;
  routeType?: "home" | "search" | "notfound" | "custom";
  searchQuery?: string;
  history?: string[]; // Optional: for back/forward navigation
  historyIndex?: number; // Optional: current position in history
}

interface TabContextType {
  activeTabId: string;
  availableTabs: TabData[];
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
  openTab: (id: string, name: string, address: string) => void;
  closeTab: (id: string) => void;
  updateTabAddress: (id: string, newAddress: string) => void;
  updateCurrentTabAddress: (newAddress: string) => void;
  goBack: (tabId?: string) => void;
  goForward: (tabId?: string) => void;
  canGoBack: (tabId?: string) => boolean;
  canGoForward: (tabId?: string) => boolean;
  setTabName: (id: string, name: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTabs must be used within TabProvider");
  return context;
};

// Helper function to get tab name from address
const getTabName = (address: string, currentName: string): string => {
  try {
    const url = new URL(
      address.startsWith("http") ? address : `https://${address}`
    );

    if (url.searchParams.has("q")) {
      return `${url.searchParams.get("q")} - Google Search`;
    } else if (url.pathname === "/") {
      return "Google";
    }
    // For other cases, return the current name or a default
    return currentName || url.hostname;
  } catch {
    // If URL parsing fails, return the address or current name
    return currentName || address;
  }
};

export default function TabProvider({ children }: { children: ReactNode }) {
  const [activeTabId, setActiveTabId] = useState("0");
  const [availableTabs, setAvailableTabs] = useState<TabData[]>([
    {
      id: "0",
      name: "Google",
      canNotClose: true,
      address: "https://www.google.com",
      history: ["https://www.google.com"],
      historyIndex: 0,
    },
  ]);

  // Open a new tab or switch to existing tab
  const openTab = (id: string, name: string, address: string) => {
    const existingTab = availableTabs.find((tab) => tab.id === id);

    if (existingTab) {
      // Tab already exists, just switch to it
      setActiveTabId(id);
      return;
    }

    if (availableTabs.length >= 5) {
      toast.error("Maximum of 5 tabs allowed.");
      return;
    }

    // Create new tab
    const newTab: TabData = {
      id,
      name,
      address,
      history: [address],
      historyIndex: 0,
    };

    setAvailableTabs((prev) => [...prev, newTab]);
    setActiveTabId(id);
  };

  // Close a tab
  const closeTab = (id: string) => {
    // Prevent closing the main tab
    if (id === "0") return;

    setAvailableTabs((prevTabs) => {
      const tabIndex = prevTabs.findIndex((tab) => tab.id === id);
      if (tabIndex === -1) return prevTabs;

      // Remove the closed tab
      const updatedTabs = prevTabs.filter((tab) => tab.id !== id);

      // If we're closing the active tab, switch to another one
      if (id === activeTabId) {
        const newActiveTab = updatedTabs[tabIndex - 1] || updatedTabs[0];
        setActiveTabId(newActiveTab.id);
      }

      return updatedTabs;
    });
  };

  const updateTabAddress = (id: string, newAddress: string) => {
    setAvailableTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id !== id) return tab;

        // Check if the new address is the same as the current one
        const currentAddress = tab.history?.[tab.historyIndex || 0];
        if (currentAddress === newAddress) {
          // Don't add duplicate, just return the tab as is
          return tab;
        }

        // Add to history
        const newHistory =
          tab.history?.slice(0, (tab.historyIndex || 0) + 1) || [];
        newHistory.push(newAddress);

        // Get new name
        const newName = getTabName(newAddress, tab.name);

        return {
          ...tab,
          address: newAddress,
          name: newName,
          history: newHistory,
          historyIndex: newHistory.length - 1,
        };
      })
    );
  };

  // Update the current active tab's address
  const updateCurrentTabAddress = (newAddress: string) => {
    updateTabAddress(activeTabId, newAddress);
  };

  const goBack = (tabId?: string) => {
    const targetTabId = tabId || activeTabId;
    setAvailableTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id !== targetTabId) return tab;

        const currentIndex = tab.historyIndex ?? 0;
        if (currentIndex > 0) {
          const newIndex = currentIndex - 1;
          const newAddress = tab.history?.[newIndex] || tab.address;
          const newName = getTabName(newAddress, tab.name);
          return {
            ...tab,
            address: newAddress,
            name: newName,
            historyIndex: newIndex,
          };
        }
        return tab;
      })
    );
  };

  const goForward = (tabId?: string) => {
    const targetTabId = tabId || activeTabId;
    setAvailableTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id !== targetTabId) return tab;

        const currentIndex = tab.historyIndex ?? 0;
        const maxIndex = (tab.history?.length ?? 1) - 1;
        if (currentIndex < maxIndex) {
          const newIndex = currentIndex + 1;
          const newAddress = tab.history?.[newIndex] || tab.address;
          const newName = getTabName(newAddress, tab.name);
          return {
            ...tab,
            address: newAddress,
            name: newName,
            historyIndex: newIndex,
          };
        }
        return tab;
      })
    );
  };

  const canGoBack = (tabId?: string) => {
    const targetTabId = tabId || activeTabId;
    const tab = availableTabs.find((t) => t.id === targetTabId);
    return (tab?.historyIndex ?? 0) > 0;
  };

  const canGoForward = (tabId?: string) => {
    const targetTabId = tabId || activeTabId;
    const tab = availableTabs.find((t) => t.id === targetTabId);
    const currentIndex = tab?.historyIndex ?? 0;
    const maxIndex = (tab?.history?.length ?? 1) - 1;
    return currentIndex < maxIndex;
  };

  const setTabName = (id: string, name: string) => {
    setAvailableTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id !== id) return tab;
        return { ...tab, name };
      })
    );
  };
  // Add to context value:
  return (
    <TabContext.Provider
      value={{
        availableTabs,
        activeTabId,
        setActiveTabId,
        openTab,
        closeTab,
        updateTabAddress,
        updateCurrentTabAddress,
        goBack,
        goForward,
        canGoBack,
        canGoForward,
        setTabName,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
