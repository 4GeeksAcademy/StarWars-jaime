// src/components/BackgroundVideo.js

import React from 'react';
import ReactPlayer from 'react-player';
import '../../styles/backgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video-wrapper">
      <ReactPlayer
        url="https://videos.pexels.com/video-files/5818973/5818973-uhd_2560_1440_24fps.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="background-video"
      />
    </div>
  );
};

export default BackgroundVideo;
