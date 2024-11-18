// components/ImageRow.tsx
import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon (requires react-icons)

const images = [
  "/shots/IMG_7496.jpg",
  "/shots/IMG_7662.jpg",
  "/shots/IMG_7762.jpg",
  "/shots/KICC.jpg",
  "/shots/IMG_9407.jpg",
  "/shots/DSC_0033.jpg",
];

const ImageRow: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-0">
      <h2 className="mb-3 text-2xl font-medium xl:text-3xl xl:font-bold text-black">Social Media</h2>
      <h2 className="mb-3 text-3xl font-medium xl:text-4xl xl:font-bold text-black">Follow us on Instagram</h2>
      
      {/* Container for responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-5 md:gap-10">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img
              src={src}
              className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg rounded-lg"
              alt={`Image ${index + 1}`}
            />
            {/* Overlay for Instagram icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaInstagram className="text-white text-5xl" />
            </div>
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRow;
