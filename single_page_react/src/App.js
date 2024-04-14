import Home from "./components/home";
import './App.css';
import Features from "./components/features";
import Services from "./components/services";

function App() {
  return (
    <div>
      <Home/>
      <section id="services">
        <Services/>
      </section>
      <Features/>
    </div>
  );
}

export default App;
