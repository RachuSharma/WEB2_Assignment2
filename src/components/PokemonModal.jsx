import { useEffect, useState } from 'react';
import './PokemonModal.css';

function PokemonModal({ name, onClose }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="text-capitalize">{pokemon.name}</h2>
        <img
  src={pokemon.sprites.other['official-artwork'].front_default}
  alt={pokemon.name}
  className="modal-pokemon-img"
/>


        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default PokemonModal;
