const container = document.querySelector('.container')
const div = document.createElement('div')
const rowDiv = document.createElement('div')
const resetBtn = document.querySelector('button')
const gridSize = 800

div.style.border = "1px solid black"
div.className = "box"

rowDiv.style.display = 'flex'

drawGrid(17)
container.addEventListener("mouseover", (event) => {
    const target = event.target
    if(target.className == 'box'){
        target.style.background = 'gray'
    }
})
resetBtn.addEventListener('click', () => {
    const n = prompt('Enter n squares in new n x n grid(0..100):')
    if (n > 100 || n < 0 || !(typeof +n ==='number')){
        alert('Enter valid amount of squares.')
    }else{
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
        drawGrid(n)
    }
})
function drawGrid(n){
    const boxSize = gridSize/n
    for(let i = 0; i < n; i ++){
        const thisRow = rowDiv.cloneNode()
        container.appendChild(thisRow)
        for(let j = 0; j < n; j ++){
            const newDiv = div.cloneNode()
            newDiv.style.width = boxSize + 'px'
            newDiv.style.height = boxSize + 'px'
            thisRow.appendChild(newDiv)
        }
        
    }
}