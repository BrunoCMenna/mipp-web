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
      <div className="animate__animated animate__fadeIn mb-auto mt-auto">
        <h1 className="pb-2">Eficiencia, innovación y equipo</h1>
        <h2 className="px-3">La nueva generación de MIPP</h2>
      </div>
      {/* <span className={`mb-5 down-icon ${scrolled && "down-icon-remove"}`}>
        <FaAnglesDown />
      </span> */}
    </div>
  );
};

export default Landing;
