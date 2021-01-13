const container = document.querySelector('.container');
const SQUARES = 700

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    
    square.addEventListener('mouseout', () => removeColor(square))


    container.appendChild(square)
}


function setColor(el){
    el.style.backgroundColor = chroma.random().hex()
    el.style.boxShadow = `0 0 2px ${el.style.backgroundColor}, 0 0 10px ${el.style.backgroundColor}`
}

function removeColor(el){
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = '0 0 2px black'
}