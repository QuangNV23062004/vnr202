import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { Video } from "../common/video-grids";
import { useTabs } from "@/context/tab-context";

interface SearchResultCardProps {
  video: Video;
}

export default function SearchResultCard({ video }: SearchResultCardProps) {
  const { updateCurrentTabAddress } = useTabs();

  return (
    <div
      className="cursor-pointer group flex gap-4 pb-4 border-b border-gray-200 hover:bg-gray-50 p-2 rounded transition-colors"
      onClick={() => {
        updateCurrentTabAddress(`www.youtube.com/watch?v=${video.id}`);
      }}
    >
      {/* Thumbnail */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 w-40 h-24">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover group-hover:brightness-75 transition-all"
        />
        {video.isLive && (
          <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            ● LIVE
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
          {video.length || "--:--"}
        </div>
      </div>

      {/* Video Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm line-clamp-2 text-gray-900 group-hover:text-blue-600">
          {video.title}
        </h3>
        <p className="text-xs text-gray-600 mt-2">{video.channel}</p>
        <p className="text-xs text-gray-600">
          {video.viewers ? (
            <>
              <span>{video.viewers}</span>
            </>
          ) : (
            <>
              <span>{video.views} views</span>
              {" • "}
              <span>{video.uploadTime}</span>
            </>
          )}
        </p>
        <p className="text-xs text-gray-500 line-clamp-2 mt-2">
          Video content related to your search query
        </p>
      </div>

      {/* More Options */}
      <button className="p-2 hover:bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  );
}
