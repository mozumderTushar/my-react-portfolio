import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import Services from '../Services/Services';
import AboutMe from '../AboutMe/AboutMe';


const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Services />
            <AboutMe />
            <Contact />
           
        </div>
    );
};

export default Home;