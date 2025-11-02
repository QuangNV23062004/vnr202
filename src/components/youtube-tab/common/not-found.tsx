import React from "react";
import { AlertCircle } from "lucide-react";

export default function NotFoundYoutube() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 w-full h-full bg-gray-700 text-white">
      <div>
        <AlertCircle className="w-20 h-20 text-gray-400 mb-4" />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-lg font-semibold">Video unavailable</h2>
        <p className="text-sm text-gray-400">This video is not available</p>
      </div>
    </div>
  );
}
