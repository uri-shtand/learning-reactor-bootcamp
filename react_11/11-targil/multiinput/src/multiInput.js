import React from 'react';
import { useState } from 'react';

export default function MultiInput(props) {
  const {input,setInput} = props;

  function handleInputChange(e) {
    setInput(e.target.value);
  }


  return (
    <div>
        <input value={input} onChange={handleInputChange} placeholder="type something"/>
    </div>
  );
}
