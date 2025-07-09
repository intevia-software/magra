import React from 'react';

import Cube from '../components/Cube'


const About = () => {
    return (

    <section className="text-gray-600 body-font overflow-hidden bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-full mx-auto flex flex-wrap justify-around items-center">
                <div className="w-full lg:w-1/2 block my-16">
                    <Cube />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6  lg:mt-0 mt-16">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 open-bold">The Catcher in the Rye</h1>
                    <hr className="w-fill bg-black mb-10" />
                    <p className="leading-relaxed open-light text-base lg:text-lg">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    
                
                </div>
            </div>
        </div>
        </section>
       
        
    );
};

export default About;