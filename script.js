const rows = document.getElementById('rows');
const columns = document.getElementById('columns');
const color = document.getElementById('color');
const button = document.getElementById('button');
const grid = document.getElementById('grid')
const checker = document.getElementById('checker')

button.addEventListener("click", makeGrid);
checker.addEventListener("click", makeGrid2)

function makeGrid() {
    console.log(color.value)
    grid.innerHTML = "";
    for (let i = 0; i < rows.value; i++) {
        let rowDiv = document.createElement('div')
        rowDiv.classList.add('row');
        grid.appendChild(rowDiv);
        for (let j=0; j < columns.value; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundColor = color.value;
            rowDiv.appendChild(box);
            box.addEventListener("click", changeColor);

        }
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = color.value


}

var Occelate = "white";

function makeGrid2() {
    console.log(color.value)
    grid.innerHTML = "";
    for (let i = 0; i < rows.value; i++) {
        if (i%2 == 0){
            Occelate = "white";
        }
        else {
            Occelate = "black";
        }
        let rowDiv = document.createElement('div')
        rowDiv.classList.add('row');
        grid.appendChild(rowDiv);
        for (let j=0; j < columns.value; j++) {
            let box = document.createElement('div');
            if (Occelate == "white") {
                Occelate = "black";

            }
            else {
                Occelate = "white";
                console.log ('c');
            }

            if (Occelate == "white"){
                box.style.backgroundColor = 'white';
            }
            else {
                box.style.backgroundColor = "black";
                console.log ('c');
            }
            
            box.classList.add('box');
            rowDiv.appendChild(box);
            box.addEventListener("click", changeColor);

        }
    }
}