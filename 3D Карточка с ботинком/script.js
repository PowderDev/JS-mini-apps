const card = document.querySelector('.card'),
      container = document.querySelector('.container'),
      title = document.querySelector('.title'),
      purchase = document.querySelector('.purchase'),
      dsecription = document.querySelector('.info h3'),
      sizes = document.querySelector('.sizes'),
      sneaker = document.querySelector('.sneaker img');





container.addEventListener('mousemove', (e) =>{
    let xAxis = ((window.innerWidth/2 - e.pageX) / 20);
    let yAxis = ((window.innerHeight/2 - e.pageY) / 20);


    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener('mouseleave', (e) =>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = `all .5s ease`;

    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px) ';
    sizes.style.transform = 'translateZ(0px)';
    dsecription.style.transform = 'translateZ(0px)';
})

container.addEventListener('mouseenter', (e) =>{
    card.style.transition = `none`;

    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(150px) rotateZ(-180deg)';
    purchase.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(150px)';
    dsecription.style.transform = 'translateZ(150px)';
})