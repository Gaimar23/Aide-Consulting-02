import React from "react";
import "./Accueil.scss";
import SwiperHero from "../../components/SwiperHero/SwiperHero";
import ActionCards from "../../components/ActionCards/ActionCards";
import AboutUs from "../../components/AboutUs/AboutUs";
import Testimonies from "../../components/Testimonies/Testimonies";
import Footer from "../../components/Footer/Footer";
import team04 from "../../assets/images/team4.jpg";
import team03 from "../../assets/images/team3.jpg";

const Accueil = () => {
  return (
    <div className="accueil">
      <SwiperHero
        image01={team04}
        image02={team03}
        toBtn01={"/programs"}
        toBtn02={"/actuality"}
        button01={"Programmes"}
        button02={"Actualités"}
        pageTitle={"Accueil"}
        goDown={"#action-cards"}
      />
      <ActionCards />
      <AboutUs />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default Accueil;
