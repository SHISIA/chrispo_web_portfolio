import { prefix } from "@/prefix";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  `${prefix}/shots/DSC_0033.jpg`,  // Add the paths to your images here
  `${prefix}/shots/DSC_0047.jpg`,
  `${prefix}/shots/IMG_0383.jpg`,
  `${prefix}/shots/IMG_0557.jpg`,
  `${prefix}/shots/IMG_0634.jpg`,
  `${prefix}/shots/IMG_0705.jpg`,
  `${prefix}/shots/IMG_1265.jpg`,
  `${prefix}/shots/IMG_1528.jpg`,
  `${prefix}/shots/IMG_1877.jpg`,
  `${prefix}/shots/IMG_1917.jpg`,
  `${prefix}/shots/IMG_2273.jpg`,
  // Add as many images as you like
];

const BackgroundImages = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 flex flex-wrap justify-center items-center bg-white opacity-35">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="relative w-40 h-60 m-2 sm:w-52 sm:h-72 lg:w-64 lg:h-80 rotate-[-5deg] hover:rotate-0 transition-transform"
          initial={{ rotate: Math.random() * 20 - 10, y: Math.random() * 20 - 10 }}
          animate={{
            y: [0, 10, -10, 0],  // subtle floating effect
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        >
          <Image
            src={src}
            alt={`Background image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg opacity-0 hover:opacity-100"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundImages;
