import React from "react";
import SubmitScore from "./SubmitScore";

function GameEnd({score, restartClick}){
    return(
        <div>
            <h3>Game Over!</h3>
            <h4>Your Final Score: {score} points</h4>
            <button onClick={restartClick}>play again?</button>
            <SubmitScore score={score} />
        </div>   
    )
}

export default GameEnd;