import React from 'react';
import Hero from '../component/Hero';
import Services from './Service';
import Gallary from '../component/Gallary';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Gallary />
        </div>
    );
};

export default Home;