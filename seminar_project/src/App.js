import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import StatePage from './StatePage/StatePage';
import ALLUNESCO from './ALLUNESCO/ALLUNESCO';
import ALLCastles from './ALLCastles/AllCastles';
import ItalianRegion from './ItalianRegion/ItalianRegion';
import PageNotFound from './PageNotFound/PageNotFound';
import InformationPage from './InformationPage/InformationPage';
import User from './User/User';
import Navbar from './NavBar/NavBar';
import SignUp from './SignUp/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/state/:data' Component={StatePage}/>
          <Route path='/unesco' Component={ALLUNESCO}/>
          <Route path='/castles' Component={ALLCastles}/>
          <Route path='/region' Component={ItalianRegion}/>
          <Route path='/information/:load' Component={InformationPage}/>
          <Route path='/user' Component={User} />
          <Route path='/signup' Component={SignUp} />
          <Route path='/*' Component={PageNotFound}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
