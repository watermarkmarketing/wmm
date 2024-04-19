// components/ServicesSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  iconSrc: string;
  iconSrcBlk: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  iconSrc,
  iconSrcBlk,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center p-8 transition duration-300 ease-in-out transform hover:scale-110 text-wm-lighter-grey hover:text-white bg-[#323335] hover:bg-cyan-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={link}>
        <div className="w-full h-20 relative mb-4">
          <Image
            src={isHovered ? iconSrcBlk : iconSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="text-cyan-500 hover:text-black"
          />
        </div>
        <h3 className="barlow-regular text-icon leading-icon text-center">{title}</h3>
      </Link>
    </div>
  );
};

interface ServicesSectionProps {
  services: ServiceCardProps[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div id="services" className="min-h-screen flex flex-col justify-center py-12 bg-wm-grey">
      <div className="container text-wm-lighter-grey mx-auto px-4 max-w-[1300px]">
        <h2 className="text-left text-4xl md:leading-title md:text-section-title font-normal mb-2">
          How can we help you?
        </h2>
        <p className="md:text-desc text-lg md:leading-desc barlow-extralight text-left mb-12">
          Emotion is at the heart of everything we do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              iconSrc={service.iconSrc}
              iconSrcBlk={service.iconSrcBlk}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
