import Pokedex from './Pokedex'
import pokemons from './data';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
