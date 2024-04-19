import React from "react";

interface CustomerSuccessProps {
  content: string[] | undefined;
  videoUrl?: string;
}

const CustomerSuccess: React.FC<CustomerSuccessProps> = ({
  content,
  videoUrl,
}) => {
  const showContent = content || [];

  return (
    <div className="bg-white">
      <div className="flex flex-col md:py-20 items-center justify-center md:flex-row w-full px-2 md:px-14">
        {/* Content section */}
        <div className="flex-1 p-4">
          <div className="max-w-md mx-auto md:max-w-none">
            {showContent.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm md:text-base mt-8 text-gray-600 barlow-regular"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Video section */}
        {videoUrl && (
          <div className="flex-1 p-4">
            <div className="max-w-md mx-auto md:px-8 h-full md:max-w-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
                poster="/path-to-your-poster.jpg"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerSuccess;
