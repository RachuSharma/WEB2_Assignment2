import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import './Pokedex.css'; // Optional if you're using custom styles

const LIMIT = 12;

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch Pokémon list');
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
    <div className="container mt-4">
      <h1 className="text-center mb-4">Pokédex</h1>
  
      {error && <p className="text-danger text-center">Failed to load Pokémon.</p>}
      {loading && <p className="text-center">Loading...</p>}
  
      {!loading && !error && (
        <div className="row g-4">
          {pokemonList.map((pokemon, i) => (
  <div key={pokemon.name} className="col-6 col-md-4 col-lg-3">
    <PokemonCard name={pokemon.name} url={pokemon.url} index={offset + i} />
  </div>
))}

        </div>
      )}
  
      {<Pagination offset={offset} setOffset={setOffset} limit={LIMIT} /> }
    </div>
  );
  
}

export default Pokedex;
