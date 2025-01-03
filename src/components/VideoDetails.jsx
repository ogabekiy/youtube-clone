import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoDetailsQuery } from "../service/api";
import ReactPlayer from "react-player";
import SuggestedVideos from './SuggestedVideos'

const VideoDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetVideoDetailsQuery(id);
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <div className="flex gap-5 container px-5">
      <div className="w-full rounded aspect-video overflow-hidden">
        <ReactPlayer controls height={"100%"} width={"100%"} url={`https://www.youtube.com/watch?v=${data?.id}`}/>
      </div>
      <SuggestedVideos/>
    </div>
  );
};

export default VideoDetails;
