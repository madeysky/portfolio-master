import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Nawka from "./komponenty/nawka/Nawka";
import Header from './komponenty/header/Header';
import Particle from './komponenty/particles/Particle';






function App() {
  return (
    <>
      <Particle />
      <Nawka />
      <Header />
    </>
  );
}

export default App;
