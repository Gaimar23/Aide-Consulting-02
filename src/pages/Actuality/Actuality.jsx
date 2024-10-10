import React from "react";
import "./Actuality.scss";
import SwiperHero from "../../components/SwiperHero/SwiperHero";
import team04 from "../../assets/images/team4.jpg";
import team03 from "../../assets/images/team3.jpg";
import OurEvents from "../../components/OurEvents/OurEvents";
import Footer from "../../components/Footer/Footer";

const Actuality = () => {
  return (
    <div className="actuality-container">
      <div className="actuality">
        <SwiperHero
          image01={team04}
          image02={team03}
          toBtn02={"/programs"}
          toBtn01={"/welcome"}
          button02={"Programmes"}
          button01={"Accueil"}
          pageTitle={"Actualités"}
        />
        <OurEvents />
        <Footer />
      </div>
    </div>
  );
};

export default Actuality;
