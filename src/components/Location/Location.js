import "./Location.css";

const Location = () => {
  return (
    <div className="location-bg" id="ubicacion">
      <div className="container d-flex flex-wrap-reverse flex-md-nowrap  px-3 py-5 p-md-5 gap-5 justify-content-center">
        <div data-aos="zoom-in" className="m-auto map-wrapper">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.4838051944566!2d-60.89053551001648!3d-32.85891655037232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b649804d9960ff%3A0x641b5be25b0e6574!2sMIPP%20Matriceria%20e%20Inyecci%C3%B3n%20de%20Plasticos%20S.R.L!5e0!3m2!1sen!2sar!4v1709325151911!5m2!1sen!2sar"
            width="500"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-white">
          <h1
            data-aos="fade-left"
            data-aos-duration="1000"
            className="mb-4 fw-semibold text-end text-md-start"
          >
            ¿DÓNDE NOS ENCONTRAMOS?
          </h1>
          <p data-aos="fade-in" data-aos-duration="1000">
            Nuestras instalaciones están ubicadas en el lote 21 del Parque
            Industrial de Roldán, Santa Fe - Argentina.
          </p>
          <p data-aos="fade-in" data-aos-duration="1000">
            Contamos con una superficie total de 3000m² cubiertos sobre un
            terreno de 9000m².
          </p>
          <p data-aos="fade-in" data-aos-duration="1000">
            Nuestra fábrica está equipada con 17 máquinas inyectoras de última
            generación, con capacidades que van desde 60 T hasta 800 T de
            cierre, abarcando una totalidad de inyección que va desde 1 gramo
            hasta 4018 gramos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
