import React, { useEffect } from "react";
import WOW from "wowjs";
import "./About.css";
import aboutImg from "../../img/about.JPG";

const About = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="about-bg" id="nosotros">
      <div className="container d-flex flex-md-nowrap flex-wrap-reverse px-4 py-5 p-md-5 gap-3 justify-content-center">
        <div
          data-wow-duration="0.3s"
          className="about-img wow animate__animated animate__zoomIn"
        >
          <img src={aboutImg} />
        </div>
        <div className="d-flex flex-column gap-4 ms-md-4">
          <h1 className="fw-semibold text-end text-md-start wow animate__animated animate__fadeInRight">
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="wow animate__animated animate__fadeInDown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p className="wow animate__animated animate__fadeInDown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p className="wow animate__animated animate__fadeInDown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
