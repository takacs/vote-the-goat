import './App.css';
import Navbar from './components/Navbar.js';
import Game from './components/Game.js'
import Goat from './components/Goat.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Goat />
      <Game />
    </div>
  );
}

export default App;
