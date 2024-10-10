import React from "react";
import "./SwiperHero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import team04 from "../../assets/images/team4.jpg";
import team03 from "../../assets/images/team3.jpg";
import logo from "../../assets/images/logo.png";

const SwiperHero = () => {
  return (
    <div className="swiper-hero-container">
      <div className="swiper-hero">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="image-container">
              <img src={team04} alt="" />
            </div>
            <div className="content">
              <div class="logo">
                <a href="">
                  <img src={logo} alt="" />
                </a>
              </div>

              <h1>TITRE</h1>
              <div className="btns">
                <a href="">
                  <button>Programmes</button>
                </a>
                <a href="">
                  <button>Actualités</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img src={team03} alt="" />
            </div>
            <div className="content">
              <div class="logo">
                <a href="">
                  <img src={logo} alt="" />
                </a>
              </div>

              <h1>Programmes</h1>
              <div className="btns">
                <a href="">
                  <button>Accueil</button>
                </a>
                <a href="">
                  <button>Actualités</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperHero;
