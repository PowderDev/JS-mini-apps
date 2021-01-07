const container = document.querySelector('.slider-container'),
      slides = document.querySelectorAll('.slide'),
      prev = document.querySelector('.left-arrow'),
      next = document.querySelector('.right-arrow'),
      body = document.body;
let activeSlide = 0;

setBgToBody()
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
function setActiveSlide(){
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
}

next.addEventListener('click', () =>{
    activeSlide++

    if(activeSlide > slides.length -1){
        activeSlide = 0;
        setBgToBody()
        setActiveSlide()
    }else{
        setBgToBody()
        setActiveSlide()
    }


})

prev.addEventListener('click', () =>{
    activeSlide--
    if(activeSlide == -1){
        activeSlide = slides.length -1;
        setBgToBody()
        setActiveSlide()
    }else{
        setBgToBody()
        setActiveSlide()
    }
})


