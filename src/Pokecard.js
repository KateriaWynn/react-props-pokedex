import React from 'react';

const PokeCard = ({ name, image, type, exp }) => {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{name}</h3>
      <img className="Pokecard-image" src={image} alt={name}></img>
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default PokeCard;
