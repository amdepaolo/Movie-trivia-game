import React from "react";

function Question({question, handleAnswered, handleCorrect}) {
    const {questionText, correct, shuffledAnswers} = question;

    function handleClick(selectedAnswer){
        if(selectedAnswer.target.value === correct){
            handleCorrect();
            handleAnswered();
        }
        else {
            handleAnswered();
        }
    };

    return(
        <div>
            <h3>{questionText}</h3>
            <button onClick={handleClick} value={shuffledAnswers[0].value}>{shuffledAnswers[0].text}</button>
            <button onClick={handleClick} value={shuffledAnswers[1].value}>{shuffledAnswers[1].text}</button>
            <br/>
            <button onClick={handleClick} value={shuffledAnswers[2].value}>{shuffledAnswers[2].text}</button>
            <button onClick={handleClick} value={shuffledAnswers[3].value}>{shuffledAnswers[3].text}</button>
        </div>
    )
}

export default Question;