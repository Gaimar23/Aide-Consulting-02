import React from "react";
import "./Landing.scss";
import video01 from "../../assets/video.mp4";
import logo from "../../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing">
        <video autoPlay muted loop id="myVideo">
          <source src={video01} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <header id="header">
          <div class="logo">
            {/* <span class="icon fa-gem"></span> */}
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          <div class="content">
            <div class="inner">
              <h1
                style={{
                  marginTop: "-10px",
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                AIDE CONSULTING
              </h1>
              <p style={{ color: "white" }}>
                L'assurance d'un projet d'immigration réussie avec aide
                consulting
                <br />
                Immigrer en toute sérenité
              </p>
            </div>
          </div>
          <nav>
            <ul>
              <li style={{ background: "red" }}>
                <a href="/welcome" style={{ color: "white" }}>
                  Accueil
                </a>
              </li>
              <li style={{ background: "red" }}>
                <a href="/programs" style={{ color: "white" }}>
                  Programmes
                </a>
              </li>
              <li style={{ background: "red" }}>
                <a href="/actuality" style={{ color: "white" }}>
                  Actualités
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="footer">
          <div className="flex">
            <div className="social-icons">
              <div className="icon-container">
                <CgFacebook className="icon" />
              </div>
              <div className="icon-container">
                <FaLinkedinIn className="icon" />
              </div>
              <div className="icon-container">
                <RiTwitterXFill className="icon" />
              </div>
              <div className="icon-container">
                <FaInstagram className="icon" />
              </div>
            </div>
            <div className="location-phone">
              <span className="location">
                <IoLocation className="icon" />
                <span style={{ color: "white", opacity: "0.7" }}>
                  Douala Cameroun
                </span>
              </span>
              <span className="phone">
                <RiWhatsappFill className="icon" />
                <span style={{ color: "white", opacity: "0.7" }}>
                  +237 600000000
                </span>
              </span>
            </div>

            <p className="copy-right">
              © 2024 aideconsulting.com - Designed by Gaimard F.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
