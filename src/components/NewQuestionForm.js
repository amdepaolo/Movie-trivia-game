import React from "react";

function NewQuestionForm(){
    function handleSubmit(e){
        e.preventDefault();
        const formObject = {
            questionText: e.target.questionText.value,
            answers: {
                1: e.target.answer1.value,
                2: e.target.answer2.value,
                3: e.target.answer3.value,
                4: e.target.answer4.value
            },
            correct: e.target.correctAnswer.value
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
            <input type='text' name='questionText'/>
            <label>answers:</label>
            <input type='text' name="answer1"/>
            <input type='text' name="answer2"/>
            <input type='text' name="answer3"/>
            <input type='text' name="answer4"/>
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