"use client";

import { useTabs } from "../../context/tab-context";
import TabAddress from "./tab-address";
import TabBar from "./tab-bar";
import TabContentRenderer from "./tab-content-renderer";
import { useEffect, useState } from "react";

export default function TabLayout() {
  const { availableTabs, activeTabId, updateCurrentTabAddress } = useTabs();
  const currentTab = availableTabs.find((tab) => tab.id === activeTabId);

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col min-w-0">
        <TabBar />
        {currentTab && (
          <>
            <TabAddress
              url={currentTab.address}
              setUrl={updateCurrentTabAddress}
            />
            <div className="flex-1 overflow-hidden">
              <TabContentRenderer address={currentTab.address} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
