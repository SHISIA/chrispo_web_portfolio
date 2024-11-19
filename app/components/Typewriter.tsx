import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export const Typewriter = () => {
  return (
    <div className="flex items-start justify-start bg-transparent px-8 pt-20 pb-10 text-neutral-800 max-w-7xl">
      <BlockInTextCard
        text={
          <>

            <div className="flex flex-row">
              <Typography className="flex text-7xl bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent mt-1">C</Typography>
              <img className="h-16 mt-2 -ml-3 -mr-3" src="/shots/camera_lens.png" alt="camera icon"/>
              <Typography className="flex-ml-5 text-7xl bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent ">pturing </Typography>
            </div>
            <Typography className="flex-ml-5 text-7xl bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent "> Moments . . . </Typography>
            <p className="text-md font-sans text-justify bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent">Embark on a visual journey with our photography services, where moments are not just captured but crafted into timeless , priceless memories with a personal touch of love and professionalism.</p>
          </>
        }
        examples={[
          "Travel Photography",
          "Event Photography",
          "Landscape Photography",
          "Headshot Photography",
          "Family Photography",
          "Real Estate & Architectural Photography",
          "HDR Photography",
          "Sports Photography",
          "Wedding Photography",
          "Fashion Photography",
          "Fitness Photography",
          "Commercial Photography",
          "Portrait Session"
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({
  text,
  examples,
}: {
  text: ReactNode;
  examples: string[];
}) => {
  return (
    <div className="w-full max-w-xl space-y-6 justify-start items-start xl:p-9">
      <span className="max-w-lg text-xl leading-relaxed text-start ">{text}</span>
      <div className="justify-start text-start">
        <Typewrite examples={examples} />
        <hr className="border-neutral-300" />
      </div>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-3xl font-light uppercase">
      <span className="ml-3">
        {/* <p className="text-black text-xl">Are you in need of</p> */}
        {/* <CameraIcon fontSize="large" sx={{  fill:"black"}} />:{" "} */}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative bg-gradient-to-r from-stone-400 to-gray-600 bg-clip-text text-transparent"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-transparent"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};