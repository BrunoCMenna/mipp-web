import "./ClientsAndHistory.css";

import bannerPng from "../../img/banner1.jpg";
import clientLogos from "../../clientLogos.js";

const ClientsAndHistory = () => {
  return (
    <div>
      <div className="ourclients-bg" id="clientes">
        <div className="container text-center text-lg-end">
          <div>
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="fw-semibold pb-3 text-center"
            >
              NUESTROS CLIENTES
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="text-center mx-auto mb-5"
            style={{ textWrap: "balance" }}
          >
            <p>
              Estos son algunos de nuestros clientes más importantes. Nos
              enorgullece la fidelidad de ellos, que refleja nuestra capacidad
              para cumplir con los más altos estándares de calidad.
            </p>
          </div>
          <div className="row justify-content-center gap-2 gap-md-5 mt-4">
            {clientLogos.map((item, index) => (
              <div key={index} className="client-item my-5">
                <img
                  src={item.image}
                  alt={`imagen-${index}`}
                  data-aos="zoom-out"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="banner">
          <img src={bannerPng} alt="banner" />
        </div>
      </div>
      <div className="history-bg" id="historia">
        <div className="container p-3 p-md-5">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="pb-3 pb-lg-5 text-center text-sm-start"
          >
            ¿CUÁL ES NUESTRA HISTORIA?
          </h1>
          <div
            className="p-wrapper d-flex flex-wrap flex-md-nowrap gap-4"
            style={{
              textWrap: "balance",
            }}
          >
            <p data-aos="fade-in">
              MIPP SRL tuvo sus inicios con su fundador, Omar Alberto Penkala.
              Se trató de una pequeña empresa ubicada en la ciudad de Villa
              Gobernador Gálvez. Omar adquirió su oficio y conocimientos tras su
              paso por la Escuela Técnica durante su adolescencia. Como
              matricero, se destacaba en ajustar profesionalmente matrices,
              convirtiéndose en una figura reconocida dentro de la industria
              plástica.
            </p>
            <p data-aos="fade-in">
              A lo largo de los años, su hijo varón, Matías Alberto Penkala, fue
              adquiriendo conocimientos y enseñanzas de su padre, continuando
              con la empresa familiar. En el año 2020, ante una expansión en su
              producción, se montó una nueva planta en el Parque Industrial de
              Roldán, lo que permitió establecer un predio moderno de 3000 m².
              Esta expansión no solo implicó la inversión en maquinaria de
              última tecnología, sino también el desarrollo de nuevos procesos
              para seguir siendo líderes en la industria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAndHistory;
