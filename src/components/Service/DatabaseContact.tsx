import React from "react";
import Image from "next/image";

const DatabaseContact: React.FC = () => {
  const email = "contact@watermarkexperience.com";

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-white">
        <div className="w-full max-w-5xl">
          <Image
            src={"/database-contact.svg"}
            alt="Database"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="bg-[#dfdfdf] text-black text-sm py-8 flex items-center justify-center w-full">
        <p className="barlow-regular">
          <span className="font-semibold">{"Need more insight?"}</span>
          <a href={`mailto:${email}`} className="hover:text-cyan-600 pl-1">
            contact@watermarkexperience.com
          </a>
        </p>
      </div>
    </>
  );
};

export default DatabaseContact;
