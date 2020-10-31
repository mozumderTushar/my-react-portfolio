import React, { useEffect, useState } from "react";
import './Services.css'
import {
  FaCircleNotch,
  FaHospital,
  FaCreativeCommonsSampling,
  FaTrain,
  FaFileAudio,
  FaHamburger,
  FaGithub,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Services = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
},[])

  const [header] = useState({
    mainHeader: "PROJECTS",
    subHeading: "My Projects",
    text:
      "Some Things I've Built",
  });
  const [state] = useState([
    {
      id: 1,
      icon: <FaCreativeCommonsSampling className="commonIcons" />,
      heading: "CREATIVE AGENCY",
      githubLink:"https://github.com/mozumderTushar/creative-agency-client.git",
      liveLink:"https://creative-agency-19e08.web.app/",
      text:
        "A Service Selling Website, Where Users Can Get Their Required Services.",
    },
    {
      id: 2,
      icon: <FaHospital className="commonIcons" />,
      heading: "DOCTORS PORTAL",
      githubLink:"https://github.com/mozumderTushar/doctors-portal-v.1-client-master.git",
      liveLink:"https://doctors-portal-2ba18.web.app/",
      text:
        "A Service Giving Website, Where Patients Can Pick The Date And Time And Fix Appointments.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "VOLUNTEER NETWORK",
      githubLink:"https://github.com/mozumderTushar/volunteer-network-client.git",
      liveLink:"https://volunteer-network-ccdb0.web.app/",
      text:
        "A Social Servicing Website With Dashboard And Multiple Options Of Volunteer Event.",
    },
    {
      id: 4,
      icon: <FaTrain className="commonIcons" />,
      heading: "TRAVEL GURU",
      githubLink:"https://github.com/mozumderTushar/travel-guru.git", 
      liveLink:"https://travel-guru-c1cf9.web.app/",
      text:
        "A Traveling Website With Multiple Options Of Tourist Places. Users Can Easily Find Their Favorite Places & Hotels.",
    },
    {
      id: 5,
      icon: <FaFileAudio className="commonIcons" />,
      heading: "HARD ROCK",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      liveLink:"https://mozumdertushar.github.io/hard-rock/", 
      text:
        "Hard Rock Boasts An Extensive Library Of Song Lyrics Presented In A Clean And Crisply Designed Website.",
    },
    {
      id: 6,
      icon: <FaHamburger className="commonIcons" />,
      heading: "AWESOME FOOD",
      githubLink:"https://github.com/mozumderTushar/my-awesome-food.git", 
      liveLink:"https://cocky-noyce-d73451.netlify.app/", 
      text:
        "A Food Delivery Website, Where Users Can Pick There Favorite Food And Order The Food",
    },
  ]);
  return (
    <div className="services"> 
      <div className="container">
        <div className="services__header">
          <div className="common" data-aos="zoom-in">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain"  data-aos="zoom-in">
            {state.map((info) => (
              <div className="col-md-4 bgMain text-center">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <a href={info.githubLink}><FaGithub style={{height:'30px'}} className="commonIcons mr-3"></FaGithub></a>
                  <a href={info.liveLink}><FaExternalLinkSquareAlt style={{height:'30px'}} className="commonIcons"></FaExternalLinkSquareAlt></a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
