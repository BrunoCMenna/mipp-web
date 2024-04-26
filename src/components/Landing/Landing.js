import { useEffect, useState } from "react";
import "../Landing/Landing.css";
import { IoMdArrowRoundUp } from "react-icons/io";
import { debounce } from "lodash";

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    console.log(window.scrollY);

    const handleScroll = debounce(() => {
      if (window.scrollY > 200) {
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
    <>
      <div
        fetchpriority="high"
        className="d-flex flex-column align-items-center intro"
      >
        <div className="animate__animated animate__fadeIn mb-auto mt-auto">
          <h1 className="pb-2">Eficiencia, innovación y equipo</h1>
          <h2 className="px-3">La nueva generación de MIPP</h2>
        </div>
      </div>
      {scrolled && (
        <button onClick={scrollTop} className="top-button btn btn-primary">
          <IoMdArrowRoundUp />
        </button>
      )}
    </>
  );
};

export default Landing;
