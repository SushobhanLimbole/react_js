import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainContainer from './Components/MainContainer/MainContainer';
import MultipleDelete from './Components/MultipleDelete/MultipleDelete';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' Component={MainContainer}/>
          <Route path='/delete' Component={MultipleDelete}/>
          {/* <Route path='/*' Component={PageNotFound}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
