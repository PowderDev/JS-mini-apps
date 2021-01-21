 const sounds = document.querySelectorAll('audio'),
          pads = document.querySelectorAll('.pads div'),
          balls = document.querySelector('.balls');

    pads.forEach((pad, i) =>{
        pad.addEventListener('click', function(e){
            createBalls(i, e)
            sounds[i].currentTime = 0;
            sounds[i].play();
        })
    })

    const createBalls = (i, e) =>{
        const ball = document.createElement('div')
        ball.style.background = `${getComputedStyle(e.target).getPropertyValue('background-color')}`
        
        if( i + 1 > 3 ){
            ball.style.animation = 'jumpRight 1s ease'
        }else{
            ball.style.animation = 'jump 1s ease'
        }


        balls.appendChild(ball)
        
        ball.addEventListener('animationend', () => ball.remove())
    }

