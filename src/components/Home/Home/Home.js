import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Services />
            <About />
            <Contact />
           
        </div>
    );
};

export default Home;