import React from "react";
import "./OurEvents.scss";
import worker from "../../assets/images/worker.jpg";
import family from "../../assets/images/family.jpg";
import team1 from "../../assets/images/team1.jpg";
import can1 from "../../assets/images/can.jpg";
import can2 from "../../assets/images/can2.jpg";
import can3 from "../../assets/images/can3.jpg";
import malte1 from "../../assets/images/malte.jpg";
import malte2 from "../../assets/images/malte2.jpg";
import malte3 from "../../assets/images/malte3.jpg";
import chine from "../../assets/images/chine.jpg";
import chine2 from "../../assets/images/chine2.jpg";
import chine3 from "../../assets/images/chine3.jpg";
import chine4 from "../../assets/images/chine4.jpg";
import chine5 from "../../assets/images/chine5.jpg";
import chine6 from "../../assets/images/chine6.jpg";

const OurEvents = () => {
  return (
    <div className="our-events-container" id="our-events">
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
                <div className="title">Destinations</div>
              </div>
              <h1 className="sub-title">Canada</h1>
            </div>
            <div className="bottom">
              <p className="detail">
                {/* AIDE CONSULTING a pour objectif unique de vous accompagner dans
                vos différents projets d'immigration, que vous soyez étudiant ou
                travailleur. */}
                L'une des meilleures destinations pour immigrer, tant sur le
                plan professionnel qu'académique pour des raisons telles que:
                Qualité de vie, opportunitées professionnelles et académiques,
                sécurité...etc
              </p>
              <p className="detail-two">
                {/* Vous avez un accès premium à un suivi personnalisé selon votre
                profil et ce dans le strict respect des lois d'immigration en
                vigueur. */}
              </p>
            </div>
          </div>
          <div className="left">
            <div className="slide-container">
              <div className="slide-track">
                <img src={can1} alt="" className="slide-image" />
                <img src={can2} alt="" className="slide-image" />
                <img src={can3} alt="" className="slide-image" />
              </div>
              <div className="slide-track">
                <img src={can1} alt="" className="slide-image" />
                <img src={can2} alt="" className="slide-image" />
                <img src={can3} alt="" className="slide-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right">
            <div className="head">
              <div className="title-container">
                <div className="slash">
                  <span className="order">2</span>
                  <span className="one"></span>
                  <span className="two"></span>
                </div>
                <div className="title">Destinations</div>
              </div>
              <h1 className="sub-title">Pays-Bas, Malte</h1>
            </div>
            <div className="bottom">
              <p className="detail">
                {/* Selon votre profil, nous pouvons vous suggérer des{" "}
                <strong>programmes de voyage adaptés</strong>. Alors, que vous
                soyez <strong>travailleur</strong> ou <strong>étudiant</strong>{" "}
                diplômé d’un Baccalauréat, Licence, Master ou Doctorat, vous
                pouvez bénéficier d'<strong>offres spéciales</strong> selon le
                pays que vous viser. */}
                Le climat agréable, la qualité de vie, l'économie dynamique du
                pays, le système éducatif, la richesse culturelle et historique
                ...etc sont là quelques traits qui font de Pays-Bas ou Malte ,
                votre destination idéale.
              </p>
              <p className="detail-two">
                {/* Vous avez un accès premium à un suivi personnalisé selon votre
                profil et ce dans le strict respect des lois d'immigration en
                vigueur. */}
              </p>
            </div>
          </div>
          <div className="left">
            <div className="slide-container">
              <div className="slide-track">
                <img src={malte1} alt="" className="slide-image" />
                <img src={malte2} alt="" className="slide-image" />
                <img src={malte3} alt="" className="slide-image" />
              </div>
              <div className="slide-track">
                <img src={malte1} alt="" className="slide-image" />
                <img src={malte2} alt="" className="slide-image" />
                <img src={malte3} alt="" className="slide-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="right">
            <div className="head">
              <div className="title-container">
                <div className="slash">
                  <span className="order">3</span>
                  <span className="one"></span>
                  <span className="two"></span>
                </div>
                <div className="title">Destinations</div>
              </div>
              <h1 className="sub-title">Chine, Dubaï ...etc</h1>
            </div>
            <div className="bottom">
              <p className="detail">
                {/* ! Il existe de nombreuses destinations idéales pour décrocher
                d’excellentes opportunités tant professionnelles qu'académiques. */}
                Des opportunités d'emploi et de business, un marché en
                croissance avec des secteurs tels que la technologie,
                l'industrie, les services, les transports et logements à la
                pointe de la technologie, une diversité culturelle font de Dubaï
                et de la Chine des destinations exceptionnelles.
              </p>
              <p className="detail-two">
                {/* Les pays actuellement célèbrent pour leurs incroyables avantages
                (académique, financier, professionnel et personnels ; ) sont :
                le CANADA, les PAYS-BAS, MALTE, la CHINE, DUBAÏ… La liste
                complète auprès de nos conseillés qualifiés ! */}
              </p>
            </div>
          </div>
          <div className="left">
            <div className="slide-container">
              <div className="slide-track">
                <img src={chine} alt="" className="slide-image" />
                <img src={chine2} alt="" className="slide-image" />
                <img src={chine3} alt="" className="slide-image" />
                <img src={chine4} alt="" className="slide-image" />
                <img src={chine5} alt="" className="slide-image" />
                <img src={chine6} alt="" className="slide-image" />
              </div>
              <div className="slide-track">
                <img src={chine} alt="" className="slide-image" />
                <img src={chine2} alt="" className="slide-image" />
                <img src={chine3} alt="" className="slide-image" />
                <img src={chine4} alt="" className="slide-image" />
                <img src={chine5} alt="" className="slide-image" />
                <img src={chine6} alt="" className="slide-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
