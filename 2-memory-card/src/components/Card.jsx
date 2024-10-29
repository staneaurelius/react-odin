import { useState, useEffect } from "react";
import '../style/Card.css';

function Card({ pokemonId }) {
    const url = 'https://pokeapi.co/api/v2/pokemon',
        [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`${url}/${pokemonId}`, { method : 'GET' })
            .then(response => response.json())
            .then(data => {
                setPokemon({
                    name : data.species.name,
                    imageURL : data.sprites.other['official-artwork']['front_default']
                })
            })
    }, [pokemonId]);

    return (
        <div className="card">
            {pokemon
                ? <>
                    <img className='pokemon-img' src={pokemon.imageURL} alt={`${pokemon.name} image`} width="200px" />
                    <p>{pokemon.name}</p>
                </>
                : <img className='placeholder-card' src={'/pokemon-card.png'} alt='pokemon card' width="200px" />
            }
        </div>
    );
};

export default Card;