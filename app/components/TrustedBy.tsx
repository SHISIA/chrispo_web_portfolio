import React, { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { prefix } from "@/prefix";


const logos = [
    { src: `${prefix}/images/kisumu.png`, alt: "County Government of Kisumu" },
    { src: `${prefix}/images/aar.png`, alt: "AAR Healthcare" },
    { src: `${prefix}/images/judiciary.png`, alt: "The Judiciary of Kenya" },
    { src: `${prefix}/images/Trinityforest.png`, alt: "Trinity Forest Services , Bombo Uganda" },
  ];


const TrustedBy: React.FC = () => {
  // Use the correct type for the slider instance
  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 3, // 3 slides for tablets and desktops
            spacing: 20, // Adjust spacing for larger screens if needed
          },
        },
      },
  });

  // Autoscroll Effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderInstance.current) {
        sliderInstance.current.next(); // Fixes the `next` method error
      }
    }, 3000); // 3000ms = 3 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [sliderInstance]);

  return (
    <div className="bg-white py-6 w-full px-8 xl:px-36">
      <h2 className=" text-center text-xl font-semibold text-gray-700 mb-4 ">
        Trusted By
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center  flex-col"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain "
              width={50}
              height={48}
            />
            <p className="text-[10px] xl:text-[15px]">{logo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

