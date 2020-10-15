const SIZE = 10;

/*
    1. Multiplying board
*/
function createMultiplyingBoard() {
    let table = document.getElementById("multiplication");
    let tableData = document.createDocumentFragment();
    
    createHeader(tableData,table);
    
    for (let i=1; i < SIZE; i ++) {
        let headerLine = document.createElement("tr");
        let lineNumber = document.createElement("th");
        lineNumber.textContent = i;
        headerLine.appendChild(lineNumber);

        for (let j=1; j < SIZE; j ++) {
            let cell = document.createElement("td");
            cell.textContent = i*j;
            if (i * j % 3 === 0) {
                cell.style.backgroundColor = "yellow";
            }
            headerLine.appendChild(cell);
        }
        tableData.appendChild(headerLine);
    }
    table.appendChild(tableData);
}

function createHeader(tableData,table) {
    let headerLine = document.createElement("tr");
    for (let i = 1; i < SIZE; i++) {
        let header = document.createElement("th");
        header.textContent = i;
        headerLine.appendChild(header);
    }
    tableData.appendChild(headerLine);
}

createMultiplyingBoard();

/*
 2. Text input 
*/

function sameSentence() {
    inputTags = document.querySelectorAll("input");
    for (inputTag of inputTags) {
        inputTag.value = "sameSame";
    }
}

function differentSentence() {
    inputTags = document.querySelectorAll("input");
    names = ["Earthworm Jim","World of goo","transistor","limbo","Watchdogs 2"];
    let i =0;
    for (inputTag of inputTags) {
        inputTag.value = `${names[i++]} ?`;
    }
}
