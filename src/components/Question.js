import React from "react";

const testQuestion = {
    id: 1,
    question: "In the 'Back To the Future' trilogy, at what speed does the DeLorean need to be going to travel through time",
    answers: {
        1: "100 mph",
        2: "55 mph",
        3: "88 mph",
        4: "1000 mph" },
    correct: 3  }

function Question() {
    function handleClick(selectedAnswer){
        if( parseInt(selectedAnswer) === testQuestion.correct){
            console.log('Correct')
        }
        else console.log('Wrong')

    }

    return(
        <div>
            <h3>{testQuestion.question}</h3>
            <button onClick={e => handleClick(e.target.value)} value={1}>{testQuestion.answers[1]}</button>
            <button onClick={e => handleClick(e.target.value)} value={2}>{testQuestion.answers[2]}</button>
            <button onClick={e => handleClick(e.target.value)} value={3}>{testQuestion.answers[3]}</button>
            <button onClick={e => handleClick(e.target.value)} value={4}>{testQuestion.answers[4]}</button>
        </div>
    )
}

export default Question;