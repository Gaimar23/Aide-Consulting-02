import React from "react";
import "./Accueil.scss";
import SwiperHero from "../../components/SwiperHero/SwiperHero";
import ActionCards from "../../components/ActionCards/ActionCards";
import AboutUs from "../../components/AboutUs/AboutUs";
import Testimonies from "../../components/Testimonies/Testimonies";
import Footer from "../../components/Footer/Footer";

const Accueil = () => {
  return (
    <div className="accueil">
      <SwiperHero />
      <ActionCards />
      <AboutUs />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default Accueil;
