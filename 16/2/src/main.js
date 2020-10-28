import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';


const App = () => {

  const options = ["Germany","Israel","United States","Denmark","Lebanon","Nigeria","Jordan"]
  const [filter,setFilter] = useState("")

  function changeFilter(newFilter) {
    setFilter(newFilter.toLowerCase());
  }

  function filterOptions(options) {
    return options.filter(option => option.toLowerCase().includes(filter))
  }

  return (
    <div>
      <InputFilter filter={filter} changeFilter={changeFilter}/>
      <OptionList options={filterOptions(options)}/>
    </div>
  )
};

function OptionList({options}) {
  const tableStyle = {
    border : "1px solid black",
    padding: "2px",
    borderSpacing: "5px"

  }
  return (
    <table style={tableStyle}>
      {options.map(option => (<tr><td>{option}</td></tr>))}
    </table>
  );
}

function InputFilter({filter,changeFilter}) {
  return (
    <div>
      <label>Filter: <input value={filter} onChange={e => changeFilter(e.target.value)}></input></label>
    </div>
  );
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
