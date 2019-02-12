import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedlist = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui realxed divided list">{renderedlist}</div>;
};

export default VideoList;
