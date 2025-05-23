import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokemonCard({ name, url, index, onClick }) {
  const [sprite, setSprite] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSprite(data.sprites.front_default);
        setId(data.id);
        setType(data.types[0]?.type.name);
      });
  }, [url]);

  const bgColor = getBackgroundColor(index);
  function getBackgroundColor(index) {
    const colors = ['#ffe4f0', '#ffeccf', '#dfffe0', '#e0f0ff'];
    return colors[index % colors.length];
  }

  return (
    <div
      className="card text-center shadow-sm"
      style={{
        backgroundColor: bgColor,
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onClick={() => onClick(name)}
    >
      <div className="card-body">
        <small className="text-muted">#{id}</small>
        <h5 className="card-title text-capitalize">{name}</h5>
        {sprite && (
          <img
            src={sprite}
            alt={name}
            className="img-fluid"
            style={{ height: '70px' }}
          />
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
