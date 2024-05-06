import React, { useState } from 'react';
import VideoTabs from './Hero3';

const links = [
    { name: 'STEP 1', href: '#', content: 'Login to website', link: 'https://www.youtube.com/watch?v=KSX4cwWRzis' },
    { name: 'STEP 2', href: '#', content: 'search your fav meal', link: 'https://www.youtube.com/watch?v=tI1jF98hlmM' },
    { name: 'STEP 3', href: '#', content: 'place order', link: 'https://www.youtube.com/watch?v=XSdM5QB-Z20' },
    { name: 'STEP 4', href: '#', content: 'payment', link: 'https://www.youtube.com/watch?v=GCO6LxV1uiE' },
]

export default function Example() {

    const [currentVideo, setCurrentVideo] = useState(null);

    const handleVideoClick = (videoLink) => {
        setCurrentVideo(videoLink);
    };
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://unsplash.com/photos/vegetable-salad-oPBjWBCcAEo"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div class='flex'>
                    <div class="w-1/2 p-4">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Here's how it works</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    START A FREE TRIAL
                                </p>
                            </div>
                            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                    {links.map((link) => (
                                        <button onClick={() => handleVideoClick(link.link)} className="text-white-500 hover:underline">
                                            {link.name} <span aria-hidden="true">&rarr;</span>
                                            <br></br>
                                            {link.content}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 bg-gray-400 p-4 ">
                        <div className="bg-gray-900 text-white py-16 relative">
                            <div className="container mx-auto flex items-center justify-center flex-col">
                                <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                                <p className="text-lg mb-8">Learn more about our services.</p>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Watch Video</button>
                                {currentVideo && (
                                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                                        <div className="w-full h-full max-w-screen-lg max-h-screen-lg">
                                            <button className="absolute top-4 right-4 text-white text-lg">&times;</button>
                                            <iframe
                                                className="w-full h-full"
                                                src={currentVideo}
                                                title="Embedded Video"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoTabs />
        </>
    )
}
