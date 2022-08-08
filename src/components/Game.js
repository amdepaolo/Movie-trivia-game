import React, {useState} from "react";
import Question from "./Question";

function Game({questions}){
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleAnswer(){
        const nextQ = currentQuestion+1;
        if (nextQ > questions.length){
            return;
        }
        else
        setCurrentQuestion(nextQ)
    }

    return(
        <Question question={questions[currentQuestion]} handleAnswered={handleAnswer} />
    )
}

export default Game;