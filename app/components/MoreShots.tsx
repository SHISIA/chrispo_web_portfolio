import { prefix } from '@/prefix';
import React, { useState, useRef, useEffect } from 'react';

interface BackArrowProps {
    setIsPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}

const Shots: React.FC<BackArrowProps> = ({ setIsPortfolio }) => {
    const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
    const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState<string | null>(null);
    const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState<number | null>(null);
    const galleryRef = useRef<HTMLUListElement>(null);

    const openImageGallery = (src: string, index: number) => {
        setImageGalleryActiveUrl(src);
        setImageGalleryImageIndex(index);
        setImageGalleryOpened(true);
    };
   

    const closeImageGallery = () => {
        setImageGalleryOpened(false);
        setTimeout(() => setImageGalleryActiveUrl(null), 300);
    };

    const nextImage = () => {
        if (!galleryRef.current || imageGalleryImageIndex === null) return;

        const totalImages = galleryRef.current.childElementCount;
        const newIndex = imageGalleryImageIndex === totalImages ? 1 : imageGalleryImageIndex + 1;
        const newImage = galleryRef.current.querySelector(`[data-index='${newIndex}']`) as HTMLImageElement;
        if (newImage) {
            setImageGalleryActiveUrl(newImage.src);
            setImageGalleryImageIndex(newIndex);
        }
    };

    const prevImage = () => {
        if (!galleryRef.current || imageGalleryImageIndex === null) return;

        const totalImages = galleryRef.current.childElementCount;
        const newIndex = imageGalleryImageIndex === 1 ? totalImages : imageGalleryImageIndex - 1;
        const newImage = galleryRef.current.querySelector(`[data-index='${newIndex}']`) as HTMLImageElement;
        if (newImage) {
            setImageGalleryActiveUrl(newImage.src);
            setImageGalleryImageIndex(newIndex);
        }
    };

    useEffect(() => {
        if (galleryRef.current) {
            const images = galleryRef.current.querySelectorAll('img');
            images.forEach((img, index) => img.setAttribute('data-index', `${index + 1}`));
        }
    }, []);

    return (
        <div className="w-full h-full select-none">
            <section className="px-4 py5 mx-auto h-20 w-full max-w-7xl fixed flex bg-white justify-center items-center">
                <div className="w-full mx-auto text-left gap-5 md:text-center flex justify-center items-center">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault(); // Prevents the default anchor behavior if needed
                            setIsPortfolio(false); // Toggles the portfolio state
                        }}
                        className="cursor-pointer hover:bg-slate-900 w-24 hover:text-white text-gray-900 rounded-3xl p-2 flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 12h14.25M8.25 16.5L3 12l5.25-4.5"
                            />
                        </svg>
                        Back
                    </a>

                    <h1 className="mb-0 text-4xl font-extrabold leading-none tracking-normal text-gray-900  md:tracking-tight">
                        <span className="block w-full font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                            Here's to the crazy shots
                        </span>
                    </h1>
                </div>
            </section>

            <section className="max-w-6xl mx-auto p-5  mt-20">
                <ul ref={galleryRef} className="grid grid-cols-2 gap-5 lg:grid-cols-5">
                    {[
                        `${prefix}/shots/DSC_0033.webp`,
                        `${prefix}/shots/DSC_0047.webp`,
                        `${prefix}/shots/IMG_0138.webp`,
                        `${prefix}/shots/IMG_0206.webp`,
                        `${prefix}/shots/IMG_0383.webp`,
                        `${prefix}/shots/IMG_0705.webp`,
                        `${prefix}/shots/IMG_1265.webp`,
                        `${prefix}/shots/IMG_1528.webp`,
                        `${prefix}/shots/IMG_1621.webp`,
                        `${prefix}/shots/IMG_1877.webp`,
                        `${prefix}/shots/IMG_1917.webp`,
                        `${prefix}/shots/IMG_1999-2.webp`,
                        `${prefix}/shots/IMG_2273.webp`,
                        `${prefix}/shots/IMG_2279.webp`,
                        `${prefix}/shots/IMG_2845.webp`,
                        `${prefix}/shots/IMG_2849.webp`,
                        `${prefix}/shots/IMG_3054.webp`,
                        `${prefix}/shots/IMG_4496.webp`,
                        `${prefix}/shots/IMG_4628.webp`,
                        `${prefix}/shots/IMG_5516.webp`,
                        `${prefix}/shots/IMG_5518.webp`,
                        `${prefix}/shots/IMG_7203.webp`,
                        `${prefix}/shots/IMG_7451.webp`,
                        `${prefix}/shots/IMG_7496.webp`,
                        `${prefix}/shots/IMG_7662.webp`,
                        `${prefix}/shots/IMG_7665.webp`,
                        `${prefix}/shots/IMG_7737.webp`,
                        `${prefix}/shots/IMG_7762.webp`,
                        `${prefix}/shots/IMG_9407.webp`,
                        `${prefix}/shots/IMG_9456.webp`,
                        `${prefix}/shots/aar_run.webp`,
                        `${prefix}/shots/aar_talk.webp`,
                        `${prefix}/shots/aar.webp`,
                        `${prefix}/shots/IMG_8957.webp`,
                        `${prefix}/shots/IMG_8959.webp`,
                        `${prefix}/shots/IMG_9757.webp`,

                    ].map((src, index) => (
                        <li key={index}>
                            <img
                                onClick={() => openImageGallery(src, index + 1)}
                                src={src}
                                alt={`photo gallery image ${index + 1}`}
                                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                            />
                        </li>
                    ))}
                </ul>
            </section>

            {imageGalleryOpened && (
                <div
                    onClick={closeImageGallery}
                    className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out"
                >
                    <div className="relative flex flex-col items-center justify-center w-11/12 xl:w-4/5 h-11/12">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full bg-white/10 w-14 h-14 hover:bg-white/20"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <img
                            src={imageGalleryActiveUrl!}
                            alt=""
                            className="object-contain object-center w-full h-full select-none cursor-zoom-out"
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full bg-white/10 w-14 h-14 hover:bg-white/20"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shots;
