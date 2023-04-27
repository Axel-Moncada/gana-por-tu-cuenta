import "./App.css";

import { IntroLanding } from "./components/IntroLanding";

import logoBU from "./Assets/img/Logo.png";
import { ComoParticipar } from "./components/ComoParticipar";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logoBU} alt="logo" />
      </header>

      <IntroLanding />
      <ComoParticipar />
      <footer style={{marginTop:"50px"}}>
        <img src={logoBU} alt="logo" />
      </footer>
    </div>
  );
}

export default App;
