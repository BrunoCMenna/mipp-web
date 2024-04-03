import "./ClientsAndHistory.css";

import bannerPng from "../../img/banner.JPG";
import clientLogos from "../../clientLogos.js";

const ClientsAndHistory = () => {
  return (
    <div>
      <div className="ourclients-bg" id="clientes">
        <div className="container text-center text-lg-end pt-5">
          <div>
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="me-xxl-5 fw-semibold pb-3"
              style={{ marginTop: "9rem" }}
            >
              ¿CON QUIÉNES TRABAJAMOS?
            </h1>
          </div>
          <div className="row justify-content-center gap-2 gap-md-5 mt-4">
            {clientLogos.map((item, index) => (
              <div key={index} className="client-item my-5">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={`imagen-${index}`}
                    data-aos="zoom-out"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                  />
                </a>
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
            className="pb-lg-5"
          >
            ¿CÚAL ES NUESTRA HISTORIA?
          </h1>
          <div className="d-flex flex-wrap flex-md-nowrap gap-3 py-4">
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              suscipit quo ipsa eveniet. Nostrum placeat, veniam quisquam vero
              atque cumque neque! Autem cupiditate sit dignissimos culpa
              reprehenderit! Suscipit, vero soluta.
            </p>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              suscipit quo ipsa eveniet. Nostrum placeat, veniam quisquam vero
              atque cumque neque! Autem cupiditate sit dignissimos culpa
              reprehenderit! Suscipit, vero soluta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAndHistory;
