import {Routes,Route,Link} from 'react-router-dom';
import "./App.css";
import Home from './pages/home.js';
import Html from './pages/html.js';
import Css from './pages/css.js';
import Js from './pages/js.js';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/html' element={ <Html/>} />
        <Route path='/css' element={ <Css/>} />
        <Route path='/js' element={ <Js/>} />
    </Routes>
      </div>
    
  );
}

export default App;
