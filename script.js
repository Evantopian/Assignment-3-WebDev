let numRows = 0;
let numCols = 0;
const table = document.getElementById("grid");

function addRow() {
  if (numCols === 0) {
    numCols++;
  }
  numRows++;
  const row = document.createElement("tr");
  for (let i = 0; i < numCols; i++) {
    const cell = document.createElement("td");
    cell.onclick = function () {
      cell.style.background = colorSelected;
    };
    row.appendChild(cell);
  }
  table.appendChild(row);
}

function addColumn() {
  if (numRows === 0) {
    numRows++;
  }
  numCols++;
  for (let i = 0; i < numRows; i++) {
    const cell = document.createElement("td");
    cell.onclick = function () {
      cell.style.background = colorSelected;
    };
    table.rows[i].appendChild(cell);
  }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}