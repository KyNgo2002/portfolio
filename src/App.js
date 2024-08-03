import './App.css';
import Planet from './images/Planet.gif'
import NavBar from './Components/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <NavBar
      ></NavBar>
      <div className = "container">
        <div className="Me-Description">
          I graduated from the <b>University of California Davis</b> with a <b>BS in Computer Science</b>. 
          I am very detail oriented and passionate about learning and hope to one day find myself contributing to technologies 
          that push the frontiers of science.
        </div> 
      <img src={Planet} className="PlanetImage" alt = "Black and white gif of planet"></img>
      </div>
    </div>
  );
}

export default App;
