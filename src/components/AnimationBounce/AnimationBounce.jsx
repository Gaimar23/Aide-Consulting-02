import React from "react";
import "./AnimationBounce.scss";

const AnimationBounce = () => {
  return (
    <div className="animation-bounce">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          {/* <span className="dot"></span>
          <span className="dot"></span> */}
        </div>
      </div>
    </div>
  );
};

export default AnimationBounce;
