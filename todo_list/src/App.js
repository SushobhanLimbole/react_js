// import Category from './Category/Category';
import SideBar from './SideBar/SideBar';
import './App.css';
import Tasks from './Tasks/Tasks';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Category from './Category/Category';
import LoginPage from './LoginPage/LoginPage';
import Home from './Home';

function App() {
  console.log('App called');
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={LoginPage}/>
          <Route path='/home' Component={Home}/>
          <Route path='/tasks/:id' Component={Tasks}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;