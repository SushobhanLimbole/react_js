import './App.css';
import Tasks from './Tasks/Tasks';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Category from './Category/Category';
import LoginPage from './LoginPage/LoginPage';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  console.log('App called');
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={LoginPage}/>
          <Route path='/category/:userName' Component={Category}/>
          <Route path='/tasks/:id/:userName/:title' Component={Tasks}/>
          <Route path='/*' Component={PageNotFound}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;