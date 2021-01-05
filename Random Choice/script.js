const tagsEl = document.querySelector('.tags'),
      textarea = document.querySelector('#textarea');

let some;
textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    createTag(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTag(value){
    const tags = value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = ''

    tags.forEach(tag =>{
        const el = document.createElement('span')
        el.classList.add('tag')
        el.innerHTML = tag
        tagsEl.appendChild(el)
    })
}

function randomSelect(){
    const times = 30
    
    const interval = setInterval(() =>{
       const randomTag = pickRandomTag()
       highLight(randomTag)
       setTimeout(() =>{
           unHighLight(randomTag)
       }, 100)
    }, 100)

    setTimeout(() =>{
        clearInterval(interval)

        setTimeout(() =>{
            const randomTag = pickRandomTag()
            highLight(randomTag)
        })
    }, times * 100)
}

function pickRandomTag(){
    const   tags = document.querySelectorAll('.tag');
    return  tags[Math.floor(Math.random() * tags.length)];
}

function highLight(tag){
    tag.classList.add('tag-highlight')
}
function unHighLight(tag){
    tag.classList.remove('tag-highlight')
}