import React from "react";
import "./About.css";
import aboutImg from "../../img/about.JPG";

const About = () => {
  return (
    <div className="about-bg" id="nosotros">
      <div className="container d-flex flex-md-nowrap flex-wrap-reverse p-4 p-md-5 gap-3 justify-content-center">
        <div className="about-img">
          <img src={aboutImg} />
        </div>
        <div className="d-flex flex-column gap-4 ms-md-4">
          <h1 className="fw-semibold text-end text-md-start">
            ¿QUIÉNES SOMOS?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p>
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
