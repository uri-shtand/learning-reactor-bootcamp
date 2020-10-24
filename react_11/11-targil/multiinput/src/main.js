import React from 'react';
import ReactDOM from 'react-dom';
import MultiInput from './multiInput';
import { useState } from 'react';

const App = () => {

  const [input,setInput] = useState("");

  return (
    <div>
      <MultiInput input={input} setInput={setInput} />
      <MultiInput input={input} setInput={setInput} />
      <MultiInput input={input} setInput={setInput} />
      <MultiInput input={input} setInput={setInput} />
      <MultiInput input={input} setInput={setInput} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
