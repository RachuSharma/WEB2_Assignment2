import './About.css';

function About() {
  return (
    <div className="about-page container mt-5">
      <h1 className="text-center mb-4">About This Pokédex</h1>

      <p className="intro">This project was made to explore and enjoy the world of Pokémon.</p>

      <div className="about-content">
        <p>
          This Pokédex is a fun and interactive way to learn more about different Pokémon — their names, types, abilities, and more.
        </p>
        <p>
          Whether you're a longtime fan or just starting your journey, this little app is here to bring back some memories and spark curiosity.
        </p>
        <p>
          Take your time, explore the Pokémon world, and enjoy the experience. Welcome, trainer!
        </p>
      </div>
    </div>
  );
}

export default About;
