import React from "react";
import "./Footer.scss";
import Logo from "../../assets/images/Logo2.png";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="flex">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <ul className="find-us">
            <li className="social-icons">
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
            </li>
            <li className="location">
              <CgFacebook className="icon" />
              <span style={{ color: "white", opacity: "0.7" }}>
                Douala Cameroun
              </span>
            </li>
            <li className="location">
              <CgFacebook className="icon" />
              <span style={{ color: "white", opacity: "0.7" }}>
                Douala Cameroun
              </span>
            </li>
          </ul>
          <ul className="contact-us">
            <li className="phone">
              <RiWhatsappFill className="icon" />
              <span style={{ color: "white", opacity: "0.7" }}>
                +237 690000000
              </span>
            </li>
            <li className="phone">
              <RiWhatsappFill className="icon" />
              <span style={{ color: "white", opacity: "0.7" }}>
                +237 690000000
              </span>
            </li>
            <li className="phone">
              <RiWhatsappFill className="icon" />
              <span style={{ color: "white", opacity: "0.7" }}>
                aideconsulting20@gmail.com
              </span>
            </li>
          </ul>
          {/* <p className="copy-right">
            © 2024 aideconsulting.com - Designed by Gaimard F.
          </p> */}
        </div>
        <p className="copy-right">
          © 2024 aideconsulting.com - Designed by Gaimard F.
        </p>
      </div>
    </div>
  );
};

export default Footer;
