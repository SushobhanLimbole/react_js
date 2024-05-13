import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
// import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import StatePage from './StatePage.js/StatePage';
// import ItalyMap from './ItalyMap';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={LoginPage} />
          <Route path='/home' Component={Home}/>
          <Route path='/state' Component={StatePage}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
