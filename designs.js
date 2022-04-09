// Select color input
// Select size input
var color = document.getElementById('colorPicker').value;
const form = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas')
const width = document.getElementById('inputWidth').value;
const height = document.getElementById('inputHeight').value;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(width, height)
})

form.addEventListener('reset', function(event) {
    event.preventDefault()
    document.querySelectorAll('tr').forEach((ele) => {
        ele.remove();
    })
    makeGrid(width, height)
})

function changeColor() {
    color = document.getElementById('colorPicker').value;
    this.style.background = color;
}

document.getElementById('colorPicker').addEventListener("change", changeColor)

// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
    // take the width and the height and use it to make columns to the width of width and to the height of height.
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
makeGrid(20, 20)