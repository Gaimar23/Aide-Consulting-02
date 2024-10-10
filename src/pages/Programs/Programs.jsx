import React from "react";
import "./Programs.scss";
import SwiperHero from "../../components/SwiperHero/SwiperHero";
import OurPrograms from "../../components/OurPrograms/OurPrograms";
import Footer from "../../components/Footer/Footer";

const Programs = () => {
  return (
    <div className="programs-container">
      <div className="programs">
        <SwiperHero />
        <OurPrograms />
        <Footer />
      </div>
    </div>
  );
};

export default Programs;
