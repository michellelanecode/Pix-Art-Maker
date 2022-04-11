// setting needed values {color, form, canvas, width and height} to variables.
let color = document.getElementById('colorPicker').value;
const form = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas')
const inputWidth = document.getElementById('inputWidth')
const inputHeight = document.getElementById('inputHeight')

// event handler for form submission that will run makeGrid function with the input height and width as arguments;
form.addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelectorAll('tr').forEach((ele) => {
        ele.remove();
    })
    let height = inputHeight.value;
    let width = inputWidth.value;
    makeGrid(width, height)
})


/**
 * Change color being set as background of object.
 * @param {this} the object calling the function
 * updates color variable to current color value and sets background color for this to color value
 */
function changeColor() {
    color = document.getElementById('colorPicker').value;
    this.style.background = color;
}

// adding event listener for color change to run function that updates background color.
document.getElementById('colorPicker').addEventListener("change", changeColor)


/**
 * Create a grid with size based on the input values & add event handlers for each cell to add color for every click.
 * @param {inputWidth} width
 * @param {inputHeight} height
 * create height number of rows and insert width number of cells.
 */

function makeGrid(width, height) {
    var w = 0;
    var h = 0;
    for (var h = 0; h < height; h++) {
        var row = canvas.insertRow(0)
        for (var w = 0; w < width; w++) {
            row.insertCell(0)
        }
    }
    const cells = document.querySelectorAll('td');
    cells.forEach((cell) => {
        cell.addEventListener('click', changeColor)
    })
}