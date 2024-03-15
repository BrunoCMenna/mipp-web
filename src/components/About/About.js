import "./About.css";
import aboutImg from "../../img/about.JPG";

const About = () => {
  return (
    <div className="about-bg" id="nosotros">
      <div className="container d-flex flex-lg-nowrap flex-wrap-reverse px-4 py-5 p-md-5 gap-3 justify-content-center">
        <div className="about-img" data-aos="fade-up">
          <img src={aboutImg} />
        </div>
        <div className="d-flex flex-column gap-4 ms-md-4">
          <h1
            data-aos="fade-left"
            className="fw-semibold text-end text-md-start"
          >
            ¿QUIÉNES SOMOS?
          </h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p data-aos="fade-up">
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
