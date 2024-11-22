import { prefix } from '@/prefix';
import { useState, useEffect } from 'react';

interface PortfolioProps {
    setIsPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}

const images = [
    `${prefix}/frames/freepik0.png`,
    `${prefix}/frames/freepik1.png`,
    `${prefix}/frames/freepik2.png`,
    `${prefix}/frames/freepik3.png`,
    `${prefix}/frames/freepik4.png`,
    `${prefix}/frames/freepik5.png`,
    `${prefix}/frames/freepik6.png`,
    `${prefix}/frames/freepik7.png`,
    `${prefix}/frames/freepik8.png`,
    `${prefix}/frames/freepik9.png`,
    `${prefix}/frames/freepik10.png`,
    `${prefix}/frames/freepik11.png`,
    `${prefix}/frames/freepik12.png`,
    `${prefix}/frames/freepik13.png`,
    `${prefix}/frames/freepik14.png`,
];

export default function Portfolio({
    setIsPortfolio
}: PortfolioProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row gap-10 justify-center items-center">
            <div className="relative grid h-[35rem] max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
                {/* Dynamic Background */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url('${image}')` }}
                    >
                        <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                ))}

                {/* Content */}
                <div className="relative z-20 text-center p-6 px-6 py-14 md:px-12">
                    <h2 className="mb-6 text-4xl font-medium text-white">
                        Wondering where our quality shots end up ?
                    </h2>
                    <h5 className="mb-4 text-2xl font-sans text-slate-300">
                        ...Everywhere!
                    </h5>
                    <img
                        alt="Lewis Daniel"
                        src={`${prefix}/shots/chris.webp`}
                        className="relative inline-block h-16 w-16 rounded-full border border-white"
                    />
                    <button onClick={(e) => {
                        e.preventDefault(); // Prevents the default anchor behavior if needed
                        setIsPortfolio(true); // Toggles the portfolio state
                    }} className='visible sm:hidden bg-slate-500 h-14 w-72 mt-7 text-xl font-sans rounded-md'>
                        More shots?
                    </button>
                </div>
            </div>

            <div className='hidden xl:flex flex-col gap-5'>
                <p className='text-4xl text-gray-900 font-sans'>Let's answer why...</p>
                <p className="text-gray-500 w-[500px] text-lg font-sans">
                    Our photographs aren’t just images—they’re storytellers, shaping the way the world sees and experiences moments. From stunning visuals that would grace the pages of top-tier magazines to digital ads capturing attention in microseconds, our shots bring life and emotion to brands, campaigns, and most importantly , an unflickering spotlight towards you , our client. They can be featured in websites, social media, billboards, and even packaging, ensuring that creativity and professionalism reach audiences faster than the speed of light. Each shot, crafted with precision and an eye for detail, becomes a universal language, transforming ideas into unforgettable visuals. Our shots are the music for your eyes ; invoking emotions like musical notes as we capture your journeys and create unforgettable memories.
                </p>
                <button onClick={(e) => {
                    e.preventDefault(); // Prevents the default anchor behavior if needed
                    setIsPortfolio(true); // Toggles the portfolio state
                }}
                    className='bg-slate-900 h-14 w-72 mt-7 text-xl font-sans rounded-md'>
                    More shots?
                </button>
            </div>
        </div>
    );
}
