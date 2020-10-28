import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';

const pageStyle = {
  padding: "3px 10px",
	fontWeight: "bold",

}

const App = () => {

  const [pageNumber,setPageNumber] = useState(1);
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [country,setCountry] = useState("");
  const [city,setCity] = useState("");

  function nextPage() {
    if (pageNumber < 3) {
      setPageNumber(page => page +1)
    }
  }

  function prevPage() {
    if (pageNumber > 1) {
      setPageNumber(page => page -1)
    }
  }

  return (
    <div >
      {pageNumber ==1 ? (<Page1 userName={userName} setUserName={setUserName} password={password} setPassword={setPassword}/>) : false}
      {pageNumber ==2 ? (<Page2 country={country} setCountry={setCountry} city={city} setCity={setCity}/>) : false}
      {pageNumber ==3 ? (<Page3 userName={userName} country={country} city={city}/>) : false}
      <br/>
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
};

function Page1({userName,setUserName,password,setPassword}) {
  return (
    <div style={pageStyle}>
      <h2>Enter your name and password</h2>
      <label>Name:<input value={userName} onChange={e => setUserName(e.target.value)}/></label>
      <label>Password:<input type="password" value={password} onChange={e => setPassword(e.target.value)}/></label>
    </div>
  )
}

function Page2({country,setCountry, city, setCity}) {
  return (
    <div style={pageStyle}>
      <h2>Enter your country and city</h2>
      <label>Country:<input value={country} onChange={e => setCountry(e.target.value)}/></label>
      <label>City:<input value={city} onChange={e => setCity(e.target.value)}/></label>
    </div>
  )
}

function Page3({userName,country,city}) {
  return (
    <div>
      <h2>Summary</h2>
      <table style={pageStyle}>
        <tbody>
          <tr><td>Name: {userName}</td></tr>
          <tr><td>Country: {country}</td></tr>
          <tr><td>City: {city}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
