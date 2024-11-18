import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageGallery: React.FC = () => {
    // Update images array here to include any additional image paths
    const images = [
        "/shots/IMG_3054.jpg",
        "/shots/DSC_0033.jpg",  // Add the paths to your images here
        "/shots/DSC_0047.jpg",
        "/shots/IMG_0383.jpg",
        "/shots/IMG_0557.jpg",
        "/shots/IMG_0634.jpg",
        "/shots/IMG_0705.jpg",
        "/shots/IMG_1265.jpg",
        "/shots/IMG_1528.jpg",
        "/shots/IMG_1877.jpg",
        "/shots/IMG_1917.jpg",
        "/shots/IMG_2273.jpg",
        // "/shots/2279.jpg",
        // "/shots/2845.jpg",
        // "/shots/2849.jpg"
        // Add as many images as you like
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const currentContainer = containerRef.current;
        let scrollInterval: NodeJS.Timeout;

        if (currentContainer) {
            // Set up interval for auto-scrolling
            scrollInterval = setInterval(() => {
                if (currentContainer.scrollLeft + currentContainer.clientWidth >= currentContainer.scrollWidth) {
                    // Reset scroll position if at the end of scroll
                    currentContainer.scrollLeft = 0;
                } else {
                    // Scroll a small amount to the right
                    currentContainer.scrollLeft += 1;
                }
            }, 20); // Adjust interval for desired speed

            // Clean up interval on component unmount
            return () => clearInterval(scrollInterval);
        }
    }, []);

    const imageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        whileHover: { scale: 1.05 },
    };

    return (
        <div>
            {/* Shared container for both mobile and desktop */}
            <motion.div
                ref={containerRef}
                className="flex flex-row space-x-5 overflow-hidden max-w-7xl p-4 min-h-72"
            >
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        className="w-60 h-96 xl:w-52 sm:h-72 rounded-lg"
                        alt={`Image ${index}`}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="whileHover"
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default ImageGallery;
