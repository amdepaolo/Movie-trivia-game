import React from "react";

function Question({question, handleAnswered, handleCorrect}) {
    const {questionText, correct, answers} = question;
    function handleClick(selectedAnswer){
        const answerValue = selectedAnswer.target.value;
        if(answerValue === correct){
            console.log('Correct')
            handleCorrect();
            handleAnswered();
        }
        else {
            console.log('Wrong')
            handleAnswered();
        }
    };

    return(
        <div>
            <h3>{questionText}</h3>
            <button onClick={handleClick} value={1}>{answers[1]}</button>
            <button onClick={handleClick} value={2}>{answers[2]}</button>
            <br></br>
            <button onClick={handleClick} value={3}>{answers[3]}</button>
            <button onClick={handleClick} value={4}>{answers[4]}</button>
        </div>
    )
}

export default Question;