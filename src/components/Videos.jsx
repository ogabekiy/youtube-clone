import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useGetTrendingQuery } from "../service/api";
import useStore from '../store'

const Videos = () => {
  const { data, isLoading, error } = useGetTrendingQuery();
  const {videos, setVideos} = useStore()
  useEffect(() => {
    if(!error && data && !isLoading){
      setVideos(data.data)
    }
  }, [data])
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <div className="grid grid-cols-3 gap-4 px-5 container">
      {videos && videos.map(
        (v) =>
          v.type == "video" && (
            <VideoCard key={v.videoId + Math.random() * 100} video={v} />
          )
      )}
    </div>
  );
};

export default Videos;
