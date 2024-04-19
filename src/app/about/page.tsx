"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";
import ServiceFooter from "@/components/Service/ServiceFooter";
import { gsap } from "gsap";

const About: React.FC = () => {

  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        { x: '100vw' }, 
        {
          x: 60, 
          duration: 2, 
          ease: "power2.out", 
        }
      );
    }
  }, []);
  
  return (
    <>
      <div className="bg-neutral-800 relative text-white flex items-center justify-center min-h-30vh md:min-h-60vh">
        <Link
          href="/"
          className="absolute w-20 md:w-40 top-2.5 start-2 md:start-5"
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
        <div className="text-center">
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
              {"About Us"}
              <div ref={arrowRef} className="absolute hidden md:block pl-2 right-0 transform translate-x-full -translate-y-1/2 top-1/2">
                <Image
                  src="/chevron-left.svg"
                  alt="Arrow"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex flex-col items-stretch justify-center md:flex-row w-full px-2 md:px-20 py-2 md:py-8">
          <div className="flex-1 p-4">
            <div className="max-w-md mx-auto md:max-w-none">
              <div className="flex items-center mt-4">
                <h2 className="flex text-xl md:text-3xl text-black font-semibold">
                  We are Watermark
                </h2>
                <Image
                  src="/chevron-left.svg"
                  alt="Arrow"
                  width={30}
                  height={30}
                  layout="fixed"
                  className="ml-2 flex items-center"
                />
              </div>
              <p className="text-sm md:text-button mt-4 text-gray-600 barlow-regular">
                As a brand we have always applauded initiatives that empower our
                environment, and not just create happy customer relationships.
                We now have taken a step further by championing this cause, and
                our new brand identity embodies this philosophy.
              </p>
              <p className="text-sm md:text-button mt-4 text-gray-600 barlow-regular">
                Understated, yet unique.{" "}
              </p>
              <p className="text-sm md:text-button mt-4 text-gray-600 barlow-regular">
                Minimalistic yet, powerful.
              </p>
              <p className="text-sm md:text-button mt-4 text-gray-600 barlow-regular">
                We say what we mean, and we do what we promise.
              </p>
              <p className="text-sm md:text-button mt-4 text-gray-600 barlow-regular">
                Our vision henceforth will be to strengthen partnerships, build
                communities, and steward experiences that bring people together
                through sustainable efforts to save our planet. Making the
                future world a liveable place for our children and generations
                to come.
              </p>
              <p className="text-sm md:text-button mt-4 text-gray-600 barlow-regular">
                We don’t shy away from technology. We embrace it.
              </p>
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="max-w-md mx-auto h-full md:max-w-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                poster="/path-to-your-poster.jpg"
              >
                <source
                  src={
                    "https://registrationexpress.in/Watermark_Animation_Videos/Snow_globe_animation_for_Web2.mp4"
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center md:flex-row w-full px-2 md:px-20 py-2 md:py-8">
          <div className="flex-1 p-4">
            <div className="max-w-md mx-auto md:max-w-none">
              <div className="flex items-center mt-4">
                <h2 className="flex text-xl md:text-3xl text-black font-semibold">
                  What we do
                </h2>
                <Image
                  src="/chevron-left.svg"
                  alt="Arrow"
                  width={30}
                  height={30}
                  layout="fixed"
                  className="ml-2"
                />
              </div>
              <p className="text-sm md:max-w-xl md:text-button mt-4 text-gray-600 barlow-regular">
                We create experiences for the future, by combining talent,
                technology and the creative power of our agency to transform
                brands and organisations.
              </p>
            </div>
          </div>
        </div>

        <TestimonialCarousel />
      </div>
      <ServiceFooter />
    </>
  );
};

export default About;
