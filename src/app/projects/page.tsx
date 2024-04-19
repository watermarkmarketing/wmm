'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ServiceFooter from '@/components/Service/ServiceFooter'
import Gallery from '@/components/Gallery'
import { gsap } from "gsap";

interface ProjectData {
	category: string
  title: string;
  width: number;
  height: number;
  src: string;
}

const items: ProjectData[] = [
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: 'all'
	},
	{
		title: 'Project 2',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/WMM-Creative-Creds-V7-137-2.jpg',
		category: 'all'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: 'all'
	},
	{
		title: 'Project 3',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Stall_002-1.jpg',
		category: 'all'
	},
	{
		title: 'Project 5',
		width: 1800,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/tata1.jpg',
		category: 'all'
	},
	{
		title: 'Project 4',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Venue-11-1.jpg',
		category: 'all'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: '3d graphic'
	},
	{
		title: 'Project 2',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/WMM-Creative-Creds-V7-137-2.jpg',
		category: '3d graphic'
	},
	{
		title: 'Project 5',
		width: 1800,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/tata1.jpg',
		category: '3d graphic'
	},
	{
		title: 'Project 3',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Stall_002-1.jpg',
		category: '3d graphic'
	},
	{
		title: 'Project 4',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Venue-11-1.jpg',
		category: '3d graphic'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: '3d designs'
	},
	{
		title: 'Project 2',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/WMM-Creative-Creds-V7-137-2.jpg',
		category: '3d designs'
	},
	{
		title: 'Project 4',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Venue-11-1.jpg',
		category: '3d designs'
	},
	{
		title: 'Project 5',
		width: 1800,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/tata1.jpg',
		category: '3d designs'
	},
	{
		title: 'Project 3',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Stall_002-1.jpg',
		category: '3d designs'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: 'logo'
	},
	{
		title: 'Project 2',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/WMM-Creative-Creds-V7-137-2.jpg',
		category: 'logo'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: 'logo'
	},
	{
		title: 'Project 5',
		width: 1800,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/tata1.jpg',
		category: 'logo'
	},
	{
		title: 'Project 3',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Stall_002-1.jpg',
		category: 'logo'
	},
	{
		title: 'Project 4',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Venue-11-1.jpg',
		category: 'logo'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: 'branding'
	},
	{
		title: 'Project 2',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/WMM-Creative-Creds-V7-137-2.jpg',
		category: 'branding'
	},
	{
		title: 'Project 5',
		width: 1800,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/tata1.jpg',
		category: 'branding'
	},
	{
		title: 'Project 4',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Venue-11-1.jpg',
		category: 'branding'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: 'digital'
	},
	{
		title: 'Project 2',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/WMM-Creative-Creds-V7-137-2.jpg',
		category: 'digital'
	},
	{
		title: 'Project 1',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Cloud_Stage-1.jpg',
		category: 'digital'
	},
	{
		title: 'Project 5',
		width: 1800,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/tata1.jpg',
		category: 'digital'
	},
	{
		title: 'Project 3',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Stall_002-1.jpg',
		category: 'digital'
	},
	{
		title: 'Project 4',
		width: 900,
		height: 646,
		src: 'https://watermarkexperience.in/wp-content/uploads/2023/11/Venue-11-1.jpg',
		category: 'digital'
	},
]

const Projects: React.FC = () => {
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
			<div className='bg-white relative text-black flex items-center justify-center min-h-30vh md:min-h-60vh'>
				<Link
					href='/'
					className='absolute w-20 md:w-40 top-2.5 start-3 md:start-5'
				>
					<Image
						src={'/logo-light.svg'}
						alt='wm-logo'
						layout='responsive'
						width={160}
						height={64}
						objectFit='contain'
						priority
					/>
				</Link>
				<div className='text-center'>
					<h2 className='text-3xl md:text-[4rem] md:leading-[4rem] max-w-4xl font-semibold tracking-wider relative inline-block mr-2'>
						{'All Projects'}
						<div ref={arrowRef} className='absolute hidden md:block right-0 transform translate-x-full -translate-y-1/2 top-1/2'>
							<Image
								src='https://watermarkexperience.in/wp-content/uploads/2023/12/Header_img_arrow.png'
								alt='Arrow'
								width={50}
								height={50}
								layout='fixed'
							/>
						</div>
					</h2>
					<p className='max-w-4xl mx-auto text-sm md:text-base barlow-regular mt-8 text-gray-600'>
						As a brand we have always applauded initiatives that empower our
						environment, and not just create happy customer relationships. We
						now have taken a step further by championing this cause, and our new
						brand identity embodies this philosophy.
					</p>
				</div>
			</div>

			<Gallery items={items} />

			<ServiceFooter />
		</>
	)
}

export default Projects
