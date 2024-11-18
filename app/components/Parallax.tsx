// components/ParallaxCards.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
];

const ParallaxCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-6 space-y-6 py-20">
      {images.map((image, index) => (
        <ParallaxCard key={index} index={index} image={image} />
      ))}
    </div>
  );
};

const ParallaxCard: React.FC<{ image: string; index: number }> = ({ image, index }) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setOffset(scrollY * 0.5); // Parallax scroll speed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="w-72 h-96 relative overflow-hidden rounded-lg shadow-xl bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 25 }}
      style={{
        transform: `translateY(${offset}px)`, // Apply parallax scrolling effect
      }}
    >
      <motion.img
        src={image}
        alt={`Image ${index}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ParallaxCards;
