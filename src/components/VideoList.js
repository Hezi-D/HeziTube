import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedlist = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div className="ui realxed divided list">{renderedlist}</div>;
};

export default VideoList;
