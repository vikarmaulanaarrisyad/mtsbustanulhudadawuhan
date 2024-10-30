import React from "react";

const Hero = () => {
  return (
    <div className="relative w-[100%] h-[100%]">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-blue-800 opacity-50"></div>
      <video
        src="/images/profile.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-[100%] h-[100%] object-cover"
      />
    </div>
  );
};

export default Hero;
