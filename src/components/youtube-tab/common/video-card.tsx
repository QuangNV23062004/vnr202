import { MoreVertical } from "lucide-react";
import { Video } from "./video-grids";
import { useTabs } from "@/context/tab-context";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { updateCurrentTabAddress } = useTabs();
  return (
    <div
      className="cursor-pointer group"
      onClick={() => {
        updateCurrentTabAddress(`www.youtube.com/watch?v=${video.id}`);
      }}
    >
      {/* Thumbnail */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-3 aspect-video">
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
      <div className="flex gap-2">
        {/* Channel Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0"></div>

        {/* Title & Metadata */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm line-clamp-2 text-gray-900 group-hover:text-gray-700">
            {video.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">{video.channel}</p>
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
        </div>

        {/* More Options */}
        <button className="p-2 hover:bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
