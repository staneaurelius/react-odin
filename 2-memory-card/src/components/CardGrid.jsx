import { useEffect, useState } from "react";
import { PokemonCard, PlaceholderCard } from "./Card";
import { shuffleArray } from "./utils";
import '../style/CardGrid.css';

function generatePlaceholder(count) {
    const placeholderArray = new Array(count);

    for (let i = 0; i < count; i++) {
        placeholderArray[i] = <PlaceholderCard key={i + 1}/>
    };

    return placeholderArray;
};

function CardGrid({ pokeList }) {

    const url = 'https://pokeapi.co/api/v2/pokemon',
        [pokemonData, setPokemonData] = useState([]);

    const [isShown, setIsShown] = useState(false),
        handleCardClick = (e) => {
            setIsShown(false);
            
            const clickedCard = e.currentTarget.getAttribute('data-pokemon'),
                updatedData = [...pokemonData],
                targetIdx = updatedData.findIndex((element) => element.name === clickedCard);

            updatedData[targetIdx].isClicked = true;
            setPokemonData( shuffleArray(updatedData) );
            setTimeout(() => setIsShown(true), 1500);
        };

    useEffect(() => {
        let ignore = false;
        const allData = [];

        if (!ignore) {
            pokeList.forEach(pokemonId => {
                allData.push(
                    fetch(`${url}/${pokemonId}`, { method : 'GET' })
                    .then(response => response.json())
                    .then(data => {
                        return {
                            name : data.species.name,
                            imageURL : data.sprites.other['official-artwork']['front_default'],
                            isClicked : false
                        };
                    })
                );
            });
            
            Promise.all(allData).then(data => setPokemonData(data));
            setTimeout(() => setIsShown(true), 1500);
        };

        return () => { ignore = true };

    }, [pokeList]);

    return (
        <main className="card-grid">
            {isShown
                ? pokemonData.map(pokemon => {
                    return <PokemonCard name={pokemon.name} imgURL={pokemon.imageURL} onClick={handleCardClick} key={pokemon.name}/>
                })
                : generatePlaceholder(pokeList.length)
            }
        </main>
    );
};

export default CardGrid;