import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="services-bg">
      <div className="container d-flex text-white">
        <div
          id="servicios"
          data-aos="fade-up"
          className="service-content d-flex flex-column col-sm-12 col-lg-8 col-xl-8 col-xxl-6"
        >
          <h1 data-aos="fade-up" className="mb-3 text-center">
            ¿CUÁLES SON NUESTROS SERVICIOS?
          </h1>
          <p data-aos="fade-up">
            En MIPP MATRICERÍA E INYECCIÓN DE PLÁSTICOS S.R.L., nos
            especializamos en la fabricación de moldes para inyección y soplado,
            asegurando cumplir con los estándares técnicos y legales requeridos
            por nuestros clientes del sector industrial y plástico.
          </p>
          <p data-aos="fade-up">Nuestros servicios se distinguen por:</p>
          <ul className="d-flex flex-column gap-2">
            <li data-aos="fade-up">
              <b>Consideración detallada de aspectos clave: </b>
              <p>
                Nos dedicamos a comprender minuciosamente el plano de la pieza a
                moldear, diseñando las líneas de partición, la zona de entrada,
                la ubicación de botadores y otros detalles relevantes para
                garantizar la eficiencia en la construcción del molde.
              </p>
            </li>
            <li data-aos="fade-up">
              <b>Selección cuidadosa de materiales:</b>
              <p>
                Escogemos los materiales para la construcción de los moldes de
                manera precisa, teniendo en cuenta las necesidades específicas
                de cada proyecto y la calidad deseada del producto final.
              </p>
            </li>
            <li data-aos="fade-up">
              <b>Implementación de Control Numérico Computarizado:</b>
              <p>
                Utilizamos esta tecnología para asegurar la precisión y calidad
                en la fabricación de los moldes, garantizando resultados
                consistentes y de alto nivel.
              </p>
            </li>
            <li data-aos="fade-up">
              <b>Utilización de maquinaria avanzada:</b>
              <p>
                Nuestro equipamiento de última tecnología nos permite ofrecer
                ventajas adicionales como mayor precisión, uniformidad en los
                productos fabricados, flexibilidad para cambios en el diseño en
                un tiempo reducido, y capacidad para atender pedidos urgentes.
              </p>
            </li>
            <li data-aos="fade-up">
              <b>Trabajamos con una amplia variedad de materiales plásticos:</b>{" "}
              <p>
                Desde ABS, PBT, PVC, PP (POLIPROPILENO) PE (POLIETILENO) PS
                (POLIESTIRENO), PET, POLICARBONATO, entre otros. Siempre
                adaptándonos a las necesidades específicas de cada proyecto y
                cliente.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
