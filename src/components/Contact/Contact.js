import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";

import "./Contact.css";
import logo from "../../img/logo.png";

const Contact = () => {
  return (
    <div id="contacto">
      <div className="container d-flex justify-content-between py-4 px-3">
        <div>
          <h2 className="mb-3 fw-semibold my-2">CONTACTANOS</h2>

          <h4 className="mb-3">
            <MdEmail className="fs-5" />

            <span className="h6 mx-1">
              <a href="mailto:info@mippsrl.com"> info@mippsrl.com</a>
            </span>
          </h4>
          <h4 className="mb-3">
            <FaPhone className="fs-6" />
            <span className="h6 mx-2"> 341-371-0649</span>
          </h4>
          <h4 className="mb-3">
            <IoLocationSharp style={{ marginLeft: "-2px" }} />{" "}
            <span className="h6">
              {" "}
              <a
                href="https://maps.app.goo.gl/ETUWBGC7oZb44XLZ9"
                target="_blank"
              >
                Lote 21 Parque Industrial de Roldán, Santa Fe, Argentina.
              </a>
            </span>
          </h4>
          <div className="d-flex gap-3 mt-4">
            <div>
              <a href="https://www.instagram.com/mippsrl" target="_blank">
                <SocialIcon
                  network="instagram"
                  bgColor=""
                  title="Instagram"
                  data-aos="zoom-out"
                  data-aos-offset="50"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100090346159617"
                target="_blank"
              >
                <SocialIcon
                  network="facebook"
                  title="Facebook"
                  data-aos="zoom-out"
                  data-aos-delay="200"
                  data-aos-offset="50"
                />
              </a>
            </div>
            <div>
              <a href="http://wa.me/543416843153" target="_blank">
                <SocialIcon
                  network="whatsapp"
                  title="Whatsapp"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  data-aos-offset="50"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="logo align-self-center ms-sm-4 ms-md-0">
          <img src={logo} />
        </div>
      </div>
      <div
        className="w-100 text-center p-3"
        style={{
          backgroundColor: "rgb(0,0,0,0.05)",
          color: "black",
          fontSize: "14px",
          fontWeight: "1",
        }}
      >
        © 2024 - MIPP S.R.L.
      </div>
    </div>
  );
};

export default Contact;
