var color = document.getElementById('colorPicker').value;
const form = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas')
const inputWidth = document.getElementById('inputWidth')
const inputHeight = document.getElementById('inputHeight')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelectorAll('tr').forEach((ele) => {
        ele.remove();
    })
    let height = inputHeight.value;
    let width = inputWidth.value;
    makeGrid(width, height)
})


function changeColor() {
    color = document.getElementById('colorPicker').value;
    this.style.background = color;
}

document.getElementById('colorPicker').addEventListener("change", changeColor)

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