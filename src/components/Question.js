import React from "react";

function Question({question, handleAnswered, handleCorrect}) {
    const {questionText, correct, answers} = question;

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
            <button onClick={handleClick} value={1}>{answers[1]}</button>
            <button onClick={handleClick} value={2}>{answers[2]}</button>
            <br/>
            <button onClick={handleClick} value={3}>{answers[3]}</button>
            <button onClick={handleClick} value={4}>{answers[4]}</button>
        </div>
    )
}

export default Question;