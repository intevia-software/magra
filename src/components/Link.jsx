import React,{useState, useEffect, useRef} from 'react';
import {gsap} from 'gsap'

const Link = (props) => {


    const text = props.text;

    return (
        <a className="group relative h-10 flex items-center justify-center lg:justify-end cursor-pointer ">

            <p className="text-gray-700 text-base">{text} </p>
            <div className="ml-5">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-orange-100" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>
           
            
        </a>

    );
};

export default Link;