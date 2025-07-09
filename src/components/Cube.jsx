import React from 'react';
import Banner_1 from '../media/img/banner_1.png'
import Banner_2 from '../media/img/banner_2.png'
import Banner_3 from '../media/img/banner_3.png'
import Banner_4 from '../media/img/banner_4.png'
import Face_1 from '../media/img/face_1.png'
import Face_2 from '../media/img/face_2.png'
import Face_3 from '../media/img/face_3.png'
import Face_4 from '../media/img/face_4.png'

const Cube = () => {
    return (
        <div className="flex items-center justify-center h-full ">
            <div className="perspective-1000">
                <div className="relative w-64 h-72 cube-spin-paused preserve-3d">
                {/* Face avant */}
                <div className="absolute w-64 h-72 bg-white text-white text-center leading-[16rem] text-2xl font-bold shadow-xl" style={{ transform: 'rotateY(0deg) translateZ(128px)' }}>
                    <img src={Banner_1} alt="" />

                    <img src={Face_1} alt="" className="mt-12" />
                </div>

                {/* Face droite */}
                <div className="absolute w-64 h-72 bg-white text-white text-center leading-[16rem] text-2xl font-bold shadow-xl" style={{ transform: 'rotateY(90deg) translateZ(128px)' }}>
                    <img src={Face_2} alt="" />
                    <img src={Banner_2} alt="" className="mt-12"/>
                </div>

                {/* Face arrière */}
                <div className="absolute w-64 h-72 bg-white text-white text-center leading-[16rem] text-2xl font-bold shadow-xl" style={{ transform: 'rotateY(180deg) translateZ(128px)' }}>
                    <img src={Banner_3} alt="" />
                    <img src={Face_3} alt="" className="mt-12" />
                </div>

                {/* Face gauche */}
                <div className="absolute w-64 h-72 bg-white text-black text-center leading-[16rem] text-2xl font-bold shadow-xl" style={{ transform: 'rotateY(-90deg) translateZ(128px)' }}>
                    <img src={Banner_4} alt="" />
                    <img src={Face_4} alt="" className="mt-12" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Cube;