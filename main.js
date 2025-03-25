const container = document.querySelector('.container')
const div = document.createElement('div')

div.style.border = "2px solid black"
div.style.width = "30px"
div.style.height = "30px"

const rowDiv = document.createElement('div')
rowDiv.style.display = 'flex'


for(let i = 0; i < 16; i ++){
    const thisRow = rowDiv.cloneNode()
    container.appendChild(thisRow)
    for(let j = 0; j < 16; j ++){
        const newDiv = div.cloneNode()
        thisRow.appendChild(newDiv)
    }
    
}