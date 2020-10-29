import React from 'react';
import Nav from '../Home/Nav/Nav';
import './About.css'

const About = () => {
    return (
        <div className="bgMain" style={{height:'100vh'}}>
            <Nav/>
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/BzzSg21/man-01.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-info text-white">
                            <h1 >About Me</h1>
                            <div className="commonBorder"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;