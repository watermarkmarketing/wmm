import React from "react";
import Image from "next/image";

const Experiential: React.FC = () => {
  const email = "contact@watermarkexperience.com";

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full bg-white">
          <Image
            src={"/experiential-events.svg"}
            alt="Database"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="bg-[#DFDFDF]">
        <div className="flex flex-col items-center justify-center w-full">
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
              src={
                "https://watermarkexperience.in/wp-content/uploads/2023/12/Clock-timelapse.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="bg-[#DFDFDF] barlow-regular text-black text-sm py-8 flex flex-col items-center justify-center w-full">
        <p className="font-semibold">
          Want to learn more about how we can help your brand?
        </p>
        <a href={`mailto:${email}`} className="hover:text-cyan-600 pl-1">
          contact@watermarkexperience.com
        </a>
      </div>
    </>
  );
};

export default Experiential;
