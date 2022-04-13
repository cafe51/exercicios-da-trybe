import Pokemon from './Pokemon'
import React from 'react';

class Pokedex extends React.Component {
	render() {
		// const { pokemons } = this.props;
		return (	
			<div className='pokedex'>
				{this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
			</div>
		)
	}
}

export default Pokedex;
