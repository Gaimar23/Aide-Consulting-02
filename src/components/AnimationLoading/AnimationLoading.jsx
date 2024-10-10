import React from "react";
import "./AnimationLoading.scss";
import Logo from "../../assets/images/Logo2.png";

const AnimationLoading = () => {
  return (
    <div className="animation-loading">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="" />
        <div className="slogan">
          <strong>Rapidité</strong>
          <strong>Transparence</strong>
          <strong>Efficacité</strong>
        </div>
      </div>
    </div>
  );
};

export default AnimationLoading;
