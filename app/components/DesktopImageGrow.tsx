// components/DesktopImageRow.tsx
import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon (requires react-icons)



const DesktopImageRow: React.FC = () => {
    
    return (
        <div className="w-full flex flex-col justify-center items-center px-4">
            <h2 className="mb-3 text-3xl font-semibold text-gray-700 xl:text-3xl  ">Follow us on Instagram</h2>

            {/* Desktop-only layout */}
            <div className="flex flex-row space-y-5">
                <div className="flex flex-col gap-5 py-2">
                    {/* First column of images */}
                    <div className="relative group overflow-hidden rounded-lg" onClick={()=>window.open('https://www.instagram.com/chrispoaura/profilecard/?igsh=dXQzYnJpZnh5cXVv', "_blank")}>
                        <img  loading='lazy' src="/shots/IMG_9885.jpg" className="h-96 w-72 rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FaInstagram className="text-white text-5xl" />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg"  onClick={()=>window.open('https://www.instagram.com/chrispoaura/profilecard/?igsh=dXQzYnJpZnh5cXVv', "_blank")}>
                        <img  loading='lazy' src="/shots/IMG_7662.jpg" className="h-48 w-72 rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FaInstagram className="text-white text-5xl" />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </div>

                <div className="flex flex-col space-x-5"  onClick={()=>window.open('https://www.instagram.com/chrispoaura/profilecard/?igsh=dXQzYnJpZnh5cXVv', "_blank")}>
                    {/* Second column */}
                    <div className=" relative group overflow-hidden rounded-lg h-52 w-full m-5">
                        <img  loading='lazy' src="/shots/IMG_0705.jpg" className="h-52 w-full mx-5 mb-5 rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FaInstagram className="text-white text-5xl " />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>

                    <div className="flex flex-row space-x-5"  onClick={()=>window.open('https://www.instagram.com/chrispoaura/profilecard/?igsh=dXQzYnJpZnh5cXVv', "_blank")}>
                        {/* Third row */}
                        <div className="relative group overflow-hidden rounded-lg">
                            <img  loading='lazy' src="/shots/KICC.jpg" className="h-96 w-fit rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105  group-hover:shadow-lg" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FaInstagram className="text-white text-5xl" />
                            </div>
                            <div className="h-96 absolute rounded-lg inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>

                        <div className="hidden xl:flex  flex-col space-y-5"  onClick={()=>window.open('https://www.instagram.com/chrispoaura/profilecard/?igsh=dXQzYnJpZnh5cXVv', "_blank")}>
                            {/* Fourth column */}
                            <div className="relative group overflow-hidden rounded-lg">
                                <img  loading='lazy' src="/shots/IMG_9407.jpg" className="h-full w-80 rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FaInstagram className="text-white text-5xl" />
                                </div>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            </div>
                            <div className="relative group overflow-hidden rounded-lg"  onClick={()=>window.open('https://www.instagram.com/chrispoaura/profilecard/?igsh=dXQzYnJpZnh5cXVv', "_blank")}>
                                <img  loading='lazy' src="/shots/DSC_0033.jpg" className="h-full w-80 rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FaInstagram className="text-white text-5xl" />
                                </div>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopImageRow;