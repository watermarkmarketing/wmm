// components/Banner.tsx
import React, { useEffect, useState } from "react";

const Banner = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const bannerHeight = `calc(100vh - 73.82px)`;

  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ height: isMobile ? "auto" : bannerHeight }}
    >
      <div className="relative flex h-full w-full flex-col md:pb-28 py-20 md:py-0 items-center justify-center text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain"
          poster="/path-to-your-poster.jpg"
        >
          <source
            src="https://registrationexpress.in/Watermark_Animation_Videos/Wwm_Header_Animation_clip.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
