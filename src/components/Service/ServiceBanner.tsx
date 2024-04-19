import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

interface ServiceBannerProps {
  title: string;
  desc?: string;
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({ title, desc }) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  const formattedTitle = title.replace(/\band\b/gi, "&");

  useEffect(() => {
    if (arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        { x: "100vw" },
        {
          x:
            formattedTitle === "Database And Contact Centre Management"
              ? 10
              : 60,
          duration: 2,
          ease: "power2.out",
        }
      );
    }
  }, [formattedTitle]);

  return (
    <div className="bg-[#323335] relative text-white flex items-center justify-center min-h-60vh">
      <Link
        href="/"
        className="absolute w-20 md:w-40 top-2.5 start-3 md:start-5"
      >
        <Image
          src={"/logo-dark.svg"}
          alt="wm-logo"
          layout="responsive"
          width={160}
          height={64}
          objectFit="contain"
          priority
        />
      </Link>
      <div className="flex flex-col items-center text-center">
        <div
          className="inline-block px-4 py-6 md:py-10"
          style={{
            backgroundImage:
              "url(https://watermarkexperience.in/wp-content/uploads/2023/12/about_bg_image.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-3xl md:text-[4rem] md:leading-[4rem] max-w-4xl font-semibold tracking-wider relative inline-block mr-2">
            {formattedTitle}
            <div
              ref={arrowRef}
              className="absolute hidden md:block right-0 transform translate-x-full -translate-y-1/2 top-1/2 pl-2"
            >
              <Image
                src="https://watermarkexperience.in/wp-content/uploads/2023/12/Header_img_arrow.png"
                alt="Arrow"
                width={50}
                height={50}
                layout="fixed"
              />
            </div>
          </h2>
        </div>
        <p className="barlow-regular max-w-4xl tracking-widest mt-5">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceBanner;
