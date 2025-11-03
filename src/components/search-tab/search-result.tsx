"use client";

import type React from "react";

import { Search, Settings, Grid } from "lucide-react";
import { useEffect, useState } from "react";
import { useTabs } from "@/context/tab-context";

interface SearchResult {
  id: string;
  url: string;
  title: string;
  description: string;
  domain: string;
  keywords: string[];
}

export default function SearchResults({ query }: { query: string }) {
  const { updateCurrentTabAddress, openTab } = useTabs();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(query);
  const [searchTime, setSearchTime] = useState("0.00"); // New state for stable search time

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch("/pages.json");
        const data = await response.json();

        const filtered = data.filter((item: SearchResult) =>
          item.keywords.some((kw) =>
            kw.toLowerCase().includes(query.toLowerCase())
          )
        );

        setResults(filtered);
        setSearchTime((Math.random() * 0.5).toFixed(2)); // Compute once here
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      const newAddress = `https://www.google.com/search?q=${encodeURIComponent(
        searchInput
      )}`;
      updateCurrentTabAddress(newAddress);
    }
  };

  const handleLogoClick = () => {
    updateCurrentTabAddress("https://www.google.com");
  };

  const handleResultClick = (e: React.MouseEvent, result: SearchResult) => {
    e.preventDefault();

    // Check if middle click or ctrl/cmd click (should open in new tab)
    if (e.button === 1 || e.ctrlKey || e.metaKey) {
      // Open in new tab
      const newTabId = `tab-${Date.now()}`;
      openTab(newTabId, result.title, result.url);
    } else {
      // Open in current tab
      updateCurrentTabAddress(result.url);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1
              className="text-2xl font-bold cursor-pointer"
              onClick={handleLogoClick}
            >
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </h1>
            <div className="flex gap-3">
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch}>
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition max-w-2xl">
              <Search className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search Google"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow focus:outline-none text-gray-700"
              />
            </div>
          </form>
        </div>

        {/* Search filters */}
        <div className="max-w-6xl mx-auto px-4 pb-4 flex gap-6 text-sm">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
            VNR202
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {loading ? (
          <div className="text-gray-600">Loading...</div>
        ) : results.length > 0 ? (
          <div>
            <div className="text-gray-600 text-sm mb-6">
              About {results.length} results ({searchTime} seconds){" "}
              {/* Use stable state value */}
            </div>
            <div className="space-y-6 overflow-y-auto max-h-[250px]">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="hover:bg-gray-50 p-2 rounded cursor-pointer transition"
                  onClick={(e) => handleResultClick(e, result)}
                  onMouseDown={(e) => {
                    // Handle middle click
                    if (e.button === 1) {
                      handleResultClick(e, result);
                    }
                  }}
                >
                  <div className="text-sm text-green-700 hover:underline">
                    {result.domain}
                  </div>
                  <h3 className="text-xl text-blue-600 hover:underline mb-1">
                    {result.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <button className="px-3 py-1 text-sm text-blue-600 hover:bg-gray-100 rounded">
                &lt; Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">
                1
              </button>
              <button className="px-3 py-1 text-sm text-blue-600 hover:bg-gray-100 rounded">
                Next &gt;
              </button>
            </div>
          </div>
        ) : (
          <div className="text-gray-600">
            No results found for "{query}". Try a different search.
          </div>
        )}
      </div>
    </div>
  );
}
