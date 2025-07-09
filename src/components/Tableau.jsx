import React from 'react';
import {gsap} from 'gsap'

const Tableau = (props) => {


    const image = props.image
    const title = props.title
    const text = props.text

    const handleHover = ()=>{

        gsap.to(".box", {css:{ top:"10%"}, duration: 0.8, ease: "power4.out"});
        gsap.to(".arrow", {css:{ top:"34%"}, duration: 0.8, ease: "power4.out"});
    }
    const handleLeave = ()=>{

        gsap.to(".box", {css:{ top: "0%"}, duration: 0.1, ease: "power4.out"});
        gsap.to(".arrow", {css:{ top:"10%"}, duration: 0.8, ease: "power4.out"});
    }




    return (
        <div className="relative mx-5 group overflow-hidden rounded-lg my-5">
            {/* Image */}
            <img
                src={image}
                alt=""
                className="w-full h-auto object-cover border border-gray-700 rounded-lg"
            />

            {/* Overlay avec fondu noir */}
            <div  onMouseEnter={handleHover} onMouseLeave={handleLeave} className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition ease-out duration-500 z-10 flex  justify-center">
                {/* Texte qui apparaît au hover */}
                <div className="relative w-1/2 mx-auto text-white text-center top-36 lg:top-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                    <h2 className="w-full mx-auto text-2xl open-bold absolute  uppercase">{title}</h2>
                    <p className="w-full box open-light absolute top-[10%]  lg:text-base mt-5 mx-auto">{text}</p>
                    <div className="w-full flex justify-center">
                        <a href="" className="w-10 h-10 arrow absolute top-[10%] flex justify-center items-center text-center rounded-full border border-white mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-4"viewBox="0 0 25 25"><path  d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"/></svg>
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Tableau;