// Select color input
// Select size input
const color = document.getElementById('colorPicker').value;
const form = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas')

form.addEventListener('submit', function (event){
  event.preventDefault();
  const width = document.getElementById('inputWidth').value;
  const height = document.getElementById('inputHeight').value;
  makeGrid(width, height)
})

function changeColor(){
  this.style.background = color;
}
// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
// take the width and the height and use it to make columns to the width of width and to the height of height.
var w = 0;
  var h = 0;
  for (var h = 0; h < height; h++){
   var row = canvas.insertRow(0)
    for (var w = 0; w < width; w++){
      row.insertCell(0)
    }
  }
  const cells = document.querySelectorAll('td');
  cells.forEach((cell)=> {
    cell.addEventListener('click', changeColor)
  })
}



