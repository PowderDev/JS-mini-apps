const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const months = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
setTime()
toggle.addEventListener('click', (e)=>{
    const html =document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime(){
    const time = new Date()
    hour.style.transform = `translate(-50%, -100%) rotate(${(time.getHours() * 15) / 2}deg)`
    minute.style.transform = `translate(-50%, -100%) rotate(${time.getMinutes() * 6}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${time.getSeconds() * 6}deg)`
    timeEl.innerHTML = `${time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`
    dateEl.innerHTML = `${months[time.getMonth()]}, ${days[time.getDay() - 1]} <span class="circle">${time.getDate()}</span>`
}

window.setInterval(()=>{
    setTime()
},1000)

