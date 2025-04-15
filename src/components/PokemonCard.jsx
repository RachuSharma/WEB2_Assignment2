import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokemonCard({ name, url, index }) {
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
  //  new line here
  function getBackgroundColor(index) {
    const colors = ['#ffe4f0', '#ffeccf', '#dfffe0', '#e0f0ff']; // pink, orange, green, blue
    return colors[index % colors.length];
  }

  return (
    <Link to={`/pokemon/${name}`} className="text-decoration-none">
<div
  className="card text-center shadow-sm"
  style={{ backgroundColor: bgColor, borderRadius: '12px' }}
>
        <div className="card-body">
          <small className="text-muted">#{id}</small>
          <h5 className="card-title text-capitalize">{name}</h5>
          {sprite && <img src={sprite} alt={name} className="img-fluid" style={{ height: '70px' }} />}
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
