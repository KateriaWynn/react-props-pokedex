import React from 'react';
import PokeCard from './Pokecard';
import addImage from './helpers';

const Pokedex = ({ pokemon }) => {
  let pokemonwithImg = addImage(pokemon);
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemonwithImg.map((p) => (
          <PokeCard
            key={p.id}
            name={p.name}
            image={p.image}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
