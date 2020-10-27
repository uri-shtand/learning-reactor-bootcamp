import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

export default function Game(props) {
  const [points,setPoints] = useState(0);
  return (
    <div>
      <Points points={points}/>
      <GameArea setPoints={setPoints}/>
    </div>
  );
}


function GameArea({setPoints}) {
  const [selected,setSelected] = useState(0);
  
  const styleBox = {
    float: 'left' ,
    width: '30px',
    height: '30px',
    margin: '10px',
    backgroundColor: 'gray',
  };

  const redBox = {
    ...styleBox,
    backgroundColor: 'red',
  } 

  function selectBox(item) {
    if (item == selected) {
      setSelected(_.random(0,9));
      setPoints(points => points +10);
    } else{
      setPoints(points => points - 5);
      
    }
  };

  function resetGame(e)  {
    setPoints(0)
    setSelected(_.random(0,9));
  }
  
  return (
    <>
    <button onClick={resetGame}>New Game</button>
    <div>
      {_.range(10).map(item => (<div key={item} style={item == selected ? redBox : styleBox} onClick={e => selectBox(item)}></div>))}
    </div>
    </>
  );
 
}

function Points({points}) {
  return (
    <h2>Your points are: {points}</h2>
  );
}
