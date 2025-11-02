"use client";
import { useEffect, useState } from "react";
import Header from "../common/header";
import { Video } from "../common/video-grids";
import NotFoundYoutube from "../common/not-found";

export default function WatchPage({ id }: { id: string }) {
  const [video, setVideo] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/videos.json");
        const data = await response.json();
        setVideos(data);

        const currentVideo = data.find((v: Video) => v.id === id);
        setVideo(currentVideo);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading video...</div>
      </div>
    );
  }

  if (!video) {
    return <NotFoundYoutube />;
  }

  // Filter out current video from recommendations
  const recommendedVideos = videos.filter((v) => v.id !== id);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex gap-6 p-4 max-w-7xl mx-auto">
        {/* Main Player Section */}
        <div className="flex-1 min-w-0">
          <div className="bg-black rounded-lg overflow-hidden mb-4">
            <iframe
              width="100%"
              height="480"
              src={video.embededurl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>

          {/* Video Title and Info */}
          <div className="mb-4">
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              {video.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.uploadTime}</span>
            </div>
          </div>

          {/* Channel Info */}
          <div className="flex items-center gap-3 py-4 border-b">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-gray-900">
                {video.channel}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar - Recommended Videos */}
        <div className="w-96 max-h-[600px] overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Recommended
          </h3>
          <div className="space-y-3">
            {recommendedVideos.map((vid) => (
              <a
                key={vid.id}
                href={`/watch/${vid.id}`}
                className="flex gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                  <img
                    src={vid.thumbnail || "/placeholder.svg"}
                    alt={vid.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 line-clamp-2">
                    {vid.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{vid.channel}</p>
                  <p className="text-xs text-gray-600">{vid.views} views</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
