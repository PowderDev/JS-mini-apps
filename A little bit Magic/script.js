const boxCon = document.querySelector('.boxes-container');
const magicBtn = document.querySelector('.magic');

function createBoxes(){
    for(let i = 0; i <4; i++){
        for(let j = 0; j < 4; j++){
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxCon.appendChild(box)
        }
    }
}

createBoxes()

magicBtn.addEventListener('click', () => boxCon.classList.toggle('big'))