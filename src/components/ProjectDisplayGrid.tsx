"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NextJsImage from '@/components/NextJsImage';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";



    <div className="min-h-screen flex flex-col justify-center py-12 bg-wm-grey">
      <div className="container mx-auto px-4 max-w-[1300px]">
        <h2 className="text-4xl md:text-section-title md:leading-section-title text-wm-lighter-grey font-normal mb-2">
          Take a look at what we have
        </h2>
        <p className="text-wm-lighter-grey text-lg md:leading-desc md:text-desc barlow-extralight mb-12">
          Pure magic!
			We are currently updating our most impactful projects here.

Please revisit after sometime to check it out!
        </p>
        <PhotoAlbum
          layout="rows"
          photos={projects}
          defaultContainerWidth={1200}
          sizes={{ size: "calc(100vw - 240px)" }}
          renderPhoto={NextJsImage}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={projects}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
        
      </div>
    </div>
  );
};

export default ProjectDisplayGrid;
