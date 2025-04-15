import { Link } from 'react-router-dom';
import './Home.css'; // (create this next)

function Home() {
  return (
    <div className="homepage">
      <div className="home-content">
        <h1>Welcome to the Pokédex</h1>
        <p>Discover all your favorite Pokémon with style and color 🌈</p>
        <Link to="/" className="btn-start">Start Exploring →</Link>
      </div>
    </div>
  );
}

export default Home;
