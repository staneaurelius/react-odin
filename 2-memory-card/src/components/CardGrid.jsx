import Card from "./Card";
import '../style/CardGrid.css';

function CardGrid({ pokeList }) {
    return (
        <main className="card-grid">
            {pokeList.map(pokemon => {
                return <Card pokemonId={pokemon} key={pokemon}/>
            })}
        </main>
    );
};

export default CardGrid;