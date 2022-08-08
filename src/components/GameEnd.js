import React from "react";

function GameEnd({score, restartClick}){
    return(
        <div>
            <h3>Game Over!</h3>
            <h4>Your Final Score: {score} points</h4>
            <button onClick={restartClick}>play again?</button>
        </div>   
    )
}

export default GameEnd;