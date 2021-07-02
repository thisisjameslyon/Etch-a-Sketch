`use strict`;

const grid = document.getElementById(`grid`)

for(let i = 1; i<=256; i++){

 const gridItem = document.createElement(`div`)
 gridItem.classList.add(`gridItem`)
 grid.appendChild(gridItem)
}