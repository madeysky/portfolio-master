import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Nawka from "./komponenty/nawka/Nawka";
import Header from './komponenty/header/Header';
import Particle from './komponenty/particles/Particle';
import OMnie from './komponenty/omnie/OMnie';
import Services from './services/Services';
import Experience from './komponenty/experience/Experience';







function App() {
  return (
    <>
      <Particle />
      <Nawka />
      <Header />
      <OMnie/>
      <Services/>
      <Experience/>
      
    </>
  );
}

export default App;
