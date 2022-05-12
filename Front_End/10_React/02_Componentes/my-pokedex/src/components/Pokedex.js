import React from 'react';
import Pokemon from './Pokemon';
import listaPokemons from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <div id="pokedex">
        <h3 className="pokedex-title">Pokedex</h3>
      {
        listaPokemons.map((pokemon) => (
          <Pokemon
          name={pokemon.name}
          type={pokemon.type}
          averageWeight={pokemon.averageWeight}
          image={pokemon.image}
          key={pokemon.id}
          />
        ))
      }
      </div>
    );
  }
}

export default Pokedex;
