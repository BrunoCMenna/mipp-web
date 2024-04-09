import { useEffect, useState } from "react";
import "../Landing/Landing.css";
import { FaAnglesDown } from "react-icons/fa6";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
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
    <div className="d-flex flex-column align-items-center intro">
      <h1 className="animate__animated animate__fadeIn mb-auto mt-auto">
        APOSTANDO A LA INDUSTRIA ARGENTINA
      </h1>
      <span className={`mb-5 down-icon ${scrolled && "down-icon-remove"}`}>
        <FaAnglesDown />
      </span>
    </div>
  );
};

export default Landing;
