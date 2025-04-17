import mewBg from '../assets/mew.png';
import { useEffect, useState } from 'react'; 
import './Home.css';
import PokemonModal from '../components/PokemonModal';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';


function Home() {
  const LIMIT = 8; // Number of Pokémon to fetch per page
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch Pokémon');
        return res.json();
      })
      .then(data => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [offset]);

  return (
    <div className="homepage">
      <div className="background-layer">
          <img src={mewBg} alt="Mew background" className="mew-bg" />
</div>

      {/* Top section with heading + image */}
      <div className="home-top text-center">
        <h1 className="main-title">Welcome to Rachana’s Pokédex</h1>
        <button
          className="subtitle mew-button"
          onClick={() => setSelectedPokemon('mew')}
        >
          Soft, creative, and a little magical like Mew #151 ✨
        </button>
  
        <p className="description">Discover your favorite Pokémon and their abilities!</p>

  
        <div className="image-row">
          <img
            className="mew-pic"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
            alt="Mew"
          />
          <img
            className="pokedex-logo"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="PokéAPI"
          />
        </div>
      </div>
      

      {/* Pokémon list below */}
      <div id="pokedex-list" className="container mt-5">
        

        {error && <p className="text-danger text-center">Failed to load Pokémon.</p>}
        {loading && <p className="text-center">Loading...</p>}

        {!loading && !error && (
       <div className="row g-4">
       {pokemonList.map((pokemon, index) => (
         <div key={pokemon.name} className="col-6 col-md-4 col-lg-3">
           <PokemonCard
             name={pokemon.name}
             url={pokemon.url}
             index={index + offset}
             onClick={() => setSelectedPokemon(pokemon.name)}
           />
         </div>
       ))}
     </div>
     
        )}

        <Pagination offset={offset} setOffset={setOffset} limit={LIMIT} />
      </div>
      {selectedPokemon && (
  <PokemonModal
    name={selectedPokemon}
    onClose={() => setSelectedPokemon(null)}
  />
)}
      
    </div>
  );
}

export default Home;
