import React from "react";
import SearchBar from "./search-bar";

export default function SearchWrapper() {
  return (
    <div className="flex flex-col h-full bg-white text-gray-800 relative overflow-y-auto">
      {/* Main content - centered */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Logo */}
        <h1 className="text-[90px] font-bold">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </h1>

        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-gray-100 text-sm text-gray-600 mt-auto">
        <div className="text-left px-8 py-2 border-t border-gray-200">
          Vietnam
        </div>
        <div className="px-8 py-3 flex justify-between flex-wrap">
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Advertising
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              How Search works
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
