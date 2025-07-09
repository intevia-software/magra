import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Hero = () => {
    return (
        <ParallaxProvider>
            <header className="header-home h-screen ">
                <div className="w-full lg:w-1/2 flex justify-center items-center mx-auto text-center h-full">
                    <Parallax speed={-20}>
                        <div className="w-full text-center">
                            <h2 className="text-lg lg:text-2xl text-gray-200 open-light">by Creative Tim</h2>
                            <h1 className="text-4xl lg:text-6xl text-gray-100 uppercase mt-4 mb-10 open-light">magra</h1>
                            <div className="w-full flex justify-between">
                                <hr className="w-full bg-gray-100 mx-10" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-gray-100" viewBox="0 0 512 512">
                                    <path d="M208 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 140.9 122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L352 256l122 70.4c15.3 8.8 20.6 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L304 339.1 304 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-140.9L86 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7c-8.8-15.3-3.6-34.9 11.7-43.7L160 256 38 185.6c-15.3-8.8-20.5-28.4-11.7-43.7l16-27.7C51.1 98.8 70.7 93.6 86 102.4l122 70.4L208 32z"/>
                                </svg>
                                <hr className="w-full bg-gray-100 mx-10" />

                            </div>
                            <p className="w-full lg:w-21/2 text-base lg:text-xl p-5 text-gray-100 mx-auto mt-16 open-light">Create a beautiful and stylish presentation page foryour company, agency, personal portfolio or startup.</p>
                        </div>
                    </Parallax>
                </div>
            </header>
        </ParallaxProvider>

    );
};

export default Hero;