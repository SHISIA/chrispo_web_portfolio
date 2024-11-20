import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import handleWhatsAppClick from './ContactUtils';
import Image from 'next/image';
import { prefix } from '@/prefix';

const Footer: React.FC = () => {
    return (
        <div className="mt-8 w-full flex flex-col items-center justify-center bg-white pt-9 rounded-xl shadow-lg ">
            <div className="flex flex-row  justify-center items-center gap-10 max-w-7xl px-4 xl:px-0 mx-10 p-5 rounded-lg">
                <div className=" flex flex-col  items-start  justify-between gap-28  mb-10  sm:px-[18px] xl:flex-row xl:px-10">
                    <div className="md:w-[316px]">
                        <p className="text-[18px] font-sans text-white">
                            <h1 className="bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent font-extrabold">
                                <span className="text-rose-600">THE TRAVEL</span> PHOTOGRAPHER
                            </h1>
                        </p>
                        <p className="mt-[18px] text-[17px] xl:text-[15px] font-sans text-gray-800 xl:text-justify md:text-center text-center">
                            At The Travel Photographer, we believe every destination has a story waiting to be told. We go beyond the lens to capture the essence of each experience, preserving the vibrant colors, hidden corners, and unforgettable moments that make the adventures unique. Allow us to turn your travels into timeless memories.
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <p className="text-gray-700 text-xl">Social media</p>
                        <div className=" flex flex-col gap-4">
                            <a className="" target="_blank" rel="noopener noreferrer" href="#">
                            </a>

                            <a
                                className="flex justify-start items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/chrispoaura/profilecard/?igsh=dXQzYnJpZnh5cXVv"
                            >
                                <Image
                                    alt="Instagram icon"
                                    src={`${prefix}/icons/ig.png`}
                                    width={40}
                                    height={40}
                                    priority={false}
                                />
                                <span className="ml-2">Instagram</span>
                            </a>
                            <a
                                className="flex justify-start items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/AuraChrispo?t=1pvxrPka6IKLl4raEXzxNg&s=09"
                            >
                                <Image
                                    alt="X (Twitter) icon"
                                    src={`${prefix}/icons/x.png`}
                                    width={40}
                                    height={40}
                                    priority={false}
                                />
                                <span className="ml-2">X (Formerly Twitter)</span>
                            </a>
                            <a
                                className="flex justify-start items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.youtube.com/@ChrispoAura"
                            >
                                <Image
                                    alt="YouTube icon"
                                    src={`${prefix}/icons/yt.png`}
                                    width={40}
                                    height={40}
                                    priority={false}
                                />
                                <span className="ml-2">YouTube</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[316px] flex flex-col justify-start items-start">
                        <p className="text-gray-700 text-xl">Reach out to us</p>
                        <div className="mt-[23px] flex">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full">
                                <FaPhone className="text-blue-500 text-xl" /> {/* WhatsApp icon with color and size */}
                            </div>
                            <div className="ml-[18px]">
                                <p className="font-Inter text-[20px] font-medium text-gray-900">You can call:</p>
                                <a href="tel:+254718099447" className="font-Inter text-[14px] font-medium text-gray-800">
                                    +254 718 099447
                                </a>

                            </div>
                        </div>

                        <div className="mt-[23px] flex" onClick={() => handleWhatsAppClick()}>
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full">
                                <FaWhatsapp className="text-green-500 text-xl" /> {/* WhatsApp icon with color and size */}
                            </div>
                            <div className="ml-[18px]">
                                <p className="font-Inter text-[20px] font-medium text-gray-900">Whatsapp us:</p>
                                <a className="font-Inter text-[14px] font-medium text-gray-800" >
                                    +254 718 099447
                                </a>

                            </div>
                        </div>

                        <div className="mt-[23px] flex">
                            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full">
                                <FaEnvelope className="text-gray-600 text-xl" /> {/* Gmail icon with color and size */}
                            </div>
                            <div className="ml-[18px] flex flex-col text-start">
                                <p className="font-Inter text-[20px] font-medium text-gray-900">Email us at:</p>
                                <a href="mailto:chrispoaura@gmail.com" className="font-Inter text-[14px] font-medium text-gray-800">
                                    chrispoaura@gmail.com
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr />
            <div className="container mx-auto text-center py-10">
                <p className="text-sm">&copy; 2024 <strong className="text-black">The Travel Photographer</strong>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
