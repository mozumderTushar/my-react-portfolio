import { Chip } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React, { useEffect } from 'react';
import Nav from '../Home/Nav/Nav';
import './Projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    },[])

    return (
        <div className="bgMain text-white" >
            <Nav/>
            <div className="container project__container">
                <div className="work__caption text-center">
                    <h2 data-aos="zoom-in" style={{borderBottom:'2px solid gray'}} className='pb-3'>Some Things I've Built</h2>
                </div>

                {/* first project */}
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
                                <GitHubIcon className="commonIcons"></GitHubIcon>
                            </a>
                            <a href="https://creative-agency-19e08.web.app/" className="link2">
                                <VisibilityIcon className="commonIcons"></VisibilityIcon>
                            </a>
                        </div>
                    </div>
                </div>

                {/* second project */}
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
                                <GitHubIcon className="commonIcons"></GitHubIcon>
                            </a>
                            <a href="https://doctors-portal-2ba18.web.app/" className="link2">
                                <VisibilityIcon className="commonIcons"></VisibilityIcon>
                            </a>
                        </div>
                    </div>
                </div>

                {/* third project */}
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
                                <GitHubIcon className="commonIcons"></GitHubIcon>
                            </a>
                            <a href="https://volunteer-network-ccdb0.web.app/" className="link2">
                                <VisibilityIcon className="commonIcons"></VisibilityIcon>
                            </a>
                        </div>
                    </div>
                </div>

                {/* fourth project */}
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
                            <Chip label="React" className="cmn"/>
                            <Chip label="Firebase" />
                            <Chip label="MongoDB" />
                            <a href="https://github.com/mozumderTushar/travel-guru.git" className="link2">
                                <GitHubIcon className="commonIcons"></GitHubIcon>
                            </a>
                            <a href="https://travel-guru-c1cf9.web.app/" className="link2">
                                <VisibilityIcon className="commonIcons"></VisibilityIcon>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* fifth project */}
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
                            <Chip label="React" className="cmn"/>
                            <Chip label="Bootstrap" />
                            <Chip label="HTML5" />
                            <Chip label="CSS3" />
                            <a href="https://github.com/mozumderTushar/my-awesome-food.git" className="link2">
                                <GitHubIcon className="commonIcons"></GitHubIcon>
                            </a>
                            <a href="https://cocky-noyce-d73451.netlify.app/" className="link2">
                                <VisibilityIcon className="commonIcons"></VisibilityIcon>
                            </a>
                        </div>
                    </div>
                </div>

                {/* sixth project */}
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
                                <GitHubIcon className="commonIcons"></GitHubIcon>
                            </a>
                            <a href="https://mozumdertushar.github.io/hard-rock/" className="link2">
                                <VisibilityIcon className="commonIcons"></VisibilityIcon>
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Projects;