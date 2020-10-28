import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./game";


const App = () => {

  return (
    <div>
      <Game/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
