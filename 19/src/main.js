import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import _ from "lodash";

const style = {
  border: "1px solid black",
};

function TableLine({ line }) {
  const id = line[0];
  return (
    <tr style={style} key={line[0]}>
      {line.map((col) => (
        <td key={id + "." + col}>{col}</td>
      ))}
    </tr>
  );
}


function SortableTable(props) {
  const { data } = props;
  const headers = data[0];
  const dataWithNoHeaders = [...data.slice(1)];
  const [body, setBody] = useState(dataWithNoHeaders);
  const [sortOrder,setSortOrder] = useState("asc")
  const [lastIndex,setLastIndex] = useState(0);

  function sortBy(index) {
    const actualOrder = index == lastIndex && sortOrder == 'asc' ? 'desc' : 'asc';
    setSortOrder(actualOrder);
    const newBody = _.orderBy(body, line => line[index],actualOrder);
    setBody(newBody);
    setLastIndex(index);
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header,index) => (
            <th key={header} style={style} onClick={e => sortBy(index)}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((line) => (
          <TableLine line={line} />
        ))}
      </tbody>
    </table>
  );
}

const data = [
  ["id", "Name", "Country", "Email"],
  [0, "dan", "Israel", "dan@gmail.com"],
  [1, "dana", "Israel", "dana@gmail.com"],
  [2, "anna", "Israel", "anna@gmail.com"],
  [3, "zina", "UK", "zina@gmail.com"],
];

const App = () => {
  const items = ["one", "two", "three", "four", "five"];

  return (
    <div>
      <SortableTable data={data} />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
