import { Chip } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React, { useEffect } from 'react';
import Nav from '../Home/Nav/Nav';
import './Projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt, FaGithub,
} from "react-icons/fa";

const Projects = () => {

  window.scrollTo(0, 0);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="bgMain text-white" >
      <Nav />
      <div className="container project__container">
        <div className="work__caption text-center">
          <h2 data-aos="zoom-in" style={{ borderBottom: '2px solid gray' }} className='pb-3'>Some Things I've Built</h2>
        </div>

        {/* first project */}
        <div className="work__project mt-5">
          <div data-aos="zoom-in">
            <a href="https://mentex-5b2ed.web.app/" className="link">
              <img src='https://i.ibb.co/HxMsvTD/Capture.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div data-aos="fade-down-right">
            <h5>Featured Project</h5>
            <h2 style={{ color: "rgb(255, 90, 95)" }}>MenTex</h2>
            <div>
              <p>
                ❖ MenTex is a web based website for online social support platform for mentally disturbed
                people. It is fully online based system.Anyone can access this website by creating an account.
                They can Post their feelings and thoughts with pictures also. They also can Delete their post
                from stories. Other users can like his/her posts and comments on the posts, can like the
                comments and replied to the comment. Users can interact with experts individually. Experts
                are added to the website by the admins. They can add more admins and experts. Admin also
                can edit expert’s any information or delete any experts from the website. They can request
                any expert who are available on the platform for help and advice via post their problem
                through a form where they can select from which expert they want advice. The Expert will
                reply an advice and the advice will appear on the particular user’s dashboard who asked for
                help. The user can view the advice from his dashboard and also download the pdf form of
                advices. There is a Contact Us page form where user can email any suggestion to the
                website administration. And there also messenger plugin user can send messages to
                website’s page
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="React" />
              <Chip label="Firebase" />
              <Chip label="NodeJs" />
              <Chip label="MongoDB" />
              <a href="https://github.com/mozumderTushar/mentex.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://mentex-5b2ed.web.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>

        {/* second project */}
        <div className="work__project mt-5">
          <div data-aos="zoom-in">
            <a href="https://creative-agency-19e08.web.app/" className="link">
              <img src='https://i.ibb.co/swLjRx8/1-Landing-page.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div data-aos="fade-down-right">
            <h5>Featured Project</h5>
            <h2 style={{ color: "rgb(255, 90, 95)" }}>Creative Agency</h2>
            <div>
              <p>
                ❖ A single-page web app with admin & customer dashboard.
                When a user logs in, the app can detect whether the user is admin or not. If the user is admin he can
                see the admin dashboard & if not redirects to the customer dashboard.
                An admin can add services, make new admin & see all
                services at the dashboard.
                Customer can order services, make review & get to know
                his all order.
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="React" />
              <Chip label="Firebase" />
              <Chip label="NodeJs" />
              <Chip label="MongoDB" />
              <a href="https://github.com/mozumderTushar/creative-agency-client.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://creative-agency-19e08.web.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>

        {/* third project */}
        <div className="work__project" data-aos="fade-up">
          <div >
            <a href="https://doctors-portal-2ba18.web.app/" className="link">
              <img src='https://i.ibb.co/qC1sGfg/doctor-56b2f293.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div>
            <h5>Featured Project</h5>
            <h2 style={{ color: "red" }}>Doctors Portal</h2>
            <div>
              <p>
                ❖ A single-page web app with a dashboard where patients can pick a date, time & fix an appointment
                with the doctor.
                The doctor's and patient's dashboards are separate. When a user logs in, this app can detect whether
                the user is a doctor or not.
                A doctor can review his appointment on a particular date & see his all appointments.
                A patient also can see his appointment with the doctor on
                a particular date.
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="React" />
              <Chip label="Firebase" />
              <Chip label="NodeJs" />
              <Chip label="MongoDB" />
              <a href="https://github.com/mozumderTushar/doctors-portal-v.1-client-master.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://doctors-portal-2ba18.web.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>

        {/* fourth project */}
        <div className="work__project" data-aos="zoom-in">
          <div >
            <a href="https://volunteer-network-ccdb0.web.app/" className="link">
              <img src='https://i.ibb.co/1Ky0F1Z/1-Landing-page.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div >
            <h5>Featured Project</h5>
            <h2 style={{ color: "rgb(255, 90, 95)" }}>Volunteer Network</h2>
            <div>
              <p>
                ❖ A single-page web app with dashboard & multiple options
                of the volunteer event.
                User can register as a volunteer & check his all previous registered
                event.
                To register as a volunteer & check previously registered event user must have to log in first with
                their google account.
                Admin can add events or delete registered volunteers.
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="React" />
              <Chip label="Firebase" />
              <Chip label="NodeJs" />
              <Chip label="MongoDB" />
              <a href="https://github.com/mozumderTushar/volunteer-network-client.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://volunteer-network-ccdb0.web.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>

        {/* five project */}
        <div className="work__project mb-5" data-aos="fade-up">
          <div>
            <a href="https://appartment-hunt1.web.app/" className="link">
              <img src='https://i.ibb.co/gjTXz7s/Home-page.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div >
            <h5>Featured Project</h5>
            <h2 style={{ color: "rgb(255, 90, 95)" }}>Apartment Hunt</h2>
            <div>
              <p>
                ❖ User can select view details button in any of the apartments shown below.Then, user will be routed to details page where they will be given with a form.
                In the form, they can request booking.If the user is not logged in, they’ll be routed to the login page.
                After logging in, they can request booking and then go to my rent tab in the dashboard.They can view their rents over there.
                There is an admin panel too, where in booking list tab, admin can see how many users have logged in.
                In admin panel, add rent house tab, admin can add any new apartments and will appear in the UI.
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="React" />
              <Chip label="Bootstrap" />
              <Chip label="Firebase" />
              <Chip label="MongoDB" />

              <a href="https://github.com/mozumderTushar/appartment-hunt-client1-final.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>

              <a href="https://appartment-hunt1.web.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>

            </div>
          </div>
        </div>

        {/* six project */}
        <div className="work__project">
          <div data-aos="zoom-in">
            <a href="https://travel-guru-c1cf9.web.app/" className="link">
              <img src='https://i.ibb.co/QYXv8Vq/Home.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div data-aos="fade-down-right">
            <h5>Featured Project</h5>
            <h2 style={{ color: "red" }}>Travel Guru</h2>
            <div>
              <p>
                ❖ A single-page traveling web app with multiple options of traveling places and hotels information of
                these places. There are multiple options for sign up, Users can sign up with their Google account,Facebook account also
                sign up with their email after they create an account.
                Users can also use google map to find their hotels in the destination place
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="React" className="cmn" />
              <Chip label="Firebase" />
              <Chip label="MongoDB" />
              <a href="https://github.com/mozumderTushar/travel-guru.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://travel-guru-c1cf9.web.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>

        {/* seven project */}
        <div className="work__project mb-5" data-aos="fade-up">
          <div>
            <a href="https://cocky-noyce-d73451.netlify.app/" className="link">
              <img src='https://i.ibb.co/ysYhxD1/Screenshot-6.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div >
            <h5>Featured Project</h5>
            <h2 style={{ color: "rgb(255, 90, 95)" }}>Awesome Food</h2>
            <div>
              <p>
                ❖ An all around lovely and clean-cut website for all of your recipe desires.
                Find collections based on meals, in addition to snack beverages and more.
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="React" className="cmn" />
              <Chip label="Bootstrap" />
              <Chip label="HTML5" />
              <Chip label="CSS3" />
              <a href="https://github.com/mozumderTushar/my-awesome-food.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://cocky-noyce-d73451.netlify.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>

        {/* eight project */}
        <div className="work__project mb-5" data-aos="fade-up">
          <div>
            <a href="https://mozumdertushar.github.io/hard-rock/" className="link">
              <img src='https://i.ibb.co/tLFJ8TZ/Screenshot-2.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div >
            <h5>Featured Project</h5>
            <h2 style={{ color: "rgb(255, 90, 95)" }}>Hard Rock</h2>
            <div>
              <p>
                ❖ Hard Rock boasts an extensive library of song lyrics presented in a clean and crisply designed website.
                It features a sturdy search bar that allows users to search favorite lyrics by lyrics, melodies, and artists
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="HTML5" />
              <Chip label="CSS3" />
              <Chip label="API" />
              <a href="https://github.com/mozumderTushar/hard-rock.git" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://mozumdertushar.github.io/hard-rock/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>



        {/* nine project */}
        <div className="work__project mb-5" data-aos="fade-up">
          <div>
            <a href="https://athena-design-9250.netlify.app/" className="link">
              <img src='https://i.ibb.co/4ZV2nqw/Web.png' className="img-fluid" alt="" />
            </a>
          </div>
          <div >
            <h5>Featured Project</h5>
            <h2 style={{ color: "rgb(255, 90, 95)" }}>Athena Design</h2>
            <div>
              <p>
                ❖ A Single Page Responsive Web Page With Attractive And Simple Design.
                             </p>
            </div>
            <div className="work__project__bottom">
              <Chip label="HTML5" />
              <Chip label="CSS3" />
              <Chip label="Bootstrap" />
              <a href="https://github.com/samia07farid/athena-design" className="link2">
                <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
              </a>
              <a href="https://athena-design-9250.netlify.app/" className="link2">
                <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;