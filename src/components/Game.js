import React, {useState} from "react";
import Question from "./Question";
import Timer from "./Timer";

function Game({questions}){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [time, setTime] = useState(30);

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

    if(time === 0) handleNextQ();

    return(
        <div>
          <Question question={questions[currentQuestion]} handleAnswered={handleNextQ} /> 
          <Timer time={time} timeSetter={setTime} /> 
        </div>
        
    )
}

export default Game;