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
  

function removeRow() {
  if (numRows > 0) {
    numRows--;
    table.deleteRow(numRows);
  }
}

function removeColumn() {
  if (numCols > 0) {
    numCols--;
    for (let i = 0; i < numRows; i++) {
      table.rows[i].deleteCell(numCols);
    }
  }
}

function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
  const cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function () {
      cells[i].style.background = colorSelected;
    };
  }
}

function fillUncolored() {
  const cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    if (!cells[i].style.background) {
      cells[i].style.background = colorSelected;
    }
  }
}

function fillAll() {
  const cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = colorSelected;
  }
}

function clearAll() {
    const cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.background = "";
    }
}
  