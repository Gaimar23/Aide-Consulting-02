import React from "react";
import "./OurPrograms.scss";
import visa1 from "../../assets/images/visa1.jpg";
import visa2 from "../../assets/images/visa2.jpg";
import visa3 from "../../assets/images/visa3.jpg";
import visa4 from "../../assets/images/offers/firm.jpg";
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
            {/* Quelque un de nos programmes Quelque un de nos programmes Quelque un
            de nos programmes Quelque un de nos programmes */}
            Quelque un de nos programmes à destination des étudiants,
            travailleurs, entreprises et tout porteur d'un projet d'immigration.
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
                Obtenez rapidement votre permis d’étude dans les meilleures
                universités du monde. Nous pouvons vous faire étudier à
                l’international dans des pays offrant une éducation de haut
                niveau : Canada, Pays-Bas, Chine, etc. Découvrez toutes nos
                destinations d’étude !
              </p>
              <a href="https://wa.me/237696429766">
                <button>Contact</button>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="right">
              <h1 className="type">Visa résidence permatente</h1>
              <p className="desc">
                Vous pouvez désormais déposer votre valise où vous le voulez.
                AIDE CONSULTING vous accompagne tout au long de votre processus
                de voyage vers votre nouveau chez-vous (entrée Arrima et Express
                au Canada). Nous nous chargeons de TOUT !
              </p>
              <a href="https://wa.me/237696429766">
                <button>Contact</button>
              </a>
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
                Vous souhaitez vivre une expérience de voyage unique et vous
                créer des souvenirs mémorables : venez récupérer CHEZ-NOUS votre
                visa visiteur. Vous pouvez explorer à nos côtés des sites
                emblématiques et des villes aux potentiels touristiques
                inégalables. Dites-nous quel pays vous désirez visiter !
              </p>
              <a href="https://wa.me/237696429766">
                <button>Contact</button>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="right">
              <h1 className="type">Service dédié aux entreprises</h1>
              <p className="desc">
                Vous pouvez désormais déposer votre valise où vous le voulez.
                AIDE CONSULTING vous accompagne tout au long de votre processus
                de voyage vers votre nouveau chez-vous (entrée Arrima et Express
                au Canada). Nous nous chargeons de TOUT !
              </p>
              <a href="https://wa.me/237696429766">
                <button>Contact</button>
              </a>
            </div>
            <div className="left">
              <div className="image-container">
                <img src={visa4} alt="" />
              </div>
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
