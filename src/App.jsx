import "./App.css";
import OscarBilde from "./sections/OscarBilde/OscarBilde";
import Projects from "./sections/Projects/Projects";
import Nav from "./sections/Nav/Nav";
import OmMeg from "./sections/OmMeg/OmMeg";
import Ferdigheter from "./sections/Ferdigheter/Ferdigheter";
import Kontakt from "./sections/Kontakt/Kontakt";

function App() {
  return (
    <>
      <Nav />
      <OscarBilde />
      <OmMeg />
      <Ferdigheter />
      <Projects />
      <Kontakt />
    </>
  );
}

export default App;
