import React from 'react';
import Nav from '../Home/Nav/Nav';
import './About.css'

const About = () => {
    return (
        <div className="bgMain" style={{ height: '100vh' }} >
            <Nav />
            <div className="container my-5" >
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/BzzSg21/man-01.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="about-info text-white">
                            <h1 >About Me</h1>
                            <div className="commonUnderLine mb-4"></div>
                            <p >
                                Hi there, <br/>
                                I'm Mayen Uddin Mozumder Tushar a Front End Web Developer with experience in building and maintaining responsive websites. Proficient in JavaScript and React JS has professional experience working with Node JS, also skilled in Bootstrap, Cascading Style Sheets (CSS), JavaScript, MySQL, MongoDB, HTML5 & CSS3.
                                <br/><br/>
                                I'm highly passionate about JavaScript-based software development technologies such as: <br/>
                                - MERN Stack (MongoDB, Express.js, React, Node.js)
                            </p>
                            <button className="btn btn-secondary">REACT</button>
                            <button className="btn btn-secondary ml-2">JAVASCRIPT</button>
                            <button className="btn btn-secondary ml-2">NODE</button>
                            <button className="btn btn-secondary ml-2">MONGODB</button>
                            <button className="btn btn-secondary ml-2">HTML</button>
                            <button className="btn btn-secondary ml-2">CSS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;