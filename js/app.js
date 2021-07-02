`use strict`;

const grid = document.getElementById(`grid`)
const gridReset = document.getElementById(`gridReset`)

for(let i = 1; i<=256; i++){

 const gridItem = document.createElement(`div`)
 gridItem.classList.add(`gridItem`)
 grid.appendChild(gridItem)
}

let gridItems = document.querySelectorAll(`.gridItem`)

gridItems.forEach((gridItem)=>{
    gridItem.addEventListener(`mouseover`,()=>{
        gridItem.classList.add(`hovered`)
    })
})

gridReset.addEventListener(`click`,()=>{
    gridItems.forEach((gridItem) => {
        gridItem.classList.remove(`hovered`)
    })
})