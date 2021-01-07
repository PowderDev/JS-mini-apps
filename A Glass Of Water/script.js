const smallCups = document.querySelectorAll('.small-cup'),
      cup = document.querySelector('.cup'),
      liters = document.querySelector('.liters'),
      percentage = document.querySelector('.percentage'),
      remained = document.querySelector('.remained');

updateBigCup();

smallCups.forEach((cup, i) =>{
    cup.addEventListener('click', () => highLightCups(i))
})

function highLightCups(i, e){
    if(smallCups[i].classList.contains('full')){
        smallCups.forEach(cup => cup.classList.remove('full'))
        for(let j = 0; j <= i; j++){
            smallCups[j].classList.add('full')
        }
    }else{
        for(let j = 0; j <= i; j++){
            smallCups[j].classList.add('full')
        }
    }

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.small-cup.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0
    } else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330 }px`;
        percentage.innerHTML = `${fullCups / totalCups * 100 }%`;
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible';
        liters.innerHTML = `${2 -(250 * fullCups / 1000)}L`
    }

}

