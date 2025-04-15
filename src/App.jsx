import { Routes, Route, Link } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import About from './pages/About';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  return (
    <div>
      <nav className="custom-navbar">
  <div className="navbar-container">
    <div className="navbar-brand">Pokédex</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
</nav>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
