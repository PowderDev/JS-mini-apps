const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "OMG. What in the hell's name is that"
let idx = 1
let speed = 250 / speedEl.value

function writeText(){
    if(idx > text.length){
        textEl.innerText = ''
        idx = 1
    }
    textEl.innerText = text.slice(0, idx)

    idx++

    

setTimeout(writeText, speed)
    
}
writeText()

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)