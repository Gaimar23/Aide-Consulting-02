import React from "react";
import "./Programs.scss";
import SwiperHero from "../../components/SwiperHero/SwiperHero";
import OurPrograms from "../../components/OurPrograms/OurPrograms";
import Footer from "../../components/Footer/Footer";
import team04 from "../../assets/images/program2.jpg";
import team03 from "../../assets/images/program1.jpg";

const Programs = () => {
  return (
    <div className="programs-container">
      <div className="programs">
        <SwiperHero
          image01={team04}
          image02={team03}
          toBtn01={"/welcome"}
          toBtn02={"/actuality"}
          button01={"Accueil"}
          button02={"Actualités"}
          pageTitle={"Programmes"}
          goDown={"#our-programs"}
        />
        <OurPrograms />
        <Footer />
      </div>
    </div>
  );
};

export default Programs;
