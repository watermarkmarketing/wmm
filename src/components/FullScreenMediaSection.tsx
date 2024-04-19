// components/FullScreenMediaSection.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface FullScreenMediaSectionProps {
  title: string;
  description: string;
  mediaUrl: string;
  mediaLeft?: boolean;
  isPacVideo: boolean;
  backgroundColor: string;
}

const FullScreenMediaSection: React.FC<FullScreenMediaSectionProps> = ({
  title,
  description,
  mediaUrl,
  mediaLeft = false,
  isPacVideo,
  backgroundColor,
}) => {
  const mediaOrderClass = mediaLeft ? "md:order-first" : "md:order-last";
  const contentOrderClass = mediaLeft ? "md:order-last" : "md:order-first";

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center w-full h-screen ${backgroundColor}`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:h-screen md:max-w-[1300px]">
        <div
          className={`flex flex-col justify-center text-wm-grey w-full md:w-1/2 py-14 md:py-0 md:h-full ${contentOrderClass}`}
        >
          <h2 className="text-4xl md:text-title md:leading-title font-semibold mb-6 md:mb-2 px-5 md:px-10">
            {title}
          </h2>
          <p className="text-lg md:text-desc md:leading-desc barlow-extralight px-5 md:px-10">
            {description}
          </p>
        </div>
        <div className={`relative w-full md:w-1/2 h-full ${mediaOrderClass}`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-fit md:h-full ${
              isPacVideo ? "object-contain" : "object-cover md:py-20"
            }`}
            preload="none"
          >
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default FullScreenMediaSection;
