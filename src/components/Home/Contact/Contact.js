import React from "react";
import './Contact.css'
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import ContactMe from "../../ContactMe/ContactMe";
const Contact = () => {
  return (
    <div className="contact" style={{backgroundColor:"#1F2235"}}>
      <div className="contact-info" style={{backgroundColor:'#23263A'}}>
      <h1 className="mainHeader text-center p-2">Contact</h1>
      <div className="commonBorder"></div>
      <ContactMe/>
        {/* <div className="contactSection">
          <div className="row ">
            <div className="col-md-12">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <div className="text-white">
              <h1>Let's Build Something Great Together</h1>
              <h5>If You'd Like To Start A New Project, Need Help With An Existing Project Or Have Any Other Enquiry, Please Get In Touch</h5>
              </div>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
