import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import LoginPage from './LoginPage/LoginPage';
import Home from './Home/Home';
import StatePage from './StatePage/StatePage';
import ContainerSection from './ContainerSecttion/ContainerSection';
import ALLUNESCO from './ALLUNESCO/ALLUNESCO';
import ALLCastles from './ALLCastles/AllCastles';
// import ItalyMap from './ItalyMap';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' Component={LoginPage} /> */}
          <Route path='/' Component={Home}/>
          <Route path='/state/:data' Component={StatePage}/>
          <Route path='/sites' Component={ContainerSection}/>
          <Route path='/unesco' Component={ALLUNESCO}/>
          <Route path='/castles' Component={ALLCastles}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
