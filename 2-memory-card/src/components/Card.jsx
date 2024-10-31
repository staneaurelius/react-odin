import '../style/Card.css';

function PokemonCard({ name, imgURL, onClick }) {
    return (
        <div className='card active in-animation' data-pokemon={name} onClick={onClick}>
            <img className='pokemon-img' src={imgURL} alt={`${name} image`} width="200px" />
            <p>{name}</p>
        </div>
    );
};

function PlaceholderCard() {
    return (
        <div className="card">
            <img className='placeholder-img' src='/pokemon-card.png' alt='Placeholder image' width="200px" />
        </div>
    );
};

export { PokemonCard, PlaceholderCard };