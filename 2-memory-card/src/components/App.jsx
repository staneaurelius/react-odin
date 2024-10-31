import { useState } from 'react'
import '../style/App.css'
import Header from './Header';
import CardGrid from './CardGrid';
import { generateRandomCards, shuffleArray } from './utils';

function App() {
  const [cardList, setCardList] = useState(
    shuffleArray(generateRandomCards(5))
  );

  return (
    <>
      <Header />
      <CardGrid pokeList={cardList} />;
    </>
  );
}

export default App
