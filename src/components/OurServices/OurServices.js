import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="services-bg" id="servicios">
      <div className="container d-flex text-white">
        <div
          data-aos="fade-up"
          className="service-content d-flex flex-column col-sm-12 col-lg-8 col-xl-8 col-xxl-6"
        >
          <h1 data-aos="fade-up">¿CUÁLES SON NUESTROS SERVICIOS?</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            pariatur libero amet aliquam vel repellendus delectus magni autem
            cum optio, perspiciatis voluptatum corrupti aspernatur, corporis
            eveniet eos ex reprehenderit quos.
          </p>
          <ul className="d-flex flex-column gap-4">
            <li data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam libero nam dolores repudiandae ad, hic ea. Aut
              necessitatibus dolor perspiciatis sed voluptatem impedit magnam
              culpa rerum, consequuntur veritatis illum commodi!
            </li>
            <li data-aos="fade-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              odit repellendus nulla minus vel placeat alias consectetur soluta,
              dolore.
            </li>
            <li data-aos="fade-left">
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
