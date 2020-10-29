import React from 'react';
import "./Footer.css";
import { Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
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

const Footer = () => {
    return (
        <div className="footer" id="contact">
          <div data-aos="zoom-in">
        <div className="footer__header" >
          <h2>Let's build something great together .</h2>
          <p>
            If you'd like to start a new project, need help with an existing
            project or have any other enquiry, please get in touch.
          </p>
        </div>
        <div className="footer__contact">
          <Grid container className="grid">
            <Grid lg={4} xs={12} md={6} className="grid__col">
              <EmailIcon></EmailIcon>
              <div className="grid__col__address">
                <div>
                  <h3>EMAIL</h3>
                  <p>mozumder.tushar02@gmail.com</p>
                </div>
              </div>
            </Grid>
            <Grid lg={4} xs={12} md={6} className="grid__col">
              <CallIcon></CallIcon>
              <div className="grid__col__address">
                <div>
                  <h3>TELEPHONE</h3>
                  <p>+880 1818852316</p>
                </div>
              </div>
            </Grid>
            <Grid lg={4} xs={12} md={6} className="grid__col">
              <LocationOnIcon></LocationOnIcon>
              <div className="grid__col__address">
                <div>
                  <h3>LOCATION</h3>
                  <p>Sylhet,Bangladesh.</p>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="footer__bottom">
            <div>
              <h3>SOCIAL</h3>
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
            </div>
            <div>
              <small>&copy; Mayen Uddin 2020 | All Rights Reserved</small>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Footer;