"use client";
import { useEffect, useState } from "react";
import Header from "../common/header";
import VideoGrid, { Video } from "../common/video-grids";
import CategoryTabs from "../common/categories-tab";

const categories = [
  "All",
  "Gaming",
  "Live",
  "Unity",
  "Pixel Art",
  "Aseprite",
  "Devlog",
  "Microservices",
  "One Piece",
  "Music",
  "Mixes",
  "Podcasts",
  "Intelligence",
  "Playlists",
  "Wealth",
  "Medieval Music",
  "Dramedy",
  "Computers",
  "Role-Playing Games",
  "Sound",
];
export default function BaseYoutube() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/videos.json");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading videos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header search={searchTerm} onChange={setSearchTerm} />
      <CategoryTabs
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <VideoGrid videos={videos} />
    </div>
  );
}
