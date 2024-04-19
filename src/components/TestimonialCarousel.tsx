"use client";

import React, { useState } from "react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    "We often dive below the surface to pivot our focus from you to your customer and sometimes your brand essence, creating satisfaction and impact that will leave you coming back for more. There are many paradigm shifts taking place across the globe that affect any organisation. We will stand by your side through the thick and thin of it all.",
    "There are many paradigm shifts taking place across the globe that affect any organisation. We will stand by your side through the thick and thin of it all. There are many paradigm shifts taking place across the globe that affect any organisation. We will stand by your side through the thick and thin of it all.",
    "Emotion is at the heart of every strategy, idea, design, and execution that we turn out. It’s not just the future of Industry 4.0. It’s at the heart of humanity. There are many paradigm shifts taking place across the globe that affect any organisation. We will stand by your side through the thick and thin of it all.",
    "We make it a point to have fun and a few good laughs along the way, while striving to achieve perfection in everything we do. There are many paradigm shifts taking place across the globe that affect any organisation. We will stand by your side through the thick and thin of it all.",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-8 pb-16">
      <div className="relative">
        <div className="relative flex rounded-lg shadow-2xl overflow-hidden">
          <div
            className="relative w-min-0 bg-[#545454] py-12 lg:py-16 px-8 lg:px-24 text-white text-sm barlow-regular leading-8"
            style={{ minHeight: "250px" }}
          >
            <p className="text-sm md:text-button">{testimonials[currentIndex]}</p>
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
          <button
            onClick={handlePrev}
            className="mt-24 lg:mt-0 -ml-6 h-12 w-12 bg-white p-3 shadow-lg transform rotate-45"
          >
            <svg
              className="h-full w-full text-indigo-900 transform -rotate-45"
              fill="currentColor"
              viewBox="0 0 25 8"
            >
              <path
                id="arrow"
                className="s0"
                d="m0 4.5l4 3.5v-7l-4 3.5m4 0.5v-1h20v1z"
              />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
          <button
            onClick={handleNext}
            className="mt-24 lg:mt-0 -mr-6 h-12 w-12 bg-white p-3 shadow-lg transform rotate-45"
          >
            <svg
              className="h-full w-full text-indigo-900 transform -rotate-45"
              fill="currentColor"
              viewBox="0 0 25 8"
            >
              <path d="m25 4.5l-4 3.5v-7l4 3.5m-4 0.5v-1h-20v1z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
