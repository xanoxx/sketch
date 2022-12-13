const SIZE = 800;

const container = document.querySelector('#container');

function buildGrid(cell_size) {

    //building the rows
    for (let i = 0; i < (SIZE/cell_size); i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = `width: ${SIZE}px; height: ${cell_size}px;`;

        //building the cells for each row
        for (let i = 0; i < (SIZE/cell_size); i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.cssText = `width: ${cell_size}px; height: ${cell_size}px;`;


            cell.addEventListener('mouseover', (e) => cell.style.backgroundColor = 'gold');

            box.appendChild(cell);
        }
        container.appendChild(box);
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let msg = Number(prompt('Number of squares per side: '));
    if (msg <= 0 || msg > 100 || msg === undefined) {
        alert('Error');
    } else {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        buildGrid(msg);
    }
});

function main() {
    buildGrid(50);
}
main();
