function createHeaderEl() {
    const rowHeader = document.createElement('div');
    rowHeader.classList.add('row');
    rowHeader.innerHTML =
        `
        <div class="col logo_wrapper">
            <h1 class="logo">
                Tavolozza
            </h1>
        </div>
        <div class="col grid_gen_wrapper">
            <div class="input">
                <input class="input_grid_gen" id="input_width" type="text" inputmode="numeric" value="60">
                <input class="input_grid_gen" id="input_height" type="text" inputmode="numeric" value="30">
            </div>
        </div>
        <div class="col btn_wrapper">
            <button id="btn_gen" class="btn_gen">
                Genera
            </button>    
            <button id="btn_res" class="btn_reset">
                Reset
            </button>
        </div>
    `;

    return rowHeader;
}

function setColor(){
    currentColor = this.dataset.color;

    return currentColor;
}

function createPalette() {
    const rowHeader = document.createElement('div');
    rowHeader.classList.add('row', 'palette_wrapper');

    for(let i = 0; i < color.length; i++){
        const colorPicker = document.createElement('div');
        colorPicker.classList.add('col', 'color_picker');
        colorPicker.dataset.color = color[i];
        colorPicker.style.backgroundColor = color[i];
        colorPicker.addEventListener('click', setColor);
        rowHeader.append(colorPicker);
    }

    return rowHeader;
}

function draw() {
    const cell = this;

    cell.style.backgroundColor = currentColor;

    return cell;
}

function createSquare(width, height) {
    const gridEl = document.createElement('div');
    gridEl.classList.add('grid');

    gridEl.style.setProperty(`grid-template-columns`, `repeat(${width}, 1fr)`);
    gridEl.style.setProperty(`grid-template-row`, `repeat(${height}, 1fr)`);

    const dim = parseInt(width * height);

    for (let i = 0; i < dim; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('click', draw);
        gridEl.append(cell);
    }

    return gridEl;
}

function genGrid() {
    resGrid();
    grid.append(createSquare(dimW.value, dimH.value));
    
    return genGrid;
}
function resGrid() {
    grid.innerHTML = '';
    
    return grid;
}

const color = ['black', 'white', 'red', 'green', 'blue', 'yellow', 'magenta', 'gray', 'gold', 'tomato', 'brown'];
let currentColor = 'black';

const mainHeader = document.querySelector('.main_header');
mainHeader.append(createHeaderEl());

const palette = document.querySelector('.palette_header');
palette.append(createPalette());

const dimW = document.getElementById('input_width');
const dimH = document.getElementById('input_height');

const btnGen = document.getElementById('btn_gen');
const btnRes = document.getElementById('btn_res');

const grid = document.querySelector('.main_content');

btnGen.addEventListener('click', genGrid);
btnRes.addEventListener('click', resGrid);