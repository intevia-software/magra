import React from 'react';
import img_1 from '../media/img/man.jpg'
import img_2 from '../media/img/labtop.jpg'
import img_3 from '../media/img/ville.jpg'
import img_4 from '../media/img/tableau.jpg'

const Second = () => {
    return (
        <div className="w-full px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-36 bg-gray-50 py-20">
            <div className="w-full lg:w-3/5">
                <div className="w-full block lg:flex items-center justify-between">
                    <div className="w-full bg-gray-500  mx-5 p-5">
                        <img src={img_1} alt="" className="" />
                    </div>
                    <div className="w-full bg-gray-500  mx-5 p-5">
                        <img src={img_2} alt="" className="" />
                    </div>
                    <div className="w-full bg-gray-500  mx-5 p-5">
                        <img src={img_3} alt="" className="" />
                    </div>
                </div>
                <div className="w-full block lg:flex  justify-between py-20">
                    <div className="w-full py-5  mx-5">
                        <h3 className="open-bold text-gray-700">Lorem ipsum dolor sit amet consectetur. </h3>
                        <p className="text-gray-700 open-light my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p className="text-gray-700 open-light mt-16  text-sm">Lorem ipsum dolor.</p>
                        <div className="flex">
                            <span className="mr-5 text-orange-100">1000K</span>
                            <span className="text-orange-100">500K</span>
                        </div>
                        <div className="flex mt-10">
                            <button className="px-5 rounded-lg bg-gray-500">Lorem</button>
                            <span className="px-5 rounded-lg bg-gray-500 mx-5">Lorem ipsum dolor</span>
                        </div>

                    </div>
                    <div className="w-full  mx-5  ">
                        <img src={img_4} alt="" className="  shadow-perso" />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-2/5">
            
            </div>

        </div>
    );
};

export default Second;