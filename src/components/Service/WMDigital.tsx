import React from "react";
import Image from "next/image";

interface WMDigitalProps {
  content: string[] | undefined;
}

const WMDigital: React.FC<WMDigitalProps> = ({ content }) => {
  const showContent = content || [];

  return (
    <>
      <div className="bg-white px-4 md:px-0 pb-10">
        <div className="max-w-5xl mx-auto py-14 text-wm-grey text-2xl barlow-semibold">
          <h2 className="text-3xl mb-4 barlow-semibold">
            Is your brand unleashing creativity using AI-powered experiential
            marketing strategies?
          </h2>
          <p className="barlow-regular">{`It's time to find out more...`}</p>
        </div>
        <div className="max-w-5xl mx-auto pt-5 pb-10 border-b border-black">
          <p className="text-sm md:text-base mt-4 text-gray-600 barlow-regular">
            <span className="text-4xl">{"AI"}</span>
            {
              " for art. AI for writing. AI for everything. It’s everything, everywhere, all at once. And we don’t mean the movie."
            }
          </p>
          {showContent.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base mt-4 text-gray-600 barlow-regular"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="max-w-5xl mx-auto py-14 border-b text-gray-600 text-sm md:text-base barlow-regular border-black">
          <p className="text-black barlow-medium text-lg md:text-xl pb-14">
            TURN UP THE VOLUME ON ENGAGEMENT AND EXCITEMENT
          </p>
          <p className="mb-4">
            <span className="text-black barlow-medium">Wider reach:</span>{" "}
            Expand beyond physical attendees to a broader audience and generate
            interest for future events
          </p>
          <p className="mb-4">
            <span className="text-black barlow-medium">Real-time talk:</span>{" "}
            Attendees share experiences and interact with other attendees,
            speakers and organizers
          </p>
          <p className="mb-4">
            <span className="text-black barlow-medium">Amplify content:</span>{" "}
            Make quality content generated at the conference visible and
            accessible to an international audience
          </p>
          <p className="mb-4">
            <span className="text-black barlow-medium">Networking:</span>{" "}
            Connect with like-minded individuals as well as potential business
            partners
          </p>
          <p className="mb-4">
            <span className="text-black barlow-medium">
              Offers feedback and insights:
            </span>{" "}
            Improve future events and tailor content to meet specific needs
          </p>
        </div>
        <div className="max-w-5xl mx-auto py-14 text-gray-600 text-sm md:text-base barlow-regular">
          <p className="mb-4">
            <span className="text-black barlow-medium">Results that rock:</span><br />
            Sometimes we think outside the box so much, we forget where we left
            it.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full bg-white">
          <Image
            src={"/wm-digital.svg"}
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
                "https://registrationexpress.in/Watermark_Animation_Videos/Owl_2.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default WMDigital;
