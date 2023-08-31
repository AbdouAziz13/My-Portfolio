import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Apropos from "./components/Apropos";
import Skills from "./components/Skills";
import GestionProjet from "./components/GestionProjet";
import Projets from "./components/Projets";
import Companny from "./components/Companny";
import Collaborateur from "./components/Collaborateur";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulaire from "./components/Formulaire";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <Apropos />
                <Skills />
                <GestionProjet />
                <Projets />
                <Companny />
                <Collaborateur />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/formulaire" element={<Formulaire />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
