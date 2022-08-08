import React from "react";

function NewQuestionForm(){
    function handleSubmit(event){
        event.preventDefault();
        const formObject = {
            questionText: event.target.questionText.value,
            answers: {
                1: event.target.answer1.value,
                2: event.target.answer2.value,
                3: event.target.answer3.value,
                4: event.target.answer4.value
            },
            correct: event.target.correctAnswer.value
        };
        console.log(formObject);
        fetch('http://localhost:4000/questions', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formObject)
          })
          .then(r => r.json())
          .then(r => console.log(r))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Question</label>
            <input type='text' name='questionText'></input>
            <label>answers:</label>
            <input type='text' name="answer1"></input>
            <input type='text' name="answer2"></input>
            <input type='text' name="answer3"></input>
            <input type='text' name="answer4"></input>
            <label>correct answer?</label>
            <select name="correctAnswer">
                <option value={1}>answer 1</option>
                <option value={2}>answer 2</option>
                <option value={3}>answer 3</option>
                <option value={4}>answer 4</option>
            </select>
            <input type='submit'/>
        </form>
    )
}

export default NewQuestionForm;