import '../style/Score.css';

function ScoreBoard({ scores }) {
    return (
        <section className="scoreboard">
            <div className="score">
                <p>High Score: { scores.highScore }</p>
                <p>Current Score: { scores.currentScore }</p>
            </div>
            <p>Get points by clicking on each card no more than once!</p>
        </section>
    );
};

export default ScoreBoard;