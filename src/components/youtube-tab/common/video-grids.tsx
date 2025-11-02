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
      </div>
    </div>
  );
}
