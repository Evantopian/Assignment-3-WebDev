/*  Declare and initialize variables for the number of 
    rows and columns, and get a reference to the HTML 
    table element with an id of "grid"
*/

let numRows = 0;
let numCols = 0;
const table = document.getElementById("grid");


/*  Adds a new row to the grid with the same number 
    of columns as the existing rows. The new cells can 
    be clicked to change their background color to the 
    currently selected color.
*/
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
    updateRowCount();
}


/*  Adds a new column to the grid with the same number
    of rows as the existing columns. The new cells can 
    be clicked to change their background color to the 
    currently selected color.
*/
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
    updateColCount();
}


// Removes the last row from the grid, if any.
function removeRow() {
    if (numRows > 0) {
        numRows--;
        table.deleteRow(numRows);
        updateRowCount();
    }
}

// Removes the last column from the grid, if any.
function removeColumn() {
    if (numCols > 0) {
        numCols--;
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(numCols);
        }
        updateColCount();
    }
}

/*  Sets the currently selected color to the value of the 
    HTML element with ID "selectedColorId". Also, updates the 
    click handler of each cell to change its background color 
    to the selected color.    
*/
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    const cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = function () {
            cells[i].style.background = colorSelected;
        };
    }
}

/*  Changes the background color of all cells that do not 
    have a background color to the currently selected color.
*/
function fillUncolored() {
    const cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].style.background) {
            cells[i].style.background = colorSelected;
        }
    }
}

//  Changes the background color of all cells to the currently selected color.
function fillAll() {
    const cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.background = colorSelected;
    }
}

//  Removes the background color of all cells.
function clearAll() {
    const cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.background = "";
    }
}

/*  Updates the text content of the HTML element with ID 
    "rowCount" to display the number of rows in the grid.
*/
function updateRowCount() {
    const rowCount = document.getElementById("rowCount");
    rowCount.textContent = `Number of rows: ${numRows}`;
}


/*  Updates the text content of the HTML element with ID 
    "colCount" to display the number of columns in the grid.
*/
function updateColCount() {
    const colCount = document.getElementById("colCount");
    colCount.textContent = `Number of columns: ${numCols}`;
}
