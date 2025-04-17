import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; 
import Pokedex from './pages/Pokedex';
import About from './pages/About';
import PokemonDetail from './components/PokemonModal';

function App() {
  return (
    <div>
      <nav className="custom-navbar">
        <div className="navbar-container">
          <div className="navbar-brand">Pokédex</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pokedex">Pokedex</Link> 
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />             
        <Route path="/pokedex" element={<Pokedex />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
