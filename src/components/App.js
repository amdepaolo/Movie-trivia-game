import {useEffect, useState} from "react";
import Question from "./Question";
import NewQuestionForm from "./NewQuestionForm";

const testQuestion = {
  id: 1,
  questionText: "In the 'Back To the Future' trilogy, at what speed does the DeLorean need to be going to travel through time",
  answers : {
      1: "100 mph",
      2: "55 mph",
      3: "88 mph",
      4: "1000 mph" },
  correct: 3  }

function App() {
  const [questions, setQuestions] = useState([testQuestion]);
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(setQuestions)
  }, []);

  return (
    <div>
      <Question question={questions[0]}/>
      <NewQuestionForm />
    </div>
  )
}

export default App;
