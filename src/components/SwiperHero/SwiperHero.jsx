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

const SwiperHero = ({
  button01,
  button02,
  toBtn01,
  toBtn02,
  image01,
  image02,
  pageTitle,
}) => {
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
              <img src={image01} alt="" />
            </div>
            <div className="content">
              <div class="logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>

              <h1>{pageTitle}</h1>
              <div className="btns">
                <a href={toBtn01}>
                  <button>{button01}</button>
                </a>
                <a href={toBtn02}>
                  <button>{button02}</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img src={image02} alt="" />
            </div>
            <div className="content">
              <div class="logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>

              <h1>{pageTitle}</h1>
              <div className="btns">
                <a href={toBtn01}>
                  <button>{button01}</button>
                </a>
                <a href={toBtn02}>
                  <button>{button02}</button>
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
