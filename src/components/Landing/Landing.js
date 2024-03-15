import { useEffect, useState } from "react";
import "../Landing/Landing.css";
import { FaAnglesDown } from "react-icons/fa6";
import { debounce } from "lodash";

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log(window.scrollY);

    const handleScroll = debounce(() => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center intro">
      <h1 className="animate__animated animate__fadeIn mt-auto mb-0">
        APOSTANDO A LA INDUSTRIA ARGENTINA
      </h1>
      <span
        className={`fs-1 mt-auto mb-4 down-icon ${
          scrolled && "down-icon-remove"
        }`}
      >
        <FaAnglesDown />
      </span>
    </div>
  );
};

export default Landing;
