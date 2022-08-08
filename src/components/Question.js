import React from "react";

function Question({question, handleAnswered}) {
    const {questionText, correct, answers} = question;
    function handleClick(selectedAnswer){
        if(selectedAnswer === correct){
            console.log('Correct')
        }
        else console.log('Wrong')
        handleAnswered();
    }

    return(
        <div>
            <h3>{questionText}</h3>
            <button onClick={e => handleClick(e.target.value)} value={1}>{answers[1]}</button>
            <button onClick={e => handleClick(e.target.value)} value={2}>{answers[2]}</button>
            <button onClick={e => handleClick(e.target.value)} value={3}>{answers[3]}</button>
            <button onClick={e => handleClick(e.target.value)} value={4}>{answers[4]}</button>
        </div>
    )
}

export default Question;