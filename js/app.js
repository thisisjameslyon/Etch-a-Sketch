`use strict`

//get main div and reset button query selectors
const grid = document.getElementById(`grid`)
const gridReset = document.getElementById(`gridReset`)

//generate the default grid
generateGridLoop()

//the event listener for the reset button: clears the grid and prompts the user to enter new grid number
gridReset.addEventListener(`click`,()=>{
    grid.textContent = ``

    let userGridSelect = prompt(`Please enter a number to generate a new grid (number * number)`, 16)
    generateGridLoop(userGridSelect)
})

//generates a number * number grid for provided number (LxW)
function generateGridLoop (LxW = 16){
    
    grid.style.gridTemplateColumns = `repeat(${LxW}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${LxW}, 1fr)`

    for(let i = 1; i <= (LxW*LxW); i++){
        let gridItem = document.createElement(`div`)
        gridItem.classList.add(`gridItem`)
        grid.appendChild(gridItem)
    }

    let gridItems = document.querySelectorAll(`.gridItem`)

    gridItems.forEach((gridItem)=>{
        gridItem.addEventListener(`mouseover`,()=>{
            gridItem.classList.add(`hovered`)
        })
    })
}

