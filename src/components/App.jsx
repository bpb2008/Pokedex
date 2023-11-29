import React, { useState } from "react";
import "./styles/App.css";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import Pokemon from "./Pokemon";

const DEFAULT_POKEMON = {
  sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
  type: "grass",
  id: 1,
  name: "Bulbasaur",
};

function App() {
  const [pokemon, setPokemon] = useState(DEFAULT_POKEMON);

  const handleOnClick = async (id) => {
    try {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      const pokemonData = new Pokemon(data);
      setPokemon(pokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <PokeList handleOnClick={handleOnClick} />
      <DetailView pokemon={pokemon} />
    </div>
  );
}

export default App;
