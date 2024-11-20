"use client"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from './components/Typewriter';
import Footer from './components/Footer';
import InfiniteScrollComponent from './components/ShiftingDropDown';
import { motion } from 'framer-motion';
import ContactForm from './components/Contact';
import DesktopImageRow from './components/DesktopImageGrow';
import ContactSection from './components/ContactSectionWhatsapp';
import TrustedBy from './components/TrustedBy';
import Image from 'next/image';
import { prefix } from '@/prefix';
export default function Home() {

  const [showMenu, setShowMenu] = useState(false);

  interface TestimonialProps {
    text: string;
    name: string;
    role: string;
  }

  const Testimonial: React.FC<TestimonialProps> = ({ text, name, role }) => {
    return (
      <div className="text-left mx-auto max-w-sm shadow px-10 py-5 rounded-xl">
        <div className="mb-4 text-black">
          <svg
            height="35px"
            className="mb-2"
            fill="#374151"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
          >
            <g>
              <g id="right_x5F_quote">
                <g>
                  <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                  <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                </g>
              </g>
            </g>
          </svg>
          <p className="mt-2 text-base leading-6">{text}</p>
          <div className="text-sm mt-5">
            <a
              href="#"
              className="font-medium leading-none text-gray-900 hover:text-black transition duration-500 ease-in-out"
            >
              {name}
            </a>
            <p>{role}</p>
          </div>
        </div>
      </div>
    );
  };


  const FloatingCard = () => {
    return (
      <motion.div
        className="relative h-48 w-80 rounded-3xl border border-gray-100 bg-yellow-300 shadow-lg -ml-20 mt-5 bg-gradient-to-r from-blue-200 to-cyan-200"
        initial={{ y: 0, x: 0 }}
        animate={{
          y: [0, -10, 0],  // Vertical movement
          x: [0, -5, 0],    // Horizontal sway
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div className="absolute -left-5 -bottom-0 h-6 w-6 rotate-45 transform border-t border-l border-blue-200 bg-blue-200 shadow-lg rounded-full  "></div>
        <div className="absolute -left-9 -bottom-3 h-4 w-4 rotate-45 transform border-t border-l border-blue-200 bg-blue-200 shadow-lg rounded-lg "></div>
        <div className="absolute -left-12 -bottom-5 h-2 w-2 rotate-45 transform border-t border-l border-blue-200 bg-blue-200 shadow-lg rounded-lg "></div>
        <div className="px-4 xl:px-8">
          <h1 className="mt-6 text-xl font-bold text-slate-900">Hi! Chris here.</h1>
          <p className="text-gray-800">
            Welcome to <strong>The Travel Photographer</strong>&apos;s Internet domain,
            where we do all things Camera. Say cheese!
          </p>
        </div>
      </motion.div>
    );
  };


  const menuRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);
    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className=" relative sm:max-w-full max-w-7xl mx-auto h-screen flex flex-col items-center content-center text-center  isolate  ">
      <div id='homeMobile' className='md:hidden justify-end items-end opacity-100 '>
        <Image alt='chrispo image' width={96} height={96} src='/shots/flipped.png' className='fixed *:-z-20 opacity-10 md:opacity-100 w-96 mt-20 -ml-11 ' />
      </div>
      <div id='home' className="hidden sm:flex flex-row space-x-5 py-6 fixed top-0 bg-white z-50 w-full items-center justify-center h-16">
        <a href='#home' className="cursor-pointer hover:bg-slate-900 w-24 hover:text-white text-gray-900 rounded-3xl p-2" >Home</a>
        <a href='#portfolio' className="cursor-pointer hover:bg-slate-900 w-24 hover:text-white text-gray-900 rounded-3xl p-2" >Portfolio</a>
        <a href='#testimonials' className="cursor-pointer hover:bg-slate-900 w-24 hover:text-white text-gray-900 rounded-3xl p-2" >Testimonials</a>
        <a href='#contactUs' className="cursor-pointer hover:bg-slate-900 w-24 hover:text-white text-gray-900 rounded-3xl p-2" >Contact Us</a>
      </div>

      <div className="sm:hidden w-full flex flex-col items-end pr-5 fixed top-0 right-0 bg-white z-50">
        <div>
          <IconButton
            onClick={() => {
              setShowMenu(!showMenu)
            }}

          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
        {showMenu && (
          <div ref={menuRef} className="sm:hidden flex flex-col items-start justify-start text-start w-full pl-12 space-y-4 pb-4 bg-white  mt-2">
            <a href='#homeMobile' className="cursor-pointer hover:bg-slate-900 w-16 hover:text-white text-gray-900 rounded-md"
              onClick={() => {
                setShowMenu(false)
              }}
            >Home</a>
            <a href='#portfolio' className="cursor-pointer hover:bg-slate-900 w-16 hover:text-white text-gray-900 rounded-md"
              onClick={() => {
                setShowMenu(false)
              }}
            >Portfolio</a>
            <a href='#testimonials' className="cursor-pointer hover:bg-slate-900 w-16 hover:text-white text-gray-900 rounded-md"
              onClick={() => {
                setShowMenu(false)
              }}
            >Testimonials</a>
            <a href='#contactUs' className="cursor-pointer hover:bg-slate-900 w-16 hover:text-white text-gray-900 rounded-md"
              onClick={() => {
                setShowMenu(false)
              }}
            >Contact Us</a>
          </div>
        )}
      </div>
      <div className='bg-transparent flex flex-row justify-start w-full max-w-7xl'>
        <Typewriter />

        <div className='hidden md:flex -z-20  justify-end items-center opacity-100'>
          {/* <img  loading='lazy' src='/shots/flipped.png' className='opacity-100 w-96 border rounded-full' /> */}
          <div className="flex flex-row">

            <div>

              <img alt="chrispo image" width={100} height={100} src={`/shots/flipped.png`} className='opacity-100 w-96 ' />
            </div>
            <FloatingCard />
          </div>


        </div>
      </div>

      <div className='text-start w-full px-0 xl:px-3 max-w-7xl flex flex-col items-center bg-white '>
        <h2 id="portfolio" className="mb-3 text-3xl font-semibold  text-gray-700">Portfolio</h2>
        <InfiniteScrollComponent />
      </div>



      <div className="bg- px-2 py-10">
        <h2 className="mb-3 font-semibold text-gray-700 text-3xl  ">Know our Charges</h2>

        <article className="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
          <div className=" my-4 md:mr-8 md:max-w-sm">
            <img  loading='lazy' className="rounded-2xl" src="/shots/IMG_9456.jpg" alt="" />
          </div>
          <div className="py-4 sm:py-8 flex flex-col justify-center items-center">
            <a href="#" className="mb-6 block text-2xl font-serif text-gray-700 ">Our prices are tailored to specific individual requirements and apply solely on the specific setting.</a>
            <p className="mb-6 text-gray-500">&quot;The price of something is only as heavy as the hands that hold it. To one, it&apos;s a burden; to another, a feather: and yet , to another , it is an obstacle towards photographic greatness&quot;</p>
            <div className="flex flex-row">
              <img loading='lazy' className="h-10 w-10 rounded-full object-cover" src="/shots/flipped.png" alt="Simon Lewis" />
              <p className="ml-4 w-56 items-start flex flex-col">
                <strong className="block font-medium text-gray-700">Chris</strong>
                <span className="text-sm text-gray-400">Dec 26, 2024</span>
              </p>
            </div>
          </div>
        </article>
      </div>

      <DesktopImageRow />

      <div id='testimonials' className='w-full px-10 my-16 bg-white flex justify-center items-center flex-col'>
        <p className='text-3xl font-semibold text-gray-700 mb-8 bg-white'>What Clients say about our Services</p>
        <div className='flex flex-col gap-11 xl:flex-row xl:gap-20 justify-center items-center  w-fit'>
          <Testimonial
            text="We have reviewed the still photographs and they are so nice. Thank you so much. We really appreciate."
            name=" Dr Elizabeth Kalei"
            role="Director Human Resource Management & Development-TheJudiciary of Kenya"
          />

          <Testimonial
            text="Hello. I've checked the final edit of the graduation video for Elsie and Duncan and it is absolutely awesome!!"
            name="Kim Nzioki"
            role="Supply Chain Assistant"
          />
        </div>
      </div>
      {/* <p className="mt-5 text-4xl tracking-tight font-sans text-center ">
      
      </p> */}
      <h2 id="contactUs" className=" text-center text-3xl font-semibold text-gray-700 mb-4 ">
        Contact Us
      </h2>
      <ContactForm />

      <div className='w-full flex justify-center p-4 sm:px-16 max-w-screen-xl'>
        <div className='bg-gray-800 h-96 xl:h-64 items-center text-center justify-center flex flex-col rounded-lg px-5 bg-gradient-to-r from-slate-900 to-slate-700'>
          <Typography className='text-3xl xl:text-5xl px-5 text-white'>Are You Ready to kickstart your project?</Typography>
          <p className='p-2 xl:px-60 text-wrap text-center text-gray-200 font-sans'>Reach out and let&apos;s make it happen ✨. I&apos;m  available for open opportunities to push the boundaries of photography and deliver outstanding work.</p>
          <ContactSection />
        </div>
      </div>
      <div>
        <h2 className="mb-1 mt-5 px-3 text-3xl  xl:text-4xl  text-black font-sans xl:p-5 ">&quot;Capturing Journeys, Creating Memories&quot;</h2>
      </div>
      <TrustedBy />
      <Footer />
      {/* <TwinklingStar/> */}
    </div>

  );
}
