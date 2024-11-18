// components/TwinklingStar.tsx
import React from "react";
import { motion } from "framer-motion";

const TwinklingStar: React.FC = () => {
  return (
    <motion.div
      className="w-80"
      initial={{ opacity: 0, scale: 0 }} // Start small and invisible
      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} // Scale and fade in, then fade and shrink out
      transition={{
        duration: 2, // Duration of the full cycle
        repeat: Infinity, // Repeat indefinitely
        ease: "easeInOut", // Smooth transition
      }}
    >
      <img  loading='lazy'
        src="/shots/camera.png" // Replace with your star image path
        alt="Twinkling Star"
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default TwinklingStar;
