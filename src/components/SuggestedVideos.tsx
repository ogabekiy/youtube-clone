import React from "react";
import { useGetSuggestedVideosQuery } from "../service/api";

const SuggestedVideos = ({ currentVideoId }) => {
  const { data, isLoading, error } = useGetSuggestedVideosQuery(currentVideoId);

  if (isLoading) {
    return <div className="text-center text-blue-500">Tavsiya etilgan videolar yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Tavsiya etilgan videolarni yuklashda xato yuz berdi.</div>;
  }

  if (!data?.items?.length) {
    return <div className="text-center text-gray-100">Tavsiya etilgan videolar topilmadi.</div>;
  }

  return (
    <ul className="space-y-4 w-[500px] flex-shrink-0">
      {data.items.map((video) => (
        <li key={video.id} className="flex items-center gap-4">
          <img
            src={video.thumbnail.url}
            alt={video.title}
            className="w-20 h-12 object-cover rounded"
          />
          <div>
            <h3 className="text-sm font-semibold text-white">{video.title}</h3>
            <p className="text-xs text-gray-400">{video.channelTitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SuggestedVideos;
