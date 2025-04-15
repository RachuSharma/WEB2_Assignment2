import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container text-center mt-5">
      <button className="btn btn-dark mb-4" onClick={() => navigate(-1)}>
        ← Back to Pokédex
      </button>
  
      <div className="detail-card p-4 shadow rounded">
        <h1 className="text-capitalize mb-3">{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mb-3" style={{ height: '100px' }} />
  
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      </div>
    </div>
  );
  
}

export default PokemonDetail;
