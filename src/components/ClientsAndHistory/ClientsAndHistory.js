import "./ClientsAndHistory.css";

import bannerPng from "../../img/banner.JPG";
import clientLogos from "../../images.js";

const ClientsAndHistory = () => {
  return (
    <div>
      <div className="ourclients-bg" id="clientes">
        <div className="container text-center text-lg-end pt-5">
          <div>
            <h1
              className="me-xxl-5 fw-semibold mb-5 pb-3 wow animate__animated animate__fadeInRight"
              style={{ marginTop: "7rem" }}
            >
              ¿CON QUIÉNES TRABAJAMOS?
            </h1>
          </div>
          <div className="row justify-content-center gap-md-5 mt-4">
            {clientLogos.map((image, index) => (
              <div key={index} className="client-item mb-4">
                <img
                  src={image}
                  alt={`imagen-${index}`}
                  className="wow animate__animated animate__flipInX"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="banner">
          <img src={bannerPng} alt="banner" className="" />
        </div>
      </div>
      <div className="history-bg" id="historia">
        <div className="container p-4 p-md-5">
          <h1 className="pb-lg-5 wow animate__animated animate__fadeInLeft">
            ¿CÚAL ES NUESTRA HISTORIA?
          </h1>
          <div
            data-wow-duration="1.5s"
            className="d-flex flex-wrap flex-md-nowrap gap-3 py-4 wow animate__animated animate__fadeIn"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              suscipit quo ipsa eveniet. Nostrum placeat, veniam quisquam vero
              atque cumque neque! Autem cupiditate sit dignissimos culpa
              reprehenderit! Suscipit, vero soluta.
            </p>
            <p>
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
