import { useState } from 'react'
import '../style/App.css'
import Header from './Header';
import ScoreBoard from './Score';
import CardGrid from './CardGrid';
import { generateRandomCards, shuffleArray } from './utils';

function App({ cardCount }) {
    const [cardList, setCardList] = useState(
        shuffleArray(generateRandomCards(cardCount))
    );

    const [scores, setScores] = useState({ highScore : 0, currentScore : 0}),
        handleScores = (increaseScore) => {
            if (increaseScore) {
                const updatedScore = {...scores, currentScore : scores.currentScore + 1};
                updatedScore.highScore = updatedScore.currentScore > updatedScore.highScore
                    ? updatedScore.currentScore
                    : updatedScore.highScore
                
                setScores(updatedScore);
            } else {
                setScores({ ...scores, currentScore : 0 });
                setCardList(generateRandomCards(cardCount));
            };
        };

    return (
        <>
            <Header />
            <ScoreBoard scores={scores} />
            <CardGrid pokeList={cardList} flipTimeout={1000} scoreFn={handleScores} />
        </>
    );
};

export default App
