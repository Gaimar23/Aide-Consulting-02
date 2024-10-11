import React from "react";
import "./OurPrograms.scss";
import visa1 from "../../assets/images/visa1.jpg";
import visa2 from "../../assets/images/visa2.jpg";
import visa3 from "../../assets/images/visa3.jpg";
import { PiStudentFill } from "react-icons/pi";
import { IoManSharp } from "react-icons/io5";
import { FaPersonWalking } from "react-icons/fa6";

const OurPrograms = () => {
  return (
    <div className="our-programs-container" id="our-programs">
      <div className="our-programs">
        <div className="top">
          <div className="first top-line"></div>
          <div className="second top-line"></div>
          <h1>Nos Programmes</h1>
          <p className="detail">
            Quelque un de nos programmes Quelque un de nos programmes Quelque un
            de nos programmes Quelque un de nos programmes
          </p>
          <div className="first bottom-line"></div>
          <div className="second bottom-line"></div>
        </div>
        <div className="middle">
          <div className="item">
            <div className="left">
              <div className="image-container">
                <img src={visa1} alt="" />
              </div>
            </div>
            <div className="right">
              <h1 className="type">Visa étudiant</h1>
              <p className="desc">
                Poor un visa étudiant, nous vous facilitons l'obtention Poor un
                visa étudiant, nous vous facilitons l'obtentionPoor un visa
                étudiant, nous vous facilitons l'obtention Poor un visa
                étudiant, nous vous facilitons l'obtentionPoor un visa étudiant,
                nous vous facilitons l'obtention
              </p>
              <button>Contact</button>
            </div>
          </div>
          <div className="item">
            <div className="right">
              <h1 className="type">Visa résidence permatente</h1>
              <p className="desc">
                Poor un visa étudiant, nous vous facilitons l'obtention Poor un
                visa étudiant, nous vous facilitons l'obtentionPoor un visa
                étudiant, nous vous facilitons l'obtention Poor un visa
                étudiant, nous vous facilitons l'obtentionPoor un visa étudiant,
                nous vous facilitons l'obtention
              </p>
              <button>Contact</button>
            </div>
            <div className="left">
              <div className="image-container">
                <img src={visa2} alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <div className="image-container">
                <img src={visa3} alt="" />
              </div>
            </div>
            <div className="right">
              <h1 className="type">Visa visiteur</h1>
              <p className="desc">
                Poor un visa étudiant, nous vous facilitons l'obtention Poor un
                visa étudiant, nous vous facilitons l'obtentionPoor un visa
                étudiant, nous vous facilitons l'obtention Poor un visa
                étudiant, nous vous facilitons l'obtentionPoor un visa étudiant,
                nous vous facilitons l'obtention
              </p>
              <button>Contact</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="first top-line"></div>
          <div className="second top-line"></div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
