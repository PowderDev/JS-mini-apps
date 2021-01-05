const boxes =document.querySelectorAll('.box');


window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBot = window.innerHeight / 5 * 4
    console.log(triggerBot);

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBot){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}