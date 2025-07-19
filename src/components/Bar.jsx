import React from 'react';
import Link from '../components/Link'

const Bar = () => {
    return (
        <div className="w-full px-0 lg:px-0 xl:px-5 2xl:px-36 mt-24 pt-10 bg-gray-100">
            <div className="w-full block lg:flex pb-8 px-5 items-center">
                <div className=" lg:w-1/3 block text-center lg:text-left">
                    <p className="text-gray-700 open-bold text-base ">Become premieum</p>
                    <p className="text-gray-700 open-bold text-base my-2">Phone: +33 00 00 00 00 00</p>
                </div>
                <div className="w-full lg:w-2/3 block my-10 lg:my-0 ">
                    <div className="  w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-5 gap-y-2 justify-end">

                        <Link text="Go here after this" />
                        <Link text="Premieum acount " />
                        <Link text="Weather of moment" />
                        <Link text="Spring in country" />


                    </div>
                    <div className="  w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-5 gap-y-2 mt-2 lg:mt-2 justify-end">


                        <Link text="Small idea here" />
                        <Link text="Now register in time" />
                        <Link text="Ground then him" />
                        <Link text="More info in call" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Bar;