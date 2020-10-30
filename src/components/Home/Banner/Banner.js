import React, { useState } from "react";
import './Banner.css'
import myResume from "../../../../src/resume/Resume_of_Tushar.pdf"
import Typical from 'react-typical'
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaFileDownload,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';

const Banner = () => {

  const [state] = useState({
    title: "I am Mayen Uddin Mozumder",
    text:
      "I'm professional web developer with long time \
    experience in this field​",
    image: "/images/man-01.png",
  });
  return (
    <div>
       <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 50, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  
                  <li>
                    <a href="https://web.facebook.com/profile.php?id=100009477859668">
                      <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MozumderTushar1">
                      <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mozumderTushar">
                      <FaGithub className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mayen-uddin-mozumder-a6659b1b1/">
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <Typical
                  steps={['I am ', 1000, 'Mayen Uddin', 100]}
                  loop={Infinity}
                  wrapper="h1"
                />
                <p>{state.text}</p>
                <div className="header__buttons">
                  <Link to={myResume} className="btn btn-outline" target="_blank" download>
                  <FaDownload className="mr-2"/> 
                    My Resume</Link>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Banner;
