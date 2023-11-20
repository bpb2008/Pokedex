import React, { useState, useEffect } from "react";
import "./styles/App.css";
import PokeList from "./PokeList";
import DetailView from "./DetailView";

function App() {
  const [pokemon, setPokemon] = useState({});

  const handleOnClick = (id) => {
    .fetch(`http;//pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json()) 
      .then(data => {
        const pokemon = new Pokemon(data);
        console.log(pokemon); 
      })
      .catch(err => console.log(err)); 
    console.log(id);
  };

  return (
    <div className="App">
      <PokeList handleOnClick={handleOnClick} />
      <DetailView pokemon={setPokemon} />
    </div>
  );
}

export default App;
