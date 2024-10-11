import React from "react";
import "./AboutUs.scss";
import about01 from "../../assets/images/about1.jpg";
import team1 from "../../assets/images/team4.jpg";
import team2 from "../../assets/images/team1.jpg";
import { TbPointFilled } from "react-icons/tb";
import { GoPaperAirplane } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <div className="left">
          <div className="image-container">
            <img src={team1} alt="" className="first" />
            <img src={team2} alt="" className="second" />
            <div className="hours-invested">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#E30613",
                }}
                className="hours"
              >
                <span
                  style={{
                    backgroundColor: "gray",
                    padding: "3px 5px",
                    borderRadius: "50% 0 0 50%",
                  }}
                >
                  +20
                </span>
                ,000
              </span>
              <p style={{ color: "#E30613", fontSize: "15px" }}>
                Heures investies
              </p>
            </div>
            <div className="years-of-experience">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#E30613",
                }}
                className="years"
              >
                <span
                  style={{
                    backgroundColor: "gray",
                    padding: "3px 5px",
                    borderRadius: "50% 0 0 50%",
                  }}
                >
                  +15
                </span>
              </span>
              <p style={{ color: "#E30613", fontSize: "15px" }}>
                ans d'expérience
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="head">
            <div className="title-container">
              <div className="slash">
                <span className="one"></span>
                <span className="two"></span>
              </div>
              <div className="title">A PROPOS DE AC</div>
            </div>
            <h1 className="sub-title">Le chemin parcouru</h1>
          </div>
          <div className="bottom">
            <div className="desc">
              <p className="first">
                Parce que vous compter à nos yeux, notre mission est de vous
                accompagner dans toutes vos démarches, à chaque étape jusqu'à la
                réalisation de votre projet d'immigration
              </p>
              <p className="second">
                Depuis plusieurs années, nous faisons le bonheur de plusieurs
                voyageurs: familles, particuliers et entreprises. Rejoignez les
                rangs de centaines de leaders qui nous ont fait confiance et ont
                vu leur projets d'immigration se réaliser.
              </p>
            </div>
            <div className="qualities">
              <div className="item">
                <div className="icon-container">
                  <TbPointFilled className="item-icon" />
                </div>
                {/* <p className="detail">
                  <span className="point">Rapidité: </span> Parce que vous
                  compter à nos yeux, notre but est vous accompagner dans toutes
                  vos démarches, à chaque étape jusqu'à la réalisation de votre
                  projet d'immigration
                </p> */}
                <p className="detail">
                  <span className="point">Rapidité: </span> De part notre
                  expertise, nous naviguons aisément dans les rouages de
                  l'immigration pour vous simplifier les démarches
                  administratives. Vous pouvez déjà faire vos valises, votre vol
                  est assuré.
                </p>
              </div>
              <div className="item">
                <div className="icon-container">
                  <TbPointFilled className="item-icon" />
                </div>
                {/* <p className="detail">
                  <span className="point">Transparence: </span> Parce que vous
                  compter à nos yeux, notre but est vous accompagner dans toutes
                  vos démarches, à chaque étape jusqu'à la réalisation de votre
                  projet d'immigration
                </p> */}
                <p className="detail">
                  <span className="point">Transparence: </span> Avec le soutien
                  de nos partenaires étrangers, nous avons accès à des sources
                  des sources de documentation authentiques et à des
                  organisations de traitement de visas fiables. Vous pouvez
                  suivre la progression de votre démarche en temps réel.
                </p>
              </div>
              <div className="item">
                <div className="icon-container">
                  <TbPointFilled className="item-icon" />
                </div>
                {/* <p className="detail">
                  <span className="point">Efficacité: </span> Parce que vous
                  compter à nos yeux, notre but est vous accompagner dans toutes
                  vos démarches, à chaque étape jusqu'à la réalisation de votre
                  projet d'immigration
                </p> */}
                <p className="detail">
                  <span className="point">Efficacité: </span> Nous disposons
                  d'une équipe proactive, professionnelle et disponible 24h/24.
                  Chaque projet de voyage entamé est un futur visa en main !
                  Tous ceux qui sont passées par Aide Consulting en sont sortis
                  satisfait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
