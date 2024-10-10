import React from "react";
import "./Testimonies.scss";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import profil from "../../assets/images/1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profil2 from "../../assets/images/2.jpg";

const Testimonies = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="testimonies-container">
      <div className="sub-container">
        <div className="left">
          <div className="slider-container">
            <Slider {...settings} className="testimonies-list">
              <div className="item-container">
                <div className="item">
                  <div className="identification">
                    <div className="name-country">
                      <span className="name">Frederic Samo</span>
                      <h4 className="country">Cameroun</h4>
                    </div>
                    <div className="age">35 ans</div>
                  </div>
                  <div className="message">
                    J'ai réussi mon projet d'immigration du cameroun pour le
                    Canada il y a 1.5 an grâce à AIDE CONSULTING qui m'a assité
                    à toutes les étapes du processus. Alors Un Bravo à l'équipe
                    AIDE CONSULTING
                  </div>
                  <div className="stars">
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                  </div>
                  <div className="image-container">
                    <img src={profil} alt="" />
                  </div>
                </div>
              </div>
              <div className="item-container">
                <div className="item">
                  <div className="identification">
                    <div className="name-country">
                      <span className="name">Sarah kengne</span>
                      <h4 className="country">Cameroun</h4>
                    </div>
                    <div className="age">26 ans</div>
                  </div>
                  <div className="message">
                    Ma procédure a pris du temps, l'équipe de AIDE CONSULTING
                    m'a soutenu et guidé tout au long. Alors un grand merci à
                    AIDE CONSULTING qui m'a assité à chaque étape du processus.
                  </div>
                  <div className="stars">
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                  </div>
                  <div className="image-container">
                    <img src={profil2} alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="right">
          <div className="head">
            <div className="title-container">
              <div className="slash">
                <span className="one"></span>
                <span className="two"></span>
              </div>
              <div className="title">Ce qu'ils disent de nous</div>
            </div>
            <h1 className="sub-title">Quelques Témoignages</h1>
          </div>
          <div className="bottom">
            <p className="detail">
              Vous hésitez à vous lancer, alors écoutez ce qu'ils disent de
              nous.
            </p>
            {/* <p className="detail-two">
              Vous avez accès un suivi personnalisé selon votre profil et ce
              dans le respect des lois d'immigration en vigueur.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
