import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./components/home";
import './App.css';
// import Features from "./components/features";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Features from "./components/features";
import Contact from "./components/contact";
import Header from "./components/header";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/features" Component={Features}/>
          <Route path="/services" Component={Services}/>
          <Route path="/testimonials" Component={Testimonials}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/*" Component={NotFound}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
