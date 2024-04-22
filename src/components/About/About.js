import "./About.css";
import aboutImg from "../../img/about.JPG";

const About = () => {
  return (
    <div className="about-bg" id="nosotros">
      <div className="container d-flex flex-lg-nowrap flex-wrap-reverse px-3 py-5 py-md-5 gap-4 gap-lg-5">
        <div className="about-img" data-aos="zoom-in">
          <img src={aboutImg} />
        </div>
        <div className="d-flex flex-column flex-grow-0 about-text">
          <h1
            data-aos="fade-left"
            className="fw-semibold text-center text-sm-start mb-4"
          >
            ¿QUIÉNES SOMOS?
          </h1>
          <p data-aos="fade-up">
            MIPP MATRICERÍA E INYECCIÓN DE PLÁSTICOS S.R.L. somos una empresa
            fundada en el año 1990, dedicada a la fabricación de moldes y al
            servicio de inyección de plásticos mediante el uso de tecnología de
            última generación. Contamos con un equipo de recursos humanos
            altamente competente y comprometido con la mejora continua.
          </p>
          <p data-aos="fade-up">
            Nos enorgullece ofrecer líneas de productos propias y brindar
            servicios de fasón para empresas de diversos rubros. Desde la
            concepción inicial de la pieza (diseño) hasta la entrega del
            producto final, nos comprometemos a proporcionar un servicio
            integral y de alta calidad.
          </p>
          <p data-aos="fade-up">
            Con 33 años de trayectoria, estamos firmemente comprometidos con la
            calidad y la satisfacción de nuestros clientes. Trabajamos día a día
            para fomentar el crecimiento y bienestar de nuestros clientes,
            empleados y proveedores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
