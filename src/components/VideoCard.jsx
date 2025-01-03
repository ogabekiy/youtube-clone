import { Verified } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  function formatNumber(number) {
    switch (number.toString().length) {
      case 4:
        return `${(number / 1000).toFixed(1)} k`;
      case 7:
        return `${(number / 1000000).toFixed(1)} million`;
      case 10:
        return `${(number / 1000000000).toFixed(1)} milliard`;

      default:
        return "";
    }
  }
  const formatDate = (date) => {
    const d = new Date(date);
    const now = new Date();
    const seconds = now - d;
    const days = Math.floor(seconds / 1000 / 60 / 60 / 24);
    if (days < 1) {
      return "today";
    } else if (days < 7) {
      return `${Math.floor(days)} days ago`;
    } else if (days < 30) {
      return `${Math.floor(days / 7)} weeks ago`;
    } else if (days < 365) {
      return `${Math.floor(days / 30)} months ago`;
    } else if (days >= 365) {
      return `${Math.floor(days / 365)} years ago`;
    } else {
      return "now";
    }
  };
  return (
    <Link to={`/video/${video.videoId}`} className="text-white">
      <div>
        {video?.thumbnail ? (
          <img
            src={video?.thumbnail[2].url}
            alt="video image"
            className="w-full h-[200px] rounded object-cover"
          />
        ) : (
          <img
            src="https://picsum.photos/300"
            alt="video image"
            className="w-full h-[200px] rounded object-cover"
          />
        )}
      </div>
      <div className="flex gap-3 mt-3">
        {video?.channelThumbnail && (
          <div>
            <img
              src={video.channelThumbnail[0].url}
              alt="channel image"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-lg">{video?.title}</h3>
          <p className="text-sm flex items-center gap-1 text-[#aaa]">
            <Verified fontSize="sm" />
            {video?.channelTitle}
          </p>
          <div className="text-[#AAAAAA] items-center flex gap-2">
            <p>{video?.viewCount && formatNumber(video.viewCount)}</p>
            <span className="inline-block w-1 h-1 bg-[#aaa] rounded-full"></span>
            <p>{video?.publishDate && formatDate(video.publishDate)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
