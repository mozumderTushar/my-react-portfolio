import React from "react";
import './Banner.css'
import myResume from "../../../../src/resume/Resume_of_Tushar.pdf"
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Mayen Uddin Mozumder",
    text:
      "I'm professional web developer with long time \
    experience in this field​",
    image: "/images/man-01.png",
  });
  return (
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
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <Link to={myResume} className="btn btn-outline" target="_blank" download>My Resume</Link>
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
  );
};

export default Banner;
