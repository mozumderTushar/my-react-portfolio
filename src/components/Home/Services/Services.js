import React from "react";
import './Services.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  FaCircleNotch,
  FaHospital,
  FaCreativeCommonsSampling,
  FaTrain,
  FaFileAudio,
  FaHamburger,
} from "react-icons/fa";


const Services = () => {
  const [header] = React.useState({
    mainHeader: "PROJECTS",
    subHeading: "My Projects",
    text:
      "Some Things I've Built",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaCreativeCommonsSampling className="commonIcons" />,
      heading: "CREATIVE AGENCY",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      LiveLink:"https://github.com/mozumderTushar/hard-rock.git",
      text:
        "A Service Selling Website, Where Users Can Get Their Required Services.",
    },
    {
      id: 2,
      icon: <FaHospital className="commonIcons" />,
      heading: "DOCTORS PORTAL",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      LiveLink:"https://github.com/mozumderTushar/hard-rock.git",
      text:
        "A Service Giving Website, Where Patients Can Pick The Date And Time And Fix Appointments.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "VOLUNTEER NETWORK",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      LiveLink:"https://github.com/mozumderTushar/hard-rock.git",
      text:
        "A Social Servicing Website With Dashboard And Multiple Options Of Volunteer Event.",
    },
    {
      id: 4,
      icon: <FaTrain className="commonIcons" />,
      heading: "TRAVEL GURU",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      LiveLink:"https://github.com/mozumderTushar/hard-rock.git",
      text:
        "A Traveling Website With Multiple Options Of Tourist Places. Users Can Easily Find Their Favorite Places & Hotels.",
    },
    {
      id: 5,
      icon: <FaFileAudio className="commonIcons" />,
      heading: "HARD ROCK",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      LiveLink:"https://github.com/mozumderTushar/hard-rock.git",
      text:
        "Hard Rock Boasts An Extensive Library Of Song Lyrics Presented In A Clean And Crisply Designed Website.",
    },
    {
      id: 6,
      icon: <FaHamburger className="commonIcons" />,
      heading: "AWESOME FOOD",
      githubLink:"https://github.com/mozumderTushar/hard-rock.git",
      LiveLink:"https://github.com/mozumderTushar/hard-rock.git",
      text:
        "A Food Delivery Website, Where Users Can Pick There Favorite Food And Order The Food",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-md-4 bgMain text-center">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <a href={info.githubLink}><GitHubIcon className="commonIcons"></GitHubIcon></a>
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
