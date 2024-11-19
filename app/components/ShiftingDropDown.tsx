import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';



const services = [
  {
    title: "Travel Photography",
    description:
      "Capturing the essence of far-off destinations, travel photography tells stories of diverse cultures, landscapes, and people through striking, adventurous imagery.",
    icon: (
      <Image
        src="/shots/IMG_0383.jpg"
        alt="Travel Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Event Photography",
    description:
      "Preserving memories from life's most meaningful events, from corporate gatherings to family celebrations, where every moment counts and details shine.",
    icon: (
      <Image
        src="/shots/IMG_5518.jpg"
        alt="Event Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Landscape Photography",
    description:
      "Celebrating the beauty of nature, landscape photography brings the splendor of the natural world to life with breathtaking shots of mountains, lakes, and sweeping horizons.",
    icon: (
      <Image
        src="/shots/IMG_1877.jpg"
        alt="Landscape Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Headshot Photography",
    description:
      "Perfectly suited for professionals and creatives, headshot photography captures personality and confidence in portraits that make lasting first impressions.",
    icon: (
      <Image
        src="/shots/IMG_2845.jpg"
        alt="Headshot Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Family Photography",
    description:
      "Family photography captures the joy, warmth, and unique connections of loved ones, creating timeless memories to cherish for years to come.",
    icon: (
      <Image
        src="/shots/IMG_7451.jpg"
        alt="Family Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Real Estate & Architectural Photography",
    description:
      "Showcasing the best angles of homes, buildings, and interiors, architectural photography highlights spaces in their finest light for buyers, architects, and designers.",
    icon: (
      <Image
        src="/shots/IMG_0206.jpg"
        alt="Real Estate & Architectural Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "HDR Photography",
    description:
      "With vibrant colors and sharp details, HDR photography creates vivid images that bring out the finest elements of each scene, from cityscapes to natural wonders.",
    icon: (
      <Image
        src="/shots/IMG_2273.jpg"
        alt="HDR Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Wedding Photography",
    description:
      "Documenting love stories with elegance and care, wedding photography captures the heartfelt moments, emotions, and beauty of a couple’s special day.",
    icon: (
      <Image
        src="/shots/DSC_0047.jpg"
        alt="Wedding Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Fitness Photography",
    description:
      "Highlighting strength, determination, and physical achievement, fitness photography captures the journey and spirit of fitness enthusiasts and athletes.",
    icon: (
      <Image
        src="/shots/IMG_1528.jpg"
        alt="Fitness Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Commercial Photography",
    description:
      "Designed to promote brands and products, commercial photography delivers polished images that capture the essence and appeal of what’s being offered.",
    icon: (
      <Image
        src="/shots/IMG_4496.jpg"
        alt="Commercial Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Portrait Session",
    description:
      "Creating personalized portraits that capture the individuality, mood, and story of each subject, delivering more than just a photo but a true reflection.",
    icon: (
      <Image
        src="/shots/IMG_1999-2.jpg"
        alt="Portrait Session"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Sports Photography",
    description:
      "Freezing high-energy moments in time, sports photography captures the excitement, emotion, and action of athletes pushing their limits.",
    icon: (
      <Image
        src="/shots/IMG_7203.jpg"
        alt="Sports Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
  {
    title: "Fashion Photography",
    description:
      "Bringing out style, artistry, and attitude, fashion photography creates bold images that showcase clothing, accessories, and unique aesthetics.",
    icon: (
      <Image
        src="/shots/IMG_1621.jpg"
        alt="Fashion Photography"
        className="rounded-md"
        width={300}
        height={200}
        loading="lazy"
      />
    ),
  },
];


const InfiniteScrollComponent: React.FC = () => {
    const scrollVariants = {
        animate: {
            x: [0, -3000], // Adjust the value -1000 according to your needs
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop' as const,
                    duration: 20, // Adjust the duration to control the speed
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <div className="overflow-hidden w-full">
            <div className="flex space-x-6 overflow-hidden items-center w-full" >
                {services.map((service, index) => (
                    <motion.div  key={index} className="flex flex-col border rounded-lg min-w-72 min-h-60 p-5 text-start space-y-3 shadow-md" variants={scrollVariants} animate="animate">
                        {service.icon}
                        <p className="text-black text-xl font-sans">{service.title}</p>
                        <p className="w-fit h-fit text-justify text-sm text-gray-600">{service.description}</p>
                    </motion.div >
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollComponent;
