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

interface ProjectData {
  title: string;
  width: number;
  height: number;
  src: string;
}

const projects: ProjectData[] = [
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg'
	},
	{
		title: 'Project 2',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/WMM-Creative-Creds-V7-137-2.jpg'
	},
	{
		title: 'Project 3',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Stall_002-1.jpg'
	},
	{
		title: 'Project 4',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Venue-11-1.jpg'
	},
	{
		title: 'Project 5',
		width: 1800,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/tata1.jpg'
	},
	{
		title: 'Project 6',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/GaslaStage-02nd-theme_001-A-copy.jpg'
	}
]

const ProjectDisplayGrid: React.FC = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 bg-wm-grey">
      <div className="container mx-auto px-4 max-w-[1300px]">
        <h2 className="text-4xl md:text-section-title md:leading-section-title text-wm-lighter-grey font-normal mb-2">
          Take a look at what we have
        </h2>
        <p className="text-wm-lighter-grey text-lg md:leading-desc md:text-desc barlow-extralight mb-12">
          Pure magic!
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
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="tracking-widest text-cyan-400 hover:text-white bg-[#323335] hover:bg-cyan-600 text-button leading-button barlow-light py-4 px-6 rounded-full transition duration-300"
            passHref
          >
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplayGrid;
