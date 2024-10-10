import React from "react";
import "./OurEvents.scss";
import worker from "../../assets/images/worker.jpg";
import family from "../../assets/images/family.jpg";
import team1 from "../../assets/images/team1.jpg";

const OurEvents = () => {
  return (
    <div className="our-events-container">
      <div className="our-events">
        <div className="item">
          <div className="right">
            <div className="head">
              <div className="title-container">
                <div className="slash">
                  <span className="order">1</span>
                  <span className="one"></span>
                  <span className="two"></span>
                </div>
                <div className="title">Faites vous assister</div>
              </div>
              <h1 className="sub-title">Nos services</h1>
            </div>
            <div className="bottom">
              <p className="detail">
                AIDE CONSULTING a pour objectif unique de vous accompagner dans
                vos différents projets d'immigration, que vous soyez étudiant ou
                travailleur.
              </p>
              <p className="detail-two">
                Vous avez un accès premium à un suivi personnalisé selon votre
                profil et ce dans le strict respect des lois d'immigration en
                vigueur.
              </p>
            </div>
          </div>
          <div className="left">
            <div className="slide-container">
              <div className="slide-track">
                <img src={worker} alt="" className="slide-image" />
                <img src={family} alt="" className="slide-image" />
                <img src={team1} alt="" className="slide-image" />
              </div>
              <div className="slide-track">
                <img src={worker} alt="" className="slide-image" />
                <img src={family} alt="" className="slide-image" />
                <img src={team1} alt="" className="slide-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right">
            <div className="head">
              <div className="title-container">
                <div className="slash">
                  <span className="one"></span>
                  <span className="two"></span>
                </div>
                <div className="title">Faites vous assister</div>
              </div>
              <h1 className="sub-title">Nos services</h1>
            </div>
            <div className="bottom">
              <p className="detail">
                AIDE CONSULTING a pour objectif unique de vous accompagner dans
                vos différents projets d'immigration, que vous soyez étudiant ou
                travailleur.
              </p>
              <p className="detail-two">
                Vous avez un accès premium à un suivi personnalisé selon votre
                profil et ce dans le strict respect des lois d'immigration en
                vigueur.
              </p>
            </div>
          </div>
          <div className="left">
            <div className="slide-container">
              <div className="slide-track">
                <img src={worker} alt="" className="slide-image" />
                <img src={family} alt="" className="slide-image" />
                <img src={team1} alt="" className="slide-image" />
              </div>
              <div className="slide-track">
                <img src={worker} alt="" className="slide-image" />
                <img src={family} alt="" className="slide-image" />
                <img src={team1} alt="" className="slide-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right">
            <div className="head">
              <div className="title-container">
                <div className="slash">
                  <span className="one"></span>
                  <span className="two"></span>
                </div>
                <div className="title">Faites vous assister</div>
              </div>
              <h1 className="sub-title">Nos services</h1>
            </div>
            <div className="bottom">
              <p className="detail">
                AIDE CONSULTING a pour objectif unique de vous accompagner dans
                vos différents projets d'immigration, que vous soyez étudiant ou
                travailleur.
              </p>
              <p className="detail-two">
                Vous avez un accès premium à un suivi personnalisé selon votre
                profil et ce dans le strict respect des lois d'immigration en
                vigueur.
              </p>
            </div>
          </div>
          <div className="left">
            <div className="slide-container">
              <div className="slide-track">
                <img src={worker} alt="" className="slide-image" />
                <img src={family} alt="" className="slide-image" />
                <img src={team1} alt="" className="slide-image" />
              </div>
              <div className="slide-track">
                <img src={worker} alt="" className="slide-image" />
                <img src={family} alt="" className="slide-image" />
                <img src={team1} alt="" className="slide-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
