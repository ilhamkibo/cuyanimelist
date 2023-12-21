"use client";

import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={() => alert("Video error, please try another!")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
    <button
      className="rounded shadow-xl fixed bottom-5 right-4 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all"
      onClick={handleVideoPlayer}
    >
      Tonton Trailer
    </button>
    )
  }

  return isOpen ? <Player/> : <ButtonOpenPlayer/>;
}
