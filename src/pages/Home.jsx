import React from 'react';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';


const Home = () => {
    return (
      <div className="w-full">
        <Hero />
        <About />
        <Gallery />
      </div>
       
    );
};

export default Home;