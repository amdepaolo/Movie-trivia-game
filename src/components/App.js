import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import Game from "./Game";
import NewQuestionForm from "./NewQuestionForm";
import Leaderboard from "./Leaderboard";
import NavBar from "./NavBar";


function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(setQuestions)
  }, []);

  return (
    <div>
      <NavBar />
      <h1> Movie Trivia Game </h1>
      <Route exact path='/'>
        <h2>home page placeholder</h2>
      </Route>
      <Route path='/game'>
        <Game questions={questions} />
      </Route>
      <Route path='/leaderboard'>
        <Leaderboard />
      </Route>
      <Route path='/edit'>
        <NewQuestionForm />
      </Route>
    </div>
  )
}

export default App;
