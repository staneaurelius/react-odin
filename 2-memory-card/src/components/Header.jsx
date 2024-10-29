import '../style/Header.css';

function Header() {
    return (
        <header>
            <img src="/pokemon.png" alt="Pokémon logo" width="320px" />
            <svg xmlns="http://www.w3.org/2000/svg" className="divider" viewBox="0 0 1000 100" fill="currentColor">
                <path d="M0 0v100c166.7 0 166.7-60 333.3-60S500 77 666.7 77 833.3 28 1000 28V0H0Z" opacity=".5"></path>
                <path d="M0 0v100c166.7 0 166.7-63 333.3-63S500 70 666.7 70 833.3 16 1000 16V0H0Z" opacity=".5"></path>
                <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
            </svg>
        </header>
    );
};

export default Header;