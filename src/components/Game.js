import React, {useState} from "react";
import Question from "./Question";
import Timer from "./Timer";
import Score from "./Score";

function Game({questions}){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [time, setTime] = useState(30);
    const [score, setScore] = useState(0);

    function handleNextQ(){
        const nextQ = currentQuestion+1;
        if (nextQ >= questions.length){
            setCurrentQuestion(0)
            setTime(30);
        }
        else {
            setCurrentQuestion(nextQ)
            setTime(30)};
    };

    function getPoints(){
        const questionPoints = time * 100;
        const updatedScore = score + questionPoints;
        setScore(updatedScore);
    }

    if(time === 0) handleNextQ();

    return(
        <div>
            <Score score={score} />
            <Timer time={time} timeSetter={setTime} />
            <Question question={questions[currentQuestion]} handleAnswered={handleNextQ} handleCorrect={getPoints} />   
        </div>
        
    )
}

export default Game;