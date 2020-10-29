import React, { useEffect, useState } from "react";
import ContactMe from "../../ContactMe/ContactMe";
import Nav from "../Nav/Nav";
import './AboutMe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
},[])

  const [header] = useState({
    subHeader: "About Me",
    text:
      "Front End Web Developer",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mayen Uddin Mozumder" },
    { id: 2, title: "Email:", text: "mozumder.tushar002@gmail.com" },
    { id: 3, title: "Phone:", text: "+88 01818852316" },
    { id: 4, title: "Linkedin", text: "mayen-uddin-mozumder-a6659b1b1" },
  ]);
  return (
    <div className="about-container">
      <div className="about">
      <div className="container">
        <div className="common"  data-aos="zoom-in">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter" data-aos="fade-right">
          <div className="col-md-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I'm Mayen Uddin Mozumder Tushar a Front End Web Developer with experience in building and maintaining responsive websites. Proficient in JavaScript and React JS has professional experience working with Node JS, also skilled in Bootstrap, Cascading Style Sheets (CSS), JavaScript, MySQL, MongoDB, HTML5 & CSS3.
                <br /><br />
                I'm highly passionate about JavaScript-based software development technologies such as: <br />
                - MERN Stack (MongoDB, Express.js, React, Node.js)
              </div>
              <div className="about__info-p2">

              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-md-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
