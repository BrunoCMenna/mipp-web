import "./App.css";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import ClientsAndHistory from "./components/ClientsAndHistory/ClientsAndHistory";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <OurServices />
      <ClientsAndHistory />
      <Location />
      <Contact />
    </div>
  );
}

export default App;
