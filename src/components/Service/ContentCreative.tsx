import React from "react";
import Image from "next/image";

interface ContentCreativeProps {
  content: string[] | undefined;
}

const ContentCreative: React.FC<ContentCreativeProps> = ({ content }) => {
  const showContent = content || [];

  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center md:flex-row w-full px-4 md:px-16 py-2 md:py-12">
          <div className="md:w-6/12 flex-1 md:p-12">
            <div className="max-w-md mx-auto md:max-w-none">
              <p className="text-sm md:text-base mt-4 text-gray-600 barlow-regular">
                <span className="text-4xl font-light">{"Our"}</span>
                {
                  " team consists of a heady mix of talent and experience, and we are always armed ready to hit the ground running."
                }
              </p>
              {showContent.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base mt-6 text-gray-600 barlow-regular"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="md:w-6/12 flex-1 p-4 md:p-12">
            <div className="max-w-md mx-auto max-h-screen md:max-w-none">
              <Image
                src={"/content-1.svg"}
                alt="Content And Creative"
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
                priority
                className="max-h-[420px] max-w-[420px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={"/content-2.svg"}
            alt="Content And Creative"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full">
          <Image
            src={"/content-3.svg"}
            alt="Content And Creative"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default ContentCreative;
