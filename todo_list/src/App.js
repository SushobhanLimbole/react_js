// import Category from './Category/Category';
import SideBar from './SideBar/SideBar';
import './App.css';
import Tasks from './Tasks/Tasks';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Category from './Category/Category';

function App() {
  return (
    <div className='main-section'>
      <SideBar/>
      <Router>
        <Routes>
          <Route path='/' Component={Category}/>
          <Route path='/tasks' Component={Tasks}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;