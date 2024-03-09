import "./Location.css";

const Location = () => {
  return (
    <div className="location-bg">
      <div className="container d-flex flex-wrap-reverse flex-md-nowrap  px-4 py-5 p-md-5 gap-5 justify-content-center">
        <div className="m-auto map-wrapper wow animate__animated animate__fadeIn">
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
          <h1 className="mb-4 fw-semibold text-end text-md-start wow animate__animated animate__fadeInRight">
            ¿DÓNDE NOS ENCONTRAMOS?
          </h1>
          <p className="wow animate__animated animate__fadeIn">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p className="wow animate__animated animate__fadeIn">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem! Soluta nam rem, porro veritatis fugiat dignissimos, nisi
            praesentium officiis magnam minus fugit ipsa nulla. Doloremque sint
            beatae eius? Consectetur?
          </p>
          <p className="wow animate__animated animate__fadeIn">
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

export default Location;
