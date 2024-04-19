import React from "react";
import Image from "next/image";

interface PlanningStrategyProps {
  content: string[] | undefined;
  imageUrl?: string;
}

const PlanningStrategy: React.FC<PlanningStrategyProps> = ({
  content,
  imageUrl,
}) => {
  const showContent = content || [];

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center w-full px-14">
        {imageUrl && (
          <div className="w-full max-w-xl my-10"> 
            <Image
              src={imageUrl}
              alt="Planning and Strategy"
              layout="responsive"
              width={500} 
              height={300} 
              objectFit="cover"
              priority
            />
          </div>
        )}

        <div className="mb-20">
          <div className="max-w-4xl mx-auto pb-5 md:pb-20">
            {showContent.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base mt-10 text-gray-600 barlow-regular">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningStrategy;
