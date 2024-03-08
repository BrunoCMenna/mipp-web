import React, { useEffect } from "react";
import WOW from "wowjs";

import "./OurServices.css";

const OurServices = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className="services-bg" id="servicios">
      <div className="container d-flex text-white">
        <div className="wow animate__animated animate__fadeInUp service-content d-flex flex-column col-sm-12 col-lg-8 col-xl-8 col-xxl-6">
          <h1 className="wow animate__animated animate__fadeInUp">
            ¿CUÁLES SON NUESTROS SERVICIOS?
          </h1>
          <p className="wow animate__animated animate__fadeInLeft">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            pariatur libero amet aliquam vel repellendus delectus magni autem
            cum optio, perspiciatis voluptatum corrupti aspernatur, corporis
            eveniet eos ex reprehenderit quos.
          </p>
          <ul className="d-flex flex-column gap-4">
            <li className="wow animate__animated animate__fadeInLeft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam libero nam dolores repudiandae ad, hic ea. Aut
              necessitatibus dolor perspiciatis sed voluptatem impedit magnam
              culpa rerum, consequuntur veritatis illum commodi!
            </li>
            <li className="wow animate__animated animate__fadeInLeft">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="wow animate__animated animate__fadeInLeft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              odit repellendus nulla minus vel placeat alias consectetur soluta,
              dolore.
            </li>
            <li className="wow animate__animated animate__fadeInLeft">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus libero dolore explicabo distinctio ut, recusandae
              impedit adipisci commodi nesciunt voluptas est deserunt, eveniet
              quidem quas omnis fugit velit sequi laboriosam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
