import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {
  
  const [target] = useState(Math.floor(Math.random() * 1000));

  const [input,setInput] = useState(0);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h2>Guessing game</h2>
      <label>Guess the number:<input type="number" value={input} onChange={handleInputChange}/></label>
      <br/><GuessResult guess={input} target={target}/>
    </div>
  )
};

function GuessResult(props) {
  const {guess,target} = props;
  let guessAnswer = "Correct";
  if (guess < target || Math.random() > 0.9) {
    guessAnswer = "Too low";
  } else if (guess > target || Math.random() > 0.9) {
    guessAnswer = "Too high";
  }
  return (
  <label>{guessAnswer}</label>
  );
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
