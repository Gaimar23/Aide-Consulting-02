import React from "react";
import "./Footer.scss";
import Logo from "../../assets/images/Logo2.png";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="flex">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
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
          <p className="copy-right">
            © 2024 aideconsulting.com - Designed by Gaimard F.
          </p>
        </div>
        {/* <p className="copy-right">
          © 2024 aideconsulting.com - Designed by Gaimard F.
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
