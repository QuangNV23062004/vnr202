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
  reorderTabs: (draggedId: string, targetId: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTabs must be used within TabProvider");
  return context;
};

// Cache for pages.json data
let pagesDataCache: Array<{ url: string; title: string }> | null = null;

// Helper function to get tab name from address
const getTabName = async (
  address: string,
  currentName: string
): Promise<string> => {
  try {
    const url = new URL(
      address.startsWith("http") ? address : `https://${address}`
    );

    // Google search results
    if (url.searchParams.has("q")) {
      return `${url.searchParams.get("q")} - Google Search`;
    }

    // Google home page
    if (
      (url.hostname === "www.google.com" || url.hostname === "google.com") &&
      url.pathname === "/" &&
      !url.search
    ) {
      return "Google";
    }

    // Gemini assistant
    if (
      url.hostname === "gemini.google.com" &&
      url.pathname === "/app/vnr202-assistance"
    ) {
      return "VNR202 Assistance";
    }

    // vnr202-nhom5.com content pages
    if (url.hostname === "vnr202-nhom5.com") {
      // Load pages.json if not cached
      if (!pagesDataCache) {
        try {
          const response = await fetch("/pages.json");
          const data = await response.json();
          pagesDataCache = data.map((item: { url: string; title: string }) => ({
            url: item.url,
            title: item.title,
          }));
        } catch (error) {
          console.error("Failed to load pages.json:", error);
          pagesDataCache = [];
        }
      }

      // Find matching page
      const fullUrl = url.toString();
      const matchedPage = pagesDataCache?.find((page) => {
        try {
          const pageUrl = new URL(page.url);
          return (
            pageUrl.hostname === url.hostname &&
            pageUrl.pathname === url.pathname
          );
        } catch {
          return false;
        }
      });

      if (matchedPage) {
        return matchedPage.title;
      }
    }

    // Fallback to current name or hostname
    return currentName || url.hostname;
  } catch {
    // If URL parsing fails, return the address or current name
    return currentName || address;
  }
};

// Synchronous version for immediate use (falls back to loading async)
const getTabNameSync = (address: string, currentName: string): string => {
  try {
    const url = new URL(
      address.startsWith("http") ? address : `https://${address}`
    );

    if (url.searchParams.has("q")) {
      return `${url.searchParams.get("q")} - Google Search`;
    }

    if (
      (url.hostname === "www.google.com" || url.hostname === "google.com") &&
      url.pathname === "/" &&
      !url.search
    ) {
      return "Google";
    }

    if (
      url.hostname === "gemini.google.com" &&
      url.pathname === "/app/vnr202-assistance"
    ) {
      return "VNR202 Assistance";
    }

    // For vnr202-nhom5.com, try to use cached data or return a better default
    if (url.hostname === "vnr202-nhom5.com" && pagesDataCache) {
      const matchedPage = pagesDataCache.find((page) => {
        try {
          const pageUrl = new URL(page.url);
          return (
            pageUrl.hostname === url.hostname &&
            pageUrl.pathname === url.pathname
          );
        } catch {
          return false;
        }
      });
      if (matchedPage) {
        return matchedPage.title;
      }
    }

    return currentName || url.hostname;
  } catch {
    return currentName || address;
  }
};

export default function TabProvider({ children }: { children: ReactNode }) {
  const [activeTabId, setActiveTabId] = useState("0");
  const [availableTabs, setAvailableTabs] = useState<TabData[]>([
    {
      id: "0",
      name: "Google",
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
    if (availableTabs.length === 1) {
      toast.error("Cannot close the last tab.");
      return;
    }
    setAvailableTabs((prevTabs) => {
      const tabIndex = prevTabs.findIndex((tab) => tab.id === id);
      if (tabIndex === -1) return prevTabs;

      // Remove the closed tab
      const updatedTabs = prevTabs.filter((tab) => tab.id !== id);

      // If we're closing the active tab, switch to another one
      if (id === activeTabId) {
        // If closing the first tab, switch to the next one (which becomes first)
        // Otherwise, try previous tab, then fallback to first tab
        const newActiveTab =
          updatedTabs[tabIndex - 1] || updatedTabs[0] || updatedTabs[tabIndex];
        if (newActiveTab) {
          setActiveTabId(newActiveTab.id);
        }
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

        // Get new name (use sync version for immediate update)
        const newName = getTabNameSync(newAddress, tab.name);

        // Also update async for better accuracy
        getTabName(newAddress, tab.name).then((asyncName) => {
          if (asyncName !== newName) {
            setTabName(id, asyncName);
          }
        });

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
          const newName = getTabNameSync(newAddress, tab.name);
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
          const newName = getTabNameSync(newAddress, tab.name);
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

  // Reorder tabs
  const reorderTabs = (draggedId: string, targetId: string) => {
    setAvailableTabs((prevTabs) => {
      const draggedIndex = prevTabs.findIndex((tab) => tab.id === draggedId);
      const targetIndex = prevTabs.findIndex((tab) => tab.id === targetId);

      if (
        draggedIndex === -1 ||
        targetIndex === -1 ||
        draggedIndex === targetIndex
      ) {
        return prevTabs;
      }

      const newTabs = [...prevTabs];
      const [draggedTab] = newTabs.splice(draggedIndex, 1);
      newTabs.splice(targetIndex, 0, draggedTab);

      return newTabs;
    });
  };

  // Load pages.json on mount to cache titles
  React.useEffect(() => {
    fetch("/pages.json")
      .then((res) => res.json())
      .then((data) => {
        pagesDataCache = data.map((item: { url: string; title: string }) => ({
          url: item.url,
          title: item.title,
        }));
        // Update existing tabs with correct names
        setAvailableTabs((prevTabs) =>
          prevTabs.map((tab) => {
            const newName = getTabNameSync(tab.address, tab.name);
            if (newName !== tab.name) {
              return { ...tab, name: newName };
            }
            return tab;
          })
        );
      })
      .catch((error) => {
        console.error("Failed to load pages.json:", error);
      });
  }, []);

  React.useEffect(() => {
    try {
      const storedTabs = localStorage.getItem("browser-tabs");
      const storedActiveId = localStorage.getItem("browser-active-tab");

      if (storedTabs) {
        const parsedTabs = JSON.parse(storedTabs);

        if (Array.isArray(parsedTabs) && parsedTabs.length > 0) {
          setAvailableTabs(parsedTabs);
          setActiveTabId(storedActiveId || parsedTabs[0].id);
        }
      }
    } catch (error) {
      console.error("Failed to load tabs from localStorage:", error);
    }
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem("browser-tabs", JSON.stringify(availableTabs));
      localStorage.setItem("browser-active-tab", activeTabId);
    } catch (error) {
      console.error("Failed to save tabs to localStorage:", error);
    }
  }, [availableTabs, activeTabId]);

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
        reorderTabs,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
