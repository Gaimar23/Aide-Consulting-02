import React from "react";
import "./OurPrograms.scss";
import worker from "../../assets/images/worker.jpg";
import family from "../../assets/images/family.jpg";

const OurPrograms = () => {
  return (
    <div className="our-programs-container">
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
                <img src={worker} alt="" />
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
                <img src={family} alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <div className="image-container">
                <img src={worker} alt="" />
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
