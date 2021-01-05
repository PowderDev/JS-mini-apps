const search = document.querySelector('.search'),
      input = document.querySelector('.input'),
      btn = document.querySelector('.btn'),
      i = btn.children[0];

btn.addEventListener('click', () =>{
    search.classList.toggle('active');
    input.focus()
    console.log(i);
    i.classList.toggle('fa-search')
    i.classList.toggle('fa-cross')
})