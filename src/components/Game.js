import React, {useState} from "react";
import Question from "./Question";
import Timer from "./Timer";
import Score from "./Score";
import GameEnd from "./GameEnd";

function Game({questions, onRestartClick}){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [time, setTime] = useState(30);
    const [score, setScore] = useState(0);

    function handleNextQ(){
        const nextQ = currentQuestion+1;
            setCurrentQuestion(nextQ)
            setTime(30)
    };

    function getPoints(){
        const questionPoints = time * 100;
        const updatedScore = score + questionPoints;
        setScore(updatedScore);
    };

    function restart(){
        setCurrentQuestion(0);
        setTime(30);
        setScore(0);
        onRestartClick();
    }

    if(time < 0) handleNextQ();
    if(currentQuestion >= questions.length){
        return(
            <div>
                <GameEnd score={score} restartClick={restart} />
            </div> 
        )
    }

    else return(
        <div>
            <Score score={score} />
            <Timer time={time} timeSetter={setTime} />
            <Question question={questions[currentQuestion]} handleAnswered={handleNextQ} handleCorrect={getPoints} />   
        </div>
        
    )
}

export default Game;