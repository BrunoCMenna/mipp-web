import "./App.css";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import ClientsAndHistory from "./components/ClientsAndHistory/ClientsAndHistory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ClientsAndHistory />
      <Location />
      <Contact />
    </div>
  );
}

export default App;
