import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectMediaCarousel = ({ media, coverImage }) => {
  // Initialize with media array that includes the coverImage if provided
  const allMedia = coverImage
    ? [{ type: 'image', src: coverImage.src, alt: coverImage.alt }, ...media]
    : media;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allMedia.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        {allMedia.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || `Project image ${index + 1}`}
                className="w-full h-full object-contain bg-white dark:bg-gray-800"
              />
            ) : item.type === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                className="w-full h-full object-contain"
              />
            ) : null}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {allMedia.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-opacity z-10"
            aria-label="Previous media"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-opacity z-10"
            aria-label="Next media"
          >
            <FiChevronRight size={20} />
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {allMedia.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
          {allMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to media ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectMediaCarousel;
