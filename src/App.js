import './App.css';
import Counter from "./components/counter";
import About from "./components/about";
import Gallery from "./components/gallery";
import {Route,Routes ,Link,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand'>
        <ul className='navbar-nav'>
          <li>
          <Link className='nav-link' to="/">Home</Link>
          </li>
          <li>
          <Link className='nav-link' to="/counter">Counter</Link>
          </li>
          <li>
          <Link className='nav-link' to="/about">About</Link>
          </li>
          <li>
          <Link className='nav-link' to="/gallery">Gallery</Link>
          </li>
        </ul>
        
      </nav>
      <div className='container'>
      <Routes>
    <Route exact path='/'></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/counter' element={< Counter image="images/mysql.png"/>}></Route>
    <Route exact path='/gallery' element={< Gallery />}></Route>
</Routes>
   </div>
    </Router>
 
  );
}

export default App;
