import React, { useState, useEffect } from 'react';
import NextJsImage from '@/components/NextJsImage';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface FilterButtonProps {
	label: string
	active: boolean
	onClick: () => void
}

const FilterButton: React.FC<FilterButtonProps> = ({
	label,
	active,
	onClick
}) => {
	return (
		<div className='relative'>
			<button
				className='filter-btn uppercase text-base text-black px-8 whitespace-nowrap'
				onClick={onClick}
			>
				{label}
			</button>
			{active && (
				<div className='absolute top-2.5 left-5 md:left-0 w-1/2 md:w-full h-0.5 bg-[#00a7b3] transform -rotate-45'></div>
			)}
		</div>
	)
}

interface GalleryItem {
  src: string;
  title: string;
  width: number;
  height: number;
  category: string;
}

interface FilteredGalleryProps {
  items: GalleryItem[];
}

const FilteredGallery: React.FC<FilteredGalleryProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(items);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (activeCategory) {
      const newItems = items.filter(item => item.category === activeCategory);
      setFilteredItems(newItems);
    } else {
      setFilteredItems(items);
    }
  }, [activeCategory, items]);

  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div className="bg-white">
      <div className="flex overflow-x-auto md:overflow-hidden md:justify-center items-center hide-scrollbar mb-16">
        {categories.map((category, index, arr) => (
            <React.Fragment key={index}>
              <FilterButton
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
              {index !== arr.length - 1 && (
                <div className='border-l h-6 transform rotate-90 border-[#00a7b3]' />
              )}
            </React.Fragment>
        ))}
      </div>
      <div className="w-full md:w-10/12 mx-auto px-2 pb-16">
        <PhotoAlbum
          layout="rows"
          photos={filteredItems}
          // defaultContainerWidth={1200}
          // sizes={{ size: "calc(100vw - 240px)" }}
          renderPhoto={NextJsImage}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={filteredItems}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
};

export default FilteredGallery;
