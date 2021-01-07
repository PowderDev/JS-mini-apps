const btn = document.querySelectorAll('.ripple');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


btn.forEach(btn =>{
    btn.addEventListener('click', function (e){
        const x = e.clientX;
        const y = e.clientY;
        const btnTop = e.target.offsetTop; 
        const btnLeft = e.target.offsetLeft;
        
        const xInside = x - btnLeft;
        const yInside = y - btnTop;

        const circle = document.createElement('span')
        circle.style.backgroundColor = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
        btn.style.boxShadow = `0px 0px 100px ${circle.style.backgroundColor }`
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})