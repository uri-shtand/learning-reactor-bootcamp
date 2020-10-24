import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import Converter from './converter';

const App = () => {
  const [delta, setDelta] = useState(1);

  function handleChangeDelta(e) {
    const newValue = Number(e.target.value);
    setDelta(newValue);
  }

  function resetDelta() {
    setDelta(1);
  }

  return (
    <div>
      <Converter/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
