import React from "react";
import "./GoUp.scss";
import { FaArrowUpLong } from "react-icons/fa6";

const GoUp = () => {
  return (
    <div className="go-up-container">
      <a href="#hero">
        <div className="go-up">
          <FaArrowUpLong className="move-up-icon" />
        </div>
      </a>
    </div>
  );
};

export default GoUp;
