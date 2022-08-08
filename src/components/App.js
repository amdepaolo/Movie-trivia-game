import {useEffect, useState} from "react";
import Game from "./Game";
import NewQuestionForm from "./NewQuestionForm";


function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(setQuestions)
  }, []);

  return (
    <div>
      <h1> Movie Trivia Game </h1>
      <Game questions={questions} />
      <NewQuestionForm />
    </div>
  )
}

export default App;
