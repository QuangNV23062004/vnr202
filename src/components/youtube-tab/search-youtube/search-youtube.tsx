"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../common/header";
import SearchResultCard from "./search-result-card";
import { removeDiacritics } from "@/utils/search.utils";
import { Video } from "../common/video-grids";

export default function SearchYoutube({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const searchParams = useSearchParams();
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/videos.json");
        const data = await response.json();
        setVideos(data);

        const normalizedQuery = removeDiacritics(searchQuery.toLowerCase());
        const results = data.filter((video: Video) => {
          const normalizedTitle = removeDiacritics(video.title);
          return normalizedTitle.includes(normalizedQuery);
        });
        setFilteredVideos(results);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header search={searchQuery} />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {filteredVideos.length} result
            {filteredVideos.length !== 1 ? "s" : ""} for{" "}
            <span className="font-semibold text-gray-900">"{searchQuery}"</span>
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <p className="text-gray-500">Loading results...</p>
          </div>
        ) : filteredVideos.length > 0 ? (
          <div className="space-y-0">
            {filteredVideos.map((video) => (
              <SearchResultCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-gray-600 mb-2">
              No results found for "{searchQuery}"
            </p>
            <p className="text-sm text-gray-500">Try different keywords</p>
          </div>
        )}
      </main>
    </div>
  );
}
