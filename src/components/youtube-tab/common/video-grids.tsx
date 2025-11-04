import Image from "next/image";
import VideoCard from "./video-card";

export interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  uploadTime: string;
  embededurl: string;
  thumbnail: string;
  length?: string;
  isLive?: boolean;
  viewers?: string;
}

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="max-w-full px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}

        <a href="https://www.youtube.com/" target="_blank">
          <div className="flex flex-col justify-center items-center gap-3 mt-8 mb-6">
            <p className="text-gray-600 text-xs md:text-sm font-medium uppercase tracking-wide">
              Watch More Content
            </p>
            <div className="group cursor-pointer px-8 py-4 rounded-full bg-white border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <Image
                width={120}
                height={50}
                src="/youtube_logo.png"
                alt="YouTube"
                className="transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
