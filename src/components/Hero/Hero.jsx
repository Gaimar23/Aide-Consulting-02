import React, { useEffect } from "react";
import "./Hero.scss";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuPlaneTakeoff } from "react-icons/lu";
import imageHead from "../../assets/images/1.jpg";
import family from "../../assets/images/family.jpg";
import student from "../../assets/images/student.jpg";
import worker from "../../assets/images/worker.jpg";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Hero = () => {
  const countA = useMotionValue(0);
  const countB = useMotionValue(0);
  const roundedA = useTransform(countA, Math.round);
  const roundedB = useTransform(countB, Math.round);

  useEffect(() => {
    const animationA = animate(countA, 99, { duration: 10 });
    const animationB = animate(countB, 350, { duration: 10 });

    return animationA.stop, animationB.stop;
  }, []);

  return (
    <div className="hero-container" id="hero">
      <section className="hero">
        <div className="head">
          <div className="top">
            <h3>Immigration</h3>
          </div>
          <div className="bottom">
            <GiCommercialAirplane className="icon" />
            <h4>Immigrer en toute sérenité</h4>
          </div>
        </div>
        <div className="middle">
          <div className="left">
            <h1 className="title">
              L'assurance d'un projet d'immigration réussie avec aide consulting
            </h1>
            <div className="archievements">
              <div className="counter-container">
                <div className="counter">
                  <div className="percent">
                    <svg>
                      <circle cx="105" cy="105" r="40"></circle>
                      <circle
                        cx="105"
                        cy="105"
                        r="40"
                        style={{ "--percent": 80 }}
                      ></circle>
                    </svg>
                    <div className="number">
                      <h3>
                        <motion.span>{roundedA}</motion.span>
                        <span>%</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <span>Procédures bouclées</span>
              </div>
              <div className="counter-container">
                <div className="counter">
                  <div className="percent">
                    <svg>
                      <circle cx="105" cy="105" r="40"></circle>
                      <circle
                        cx="105"
                        cy="105"
                        r="40"
                        style={{ "--percent": 80 }}
                      ></circle>
                    </svg>
                    <div className="number">
                      <motion.h3>{roundedB}</motion.h3>
                    </div>
                  </div>
                </div>
                <span>Clients satisfaits</span>
              </div>
            </div>
            <div className="actions">
              <a href="#contact-us" style={{ textDecoration: "none" }}>
                <button>Démarrer</button>
              </a>
              <a href="https://wa.me/237696429766">
                <button>Discuter</button>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image-container">
              <div className="item">
                <img src={student} alt="" />
                <div className="text">Visa étudiant</div>
              </div>
              <div className="item">
                <img src={worker} alt="" />
                <div className="text">Visa travailleur</div>
              </div>
              <div className="item">
                <img src={family} alt="" />
                <div className="text">Regroupement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
