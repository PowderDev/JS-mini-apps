const screens = document.querySelectorAll('.screen')
const chooseBtns = document.querySelectorAll('.choose-insect-btn')
const startBtn = document.querySelector('#start-btn')
const gameContainer = document.querySelector('.game-container')
const scoreEl = document.querySelector('#score')
const message = document.querySelector('#message')
const time = document.querySelector('#time')


let seconds = 0
let score = 0;
let selected_insect = {}

startBtn.addEventListener('click', () =>  screens[0].classList.add('up'))

chooseBtns.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')

        selected_insect = {src}
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame(){
    setInterval(increaseTime, 1000)
}

function increaseTime(){
    seconds++
    let m = Math.floor(seconds / 60)
    let s = seconds % 60

    m  = m < 10 ? `0${m}` : m
    s  = s < 10 ? `0${s}` : s

    time.innerHTML = `Time: ${m}:${s}`
}

function createInsect(){
    const insect  = document.createElement('div')
    insect.classList.add('insect')
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    console.log(x);
    
    insect.innerHTML = `
        <img src="${selected_insect.src}" alt="" style={transform: rotate(${Math.floor(Math.random() * 360)}deg)}></img>
    `

    insect.addEventListener('click', catchInsect)

    gameContainer.appendChild(insect)
}

function getRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.floor(Math.random() * (width - 200) + 100 )
    const y = Math.floor(Math.random() * (height - 200) + 100 )

    return {x, y}
}

function catchInsect(){
    score++
    scoreEl.innerHTML = `Score: ${score}`
    if(score == 10){
        message.classList.add('visible')
    }

    this.classList.add('caught')
    setTimeout(this.remove(), 1000)
    
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

