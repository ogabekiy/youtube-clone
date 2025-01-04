import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoDetailsQuery } from "../service/api";
import ReactPlayer from "react-player";
import SuggestedVideos from './SuggestedVideos';

const VideoDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetVideoDetailsQuery(id);

  if (error)
    return <div className="text-center text-red-500">Xato yuz berdi. Iltimos, qayta urinib ko'ring.</div>;

  if (isLoading)
    return <div className="text-center text-blue-500">Yuklanmoqda...</div>;

  return (
    <div className="container mx-auto px-5 py-5 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-2/3">
        <div className="rounded overflow-hidden aspect-video">
          <ReactPlayer
            controls
            height={"100%"}
            width={"100%"}
            url={`https://www.youtube.com/watch?v=${data?.id}`}
          />
        </div>
        <h1 className="text-xl text-white font-bold mt-4">{data?.title}</h1>
        <p className="text-gray-200 mt-2">{data?.description}</p>
      </div>

      <div className="w-full lg:w-1/3">
        <h2 className="text-lg text-white font-semibold mb-4">Tavsiya etilgan videolar</h2>
        <SuggestedVideos currentVideoId={id} />
      </div>
    </div>
  );
};

export default VideoDetails;
