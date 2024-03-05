import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";

import "./Contact.css";

const Contact = () => {
  return (
    <div id="contacto" className="">
      <div className="container d-flex justify-content-between mx-auto py-5">
        <div className="">
          <h2 className="mb-3 fw-semibold">CONTACTANOS</h2>

          <h4 className="mb-2">
            <MdEmail className="fs-5" />

            <span className="h6 mx-1"> email@gmail.com</span>
          </h4>
          <h4 className="mb-2">
            <FaPhone className="fs-6" />
            <span className="h6 mx-2"> 341-123-1234</span>
          </h4>
          <h4 className="mb-2">
            <IoLocationSharp style={{ marginLeft: "-2px" }} />{" "}
            <span className="h6">
              {" "}
              <a
                href="http://maps.google.com/maps?q=210+Louise+Ave,+Nashville,+TN+37203"
                target="_blank"
              >
                Calle Falsa 123, Roldan, Santa Fe 31231.
              </a>
            </span>
          </h4>
          <div className="d-flex gap-3 mt-4">
            <div>
              <a href="http://instagram.com" target="_blank">
                <SocialIcon
                  network="instagram"
                  bgColor="var(--secondary)"
                  title="Instagram"
                />
              </a>
            </div>
            <div>
              <a href="http://linkedin.com" target="_blank">
                <SocialIcon network="linkedin" title="Linkedin" />
              </a>
            </div>
            <div>
              <a href="http://linkedin.com" target="_blank">
                <SocialIcon network="whatsapp" title="Whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <div className="logo align-self-center p-2">
          <img src="img/Original.png" />
        </div>
      </div>
      {/* <div
        className="w-100 text-center p-4"
        style={{
          backgroundColor: "var(--secondary)",
          color: "white",
          fontSize: "15px",
          fontWeight: "1",
        }}
      >
        Copyright © 2024 mipp.com.ar
      </div> */}
    </div>
  );
};

export default Contact;
