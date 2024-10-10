import React from "react";
import "./Services.scss";
import { MdOutlineSchool } from "react-icons/md";
import product from "../../assets/images/1.jpg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineDriveEta } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import students from "../../assets/images/offers/students.jpg";
import workers from "../../assets/images/offers/workers.jpg";
import interview from "../../assets/images/offers/interview.jpg";
import change from "../../assets/images/offers/change.jpg";
import firm from "../../assets/images/offers/firm.jpg";
import visitor from "../../assets/images/offers/visitor.jpg";
import assess from "../../assets/images/offers/assess.jpg";
import postponing from "../../assets/images/offers/postponing.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
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
            {/* <p className="detail">
              AIDE CONSULTING a pour objectif unique de vous accompagner dans
              vos différents projets d'immigration, que vous soyez étudiant ou
              travailleur.
            </p> */}
            <p className="detail">
              AIDE CONSULTING s'engage à vous offrir une expérience de voyage
              mémorable grâce un accompagnement de haute qualité vers plus de 15
              destinations dans le monde. A cet effet nous pouvons vous aider à
              déposer vos valises en <strong>Amérique</strong> (Etats-Unis,
              Canada...), en <strong>Europe</strong> y compris dans{" "}
              <strong>l'espace Schengen</strong> (France, Pays-Bas,Belgique...)
              et en <strong>Asie</strong> (Chine, Japon...).
            </p>
            <p className="detail-two">
              Vous avez un accès premium à un suivi personnalisé selon votre
              profil et ce dans le strict respect des lois d'immigration en
              vigueur.
            </p>
            {/* <p className="detail-two">
              Vous avez accès un suivi personnalisé selon votre profil et ce
              dans le respect des lois d'immigration en vigueur.
            </p> */}
          </div>
        </div>
        <div className="left">
          <div className="item">
            <div className="image-container">
              <img src={students} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineSchool className="icon" />
                </div>
                <div className="detail">Visa étude</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={workers} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineWorkOutline className="icon" />
                </div>
                <div className="detail">Visa travail</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={interview} alt="" />
              <div className="info">
                <div className="icon-container">
                  <FaRegHandshake className="icon" />
                </div>
                <div className="detail">Entretien préparatoire</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={visitor} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineDriveEta className="icon" />
                </div>
                <div className="detail">Visa visiteur</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={firm} alt="" />
              <div className="info">
                <div className="icon-container">
                  <IoGitCompareOutline className="icon" />
                </div>
                <div className="detail">Service entreprises</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={change} alt="" />
              <div className="info">
                <div className="icon-container">
                  <FaExchangeAlt className="icon" />
                </div>
                <div className="detail">Changement de statut</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={postponing} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdAutoGraph className="icon" />
                </div>
                <div className="detail">Prolongement visa</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={assess} alt="" />
              <div className="info">
                <div className="icon-container">
                  <FaMagnifyingGlass className="icon" />
                </div>
                <div className="detail">Evaluation de profil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
